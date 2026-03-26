import express from "express";
const router = express.Router();

import Client from "../models/client.js";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";

/* ---------- MULTER (memory storage) ---------- */

const storage = multer.memoryStorage();
const upload = multer({ storage });

/* ---------- GET ALL CLIENT LOGOS ---------- */

router.get("/", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ---------- ADD CLIENT LOGO (CLOUDINARY) ---------- */

router.post("/add", upload.single("logo"), async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
      { folder: "clients" }
    );

    const newClient = new Client({
      logo: result.secure_url
    });

    await newClient.save();

    res.json({ message: "Uploaded", data: newClient });

  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});
/* ---------- DELETE CLIENT LOGO ---------- */

router.delete("/:id", async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Client deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;