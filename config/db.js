import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(" Connecting to:", process.env.MONGO_URI); // debug
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(` MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(` MongoDB Connection Failed: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
