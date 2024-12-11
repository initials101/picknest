import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js"

import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
    console.log("Server is running on port: ", PORT);
});