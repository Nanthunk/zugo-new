import express from "express";
const router = express.Router();

import Work from "../models/work.js";
import multer from "multer";
import path from "path";
import fs from "fs"; // ✅ IMPORTANT

// STORAGE
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// FILE FILTER (image + video)
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("image/") ||
    file.mimetype.startsWith("video/")
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only images and videos allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter
});


// ==========================
// GET ALL WORKS
// ==========================
router.get("/", async (req, res) => {
  try {
    const works = await Work.find().sort({ _id: -1 });
    res.json(works);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ==========================
// ADD WORK
// ==========================
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Upload failed" });
    }

    const newWork = new Work({
      image: `/uploads/${req.file.filename}`,
      category: req.body.category
    });

    await newWork.save();

    res.json(newWork);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ==========================
// DELETE WORK
// ==========================
router.delete("/:id", async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);

    if (!work) {
      return res.status(404).json({ message: "Work not found" });
    }

    const filePath = path.join(process.cwd(), work.image);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await Work.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;