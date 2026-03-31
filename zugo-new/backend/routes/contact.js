import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

/* ---------------- MAIL CONFIG ---------------- */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "zugopvtnetwork@gmail.com",
    pass: "lssumbcbmuqqgoaz"
  }
});

/* ---------------- CONTACT FORM ---------------- */

router.post("/", async (req, res) => {
  console.log("Incoming Data:", req.body);

  try {
    const { firstName, lastName, email, phone, company, location, message } = req.body;

    // 🛑 Basic validation
    if (!firstName || !email || !message) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const info = await transporter.sendMail({
  from: `"Zugo Website" <zugopvtnetwork@gmail.com>`,
  replyTo: email,
  to: "zugopvtnetwork@gmail.com",
  subject: "New Enquiry from Zugo Website",
  html: `
    <h3>New Enquiry</h3>
    <p><b>Name:</b> ${firstName} ${lastName}</p>
    <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Company:</b> ${company}</p>
    <p><b>Location:</b> ${location}</p>
    <p><b>Message:</b> ${message}</p>
  `
});

    console.log("✅ Email sent:", info.response);

    res.status(200).json({ message: "Mail sent successfully" });

  } catch (err) {
    console.log("❌ ERROR FULL:", err);
    res.status(500).json({ error: err.message });
  }
});

/* ---------------- TEST MAIL ---------------- */

router.get("/test-mail", async (req, res) => {
  try {
    await transporter.sendMail({
      from: "zugopvtnetwork@gmail.com",
      to: "zugopvtnetwork@gmail.com",
      subject: "Test Mail",
      text: "Working ✅"
    });

    res.send("Mail Sent ✅");

  } catch (err) {
    console.log("❌ TEST ERROR:", err);
    res.send("Error ❌");
  }
});

export default router;