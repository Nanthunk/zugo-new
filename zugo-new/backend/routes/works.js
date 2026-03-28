import express from "express";
const router = express.Router();

import Work from "../models/work.js";
import upload from "../middleware/multer.js"; // ✅ use your multer
import cloudinary from "../config/cloudinary.js"; // ✅ cloudinary

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
// ADD WORK (UPLOAD TO CLOUDINARY)
// ==========================
router.post("/", upload.single("image"), async (req, res) => {
  try {

    const streamUpload = (buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "works" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });
    };

    const result = await streamUpload(req.file.buffer);

    const newWork = new Work({
      image: result.secure_url,
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

    // 🔥 SAFE PUBLIC ID EXTRACT
    const urlParts = work.image.split("/");
    const fileWithExt = urlParts[urlParts.length - 1]; // abc123.png
    const publicId = "works/" + fileWithExt.substring(0, fileWithExt.lastIndexOf("."));

    // 🔥 DELETE FROM CLOUDINARY
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "image" // 👈 important
    });

    // 🔥 DELETE FROM DB
    await Work.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted successfully" });

  } catch (err) {
    console.error("DELETE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;