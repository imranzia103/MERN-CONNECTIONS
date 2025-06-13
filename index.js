import express, {urlencoded} from 'express';

import cookieParser from 'cookie-parser';

import path from 'path';



import dotenv from 'dotenv';

import connectDB from './config/db.js';



const app = express();

dotenv.config();

connectDB();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use(cookieParser());

app.use(urlencoded ({extended : true}));

app.get('/', (req, res) =>  {

    res.send( 'helloyyy world!' );

})



app.listen(port, () => {
    console.log(`Server is running at port : ${port} `)
})















