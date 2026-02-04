import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import urlRoutes from "./routes/urlRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/auth", authRoutes);
app.use("/api/url", urlRoutes);

app.get("/", (req, res) => {
  res.send(" URL Shortener API is running...");
});
app.use((err, req, res, next) => {
  console.error(" Global error:", err.stack);
  res.status(500).json({
    message: "Something broke!",
    error: err.message,
    stack: err.stack,
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));

