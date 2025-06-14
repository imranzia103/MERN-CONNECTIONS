import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routers/userRoutes.js';  



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes)



dotenv.config();

const port = process.env.PORT ;

connectDB();

app.listen (port, () =>
console.log (`server is running on port : ${port}`))