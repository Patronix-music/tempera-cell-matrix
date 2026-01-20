const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store");
  next();
});


app.use(express.static(__dirname));
app.listen(8000, () => console.log("http://localhost:8000"));

const USER_AGENT = "CD-Hoes-Maker/1.0 (mailto:patrickpiersma@icloud.com)";
const PORT = 3000;

app.get("/api/search", async (req, res) => {
  const artist = req.query.artist;
  const album = req.query.album;

  if (!artist || !album) return res.json({ results: [] });

  let results = [];

  try {
    const mbUrl = `https://musicbrainz.org/ws/2/release-group/?query=artist:${encodeURIComponent(artist)} AND releasegroup:${encodeURIComponent(album)}&fmt=json&limit=5`;
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
        backCover: `https://coverartarchive.org/release/${releaseId}/back-600`
      });
    }
  } catch (e) {
    console.error("MusicBrainz error:", e.message);
  }

  // iTunes fallback
  try {
    const itunesUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(artist + " " + album)}&entity=album&limit=5`;
    const itResp = await fetch(itunesUrl, { headers: { "User-Agent": USER_AGENT } });
    const itData = await itResp.json();

    for (const r of itData.results || []) {
      results.push({
        artist: r.artistName,
        title: r.collectionName,
        source: "iTunes",
        frontCover: r.artworkUrl100.replace("100x100", "1200x1200"),
        backCover: null
      });
    }
  } catch (e) {
    console.error("iTunes error:", e.message);
  }

  res.json({ results });
});

app.listen(PORT, () => console.log(`Proxy draait op http://localhost:${PORT}`));
