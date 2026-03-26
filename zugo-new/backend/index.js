import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// ROUTES
import clientRoutes from "./routes/clients.js";
import worksRoutes from "./routes/works.js";
import contactRoutes from "./routes/contact.js";
import dotenv from "dotenv";
import uploadRoute from "./routes/uploadRoute.js";

dotenv.config();

const app = express();

/* ---------------- MIDDLEWARE ---------------- */

app.use(cors());
app.use(express.json());

/* ---------------- STATIC FILES ---------------- */

app.use("/uploads", express.static("uploads"));

/* ---------------- ROUTES ---------------- */

app.use("/api/clients", clientRoutes);
app.use("/api/works", worksRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/upload", uploadRoute);


/* ---------------- TEST ROUTE (OPTIONAL) ---------------- */

app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

/* ---------------- DATABASE ---------------- */

mongoose.connect("mongodb://127.0.0.1:27017/zugo")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

/* ---------------- SERVER ---------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});