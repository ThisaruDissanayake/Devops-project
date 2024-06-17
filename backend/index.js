//backend/index.js

import express from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import  usersRoute from './routes/usersRoute.js';
import techniciansRoute from  './routes/techniciansRoute.js';
import cors from 'cors';
const app = express();
//Middleware for passing request body
app.use(express.json());

app.use(cors());
app.get('/',(request,response)=>{
console.log(request)
return response.status(234).send('Welcome To the MERN Project');
});

 app.use('/technicians', techniciansRoute);
 app.use('/users',usersRoute);

mongoose
.connect(mongoDBURL)
.then(() =>{
 console.log('App connected to database');
 app.listen(PORT, () => {
    console.log('App is listening to port :' + PORT);
});
})
.catch((error)=>{
console.log(error);
});