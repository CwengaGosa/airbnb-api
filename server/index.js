import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";

const port = process.env.PORT || 8000 //port runs from 4000 or 8000
connectDB();
const app = express();





app.listen(port, ()=>console.log(`server started on ${port}`))