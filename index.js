import express from "express"
import mongoose from "mongoose"
import userRoutes from "./router/userRoutes.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use("/users", userRoutes);

const connectDB = async () => {
    try {await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Sucessfully");
        
    } catch (error) {
        console.error(`error:${error.message}`);
        
    }
}
connectDB();
app.listen(port, () => {
    console.log(`server is running on port:${port}`);
});