import { URL_MONGO } from "./config.js";
import mongoose from "mongoose";
// Conectar a la base de datos
export const connectDB = async () => {
    try {
        await mongoose.connect(URL_MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};