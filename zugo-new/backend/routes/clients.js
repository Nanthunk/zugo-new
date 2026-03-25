import express from "express";
const router = express.Router();
import Client from "../models/client.js";
import multer from "multer";

/* ---------- MULTER STORAGE ---------- */

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

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

/* ---------- ADD CLIENT LOGO ---------- */

router.post("/add", upload.single("logo"), async (req, res) => {

  try {

    const newClient = new Client({
      logo: req.file.filename
    });

    await newClient.save();

    res.json({ message: "Logo added successfully" });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

/* ---------- DELETE CLIENT LOGO ---------- */

router.delete("/:id", async (req, res) => {

  try {

    const id = req.params.id;

    await Client.findByIdAndDelete(id);

    res.json({ message: "Client deleted successfully" });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});

export default router;