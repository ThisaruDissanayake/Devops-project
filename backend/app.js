// backend/app.js

import express from "express";
import mongoose from "mongoose";
import auth from './routes/auth.js';
import cors from 'th frocors';


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb+srv://root:1234@technicians-booking-sys.cblbgyc.mongodb.net/users-collection?retryWrites=true&w=majority&appName=AtlasApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

app.use(cors());
app.use(bodyParser.json());

// Import and use the authentication routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Your other routes and middleware can be added here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






