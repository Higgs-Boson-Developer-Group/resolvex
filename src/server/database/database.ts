"use server";

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // Load environment variables from.env file

let isConnected = false; // Global variable to track the connection status

const dbConnect = async () => {
	if (isConnected) {
		console.log("✅ MongoDB is already connected");
		return;
	}

	try {
		const MONGO_URI = process.env.MONGO_URI as string; // Use .env for secrets
		if (!MONGO_URI) {
			throw new Error("MONGO_URI is not defined in .env file");
		}

		const { connection } = await mongoose.connect(MONGO_URI, {
			dbName: "mydatabase", // Optional
		});

		isConnected = connection.readyState === 1;

		if (isConnected) console.log("✅ Connected to MongoDB");
	} catch (error) {
		console.error("❌ Error connecting to MongoDB:", error);
	}
};

export default dbConnect;
