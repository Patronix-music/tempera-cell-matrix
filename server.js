/**
 * Dev servers
 * - Static (TCM): http://localhost:8000
 * - API/Proxy:   http://localhost:3000
 */

const express = require("express");
const cors = require("cors");
const path = require("path");

// =====================
// Config
// =====================
const STATIC_PORT = 8000;
const API_PORT = 3000;

const USER_AGENT = "CD-Hoes-Maker/1.0 ()";

// =====================
// Helpers
// =====================
function noStore(req, res, next) {
  res.setHeader("Cache-Control", "no-store");
  next();
}

function start(app, port, label) {
  const server = app.listen(port, () => {
    console.log(`${label} draait op http://localhost:${port}`);
  });

  server.on("error", (err) => {
    console.error(`${label} error:`, err);
    process.exitCode = 1;
  });

  return server;
}

// =====================
// 1) Static server (TCM)
// =====================
const staticApp = express();
staticApp.use(cors());
staticApp.set("etag", false); // voorkomt 304 gedoe tijdens ontwikkelen
staticApp.use(noStore);

// Serve altijd vanuit de map waar server.js staat (project root)
staticApp.use(express.static(path.join(__dirname)));

const staticServer = start(staticApp, STATIC_PORT, "TCM static");

// =====================
// 2) API/Proxy server
// =====================
const apiApp = express();
apiApp.use(cors());
apiApp.set("etag", false);
apiApp.use(noStore);

apiApp.get("/health", (req, res) => res.type("application/json").send('{"ok":true}\n'));


apiApp.get("/api/search", async (req, res) => {
  const artist = req.query.artist;
  const album = req.query.album;

  if (!artist || !album) return res.json({ results: [] });

  const results = [];

  // MusicBrainz + Cover Art Archive
  try {
    const mbUrl =
      `https://musicbrainz.org/ws/2/release-group/?query=` +
      `artist:${encodeURIComponent(artist)} AND releasegroup:${encodeURIComponent(album)}` +
      `&fmt=json&limit=5`;

    const mbResp = await fetch(mbUrl, { headers: { "User-Agent": USER_AGENT } });
    const mbData = await mbResp.json();

    for (const rg of mbData["release-groups"] || []) {
      const relResp = await fetch(
        `https://musicbrainz.org/ws/2/release/?release-group=${rg.id}&fmt=json&limit=1`,
        { headers: { "User-Agent": USER_AGENT } }
      );
      const relData = await relResp.json();
      const releaseId = relData.releases?.[0]?.id;
      if (!releaseId) continue;

      results.push({
        artist: rg["artist-credit"]?.[0]?.name || artist,
        title: rg.title,
        source: "MusicBrainz",
        frontCover: `https://coverartarchive.org/release/${releaseId}/front-600`,
        backCover: `https://coverartarchive.org/release/${releaseId}/back-600`,
      });
    }
  } catch (e) {
    console.error("MusicBrainz error:", e?.message || e);
  }

  // iTunes fallback
  try {
    const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(
      artist + " " + album
    )}&entity=album&limit=5`;

    const itResp = await fetch(itunesUrl, { headers: { "User-Agent": USER_AGENT } });
    const itData = await itResp.json();

    for (const r of itData.results || []) {
      results.push({
        artist: r.artistName,
        title: r.collectionName,
        source: "iTunes",
        frontCover: (r.artworkUrl100 || "").replace("100x100", "1200x1200"),
        backCover: null,
      });
    }
  } catch (e) {
    console.error("iTunes error:", e?.message || e);
  }

  res.json({ results });
});

const apiServer = start(apiApp, API_PORT, "Proxy");

// =====================
// Graceful shutdown
// =====================
function shutdown() {
  console.log("Stopping servers...");
  staticServer.close(() => console.log("TCM static gestopt"));
  apiServer.close(() => console.log("Proxy gestopt"));
}

process.on("SIGINT", () => {
  shutdown();
  process.exit(0);
});

process.on("SIGTERM", () => {
  shutdown();
  process.exit(0);
});
