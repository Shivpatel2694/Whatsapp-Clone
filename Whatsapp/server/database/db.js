import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  retryWrites: true,
  w: "majority",
};

const getMongoURL = () => {
  if (!DB_USERNAME || !DB_PASSWORD || !DB_NAME) {
    throw new Error("Missing DB credentials or DB name in .env");
  }
  return `mongodb://${DB_USERNAME}:${encodeURIComponent(DB_PASSWORD)}@localhost:27017/${DB_NAME}?authSource=admin`;
};

const Connection = async () => {
  try {
    const URL = getMongoURL();
    await mongoose.connect(URL, mongooseOptions);

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("⚠️ MongoDB disconnected");
    });

    process.on("SIGINT", async () => {
      try {
        await mongoose.connection.close();
        console.log("🔌 MongoDB connection closed on app termination");
        process.exit(0);
      } catch (err) {
        console.error("Error during disconnection:", err);
        process.exit(1);
      }
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default Connection;
