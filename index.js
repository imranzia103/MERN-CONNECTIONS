import express, { urlencoded } from "express";

import dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(urlencoded({ extended: true }));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected Sucesfully...mongoDB");
  } catch (error) {
     console.error(`error:${error.message}`);
  }
};
connectDB();

app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
