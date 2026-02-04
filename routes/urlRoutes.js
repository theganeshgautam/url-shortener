import express from "express";
import Url from "../models/urlModel.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/shorten", authMiddleware, async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: "Original URL is required" });
    }

    if (!req.user) {
      return res.status(401).json({ message: "Not authorized, no user found" });
    }

    //const shortId = Math.random().toString(36).substring(2, 8);

    const newUrl = await Url.create({
      user: req.user._id,
      originalUrl,
      shortId,
    });

    res.json(newUrl);
  } catch (err) {
    console.error(" Error creating short URL:", err);
    res.status(500).json({ message: "Server Error: " + err.message });
  }
});


router.get("/", authMiddleware, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Not authorized, no user found" });
    }

    const urls = await Url.find({ user: req.user._id });
    res.json(urls);
  } catch (err) {
    console.error(" Error fetching URLs:", err); // full error object
    res
      .status(500)
      .json({ message: "Server Error", error: err.message, stack: err.stack });
  }
});


router.get("/:shortId", async (req, res) => {
  try {
    const url = await Url.findOne({ shortId: req.params.shortId });
    if (!url) {
      return res.status(404).json({ message: "URL not found" });
    }

    // url.clicks++;
    // await url.save();

    url.clicks++;
    url.accessLogs.push({ timestamp: new Date() });
    await url.save();

    res.redirect(url.originalUrl);
  } catch (err) {
    console.error(" Error redirecting:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
