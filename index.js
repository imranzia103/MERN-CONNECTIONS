import express, { urlencoded } from 'express';

import dotenv from 'dotenv';

import userRoutes from './routers/userRoutes.js';


import mongoose from 'mongoose';




dotenv.config();

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use('/users', userRoutes );


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo DB connected sucessfully");
  } catch (error) {
    console.error(`error: ${error.message}`);
  }
};
connectDB();












app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});