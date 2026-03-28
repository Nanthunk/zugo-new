import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ROUTES
import clientRoutes from "./routes/clients.js";
import worksRoutes from "./routes/works.js";
import contactRoutes from "./routes/contact.js";
import uploadRoute from "./routes/uploadRoute.js";

// CONFIG
dotenv.config();

const app = express();

/* ---------------- FIX FOR __dirname (IMPORTANT for ES MODULES) ---------------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ---------------- MIDDLEWARE ---------------- */

app.use(cors());
app.use(express.json());

/* ---------------- STATIC FILES (🔥 FIXED) ---------------- */

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, filePath) => {
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);

/* ---------------- ROUTES ---------------- */

app.use("/api/clients", clientRoutes);
app.use("/api/works", worksRoutes);
app.use("/api/contact", contactRoutes);
// app.use("/api/upload", uploadRoute);

/* ---------------- TEST ROUTE ---------------- */

app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

/* ---------------- DATABASE ---------------- */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Error:", err));

/* ---------------- SERVER ---------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});