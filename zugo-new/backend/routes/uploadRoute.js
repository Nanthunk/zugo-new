import express from "express";
import upload from "../middleware/multer.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

const router = express.Router();

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "my_app_uploads", // optional folder
    });

    // Remove file from local after upload
    fs.unlinkSync(req.file.path);

    res.json({
      success: true,
      imageUrl: result.secure_url,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;