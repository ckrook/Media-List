const express = require("express");
const router = express.Router();

const { images, videos } = require("../data");

router.get("/health", (req, res) => {
  res.send(200);
});

// GET: /images
router.get("/images", (req, res) => {
  res.send(images);
});

// GET: /images:id
router.get("/images/:id", (req, res) => {
  const id = req.params.id;
  res.send(data[id]);
});

// GET: /videos
router.get("/videos", (req, res) => {
  res.send(videos);
});

// GET: /videos:id
router.get("/videos/:id", (req, res) => {
  const id = req.params.id;
  res.send(data[id]);
});

module.exports = router;
