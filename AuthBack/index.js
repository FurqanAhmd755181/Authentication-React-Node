import express from "express";
import connectDB from "../AuthBack/config/db.js";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
app.use(express.json()); // Middleware for JSON

connectDB();

// Use PORT from .env or fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
)
