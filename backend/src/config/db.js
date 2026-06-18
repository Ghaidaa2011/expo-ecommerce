import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log(`\n✅ Connected to MONGODB: ${conn.connection.host}`);
  } catch (error) {
    console.error("\n💥 MONGODB connection error");
    throw error;
  }
};