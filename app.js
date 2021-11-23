// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv').config();
// const cors = require('cors');
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'

const app = express();
const parsedDotenv = dotenv.config().parsed;
// const printDotenv = console.log(dotenvResult.parsed.MONGODB_URL);

// middlewares
app.use(express.json());
app.use(cors());

// const postsRoute = require('./routes/posts');
import postsRoute from './routes/posts.js';
app.use('/posts', postsRoute);

// routes
app.get('/', (_req, res) => {
  res.send('We are on home')
});

app.get('/posts', (_req, res) => {
  res.send('We are on posts')
});

// connect to db
// mongoose.connect(process.env.MONGODB_URL,
mongoose.connect(parsedDotenv.MONGODB_URL,
                 () => console.log('Connected to ' + process.env.MONGODB_URL)
);

// listen
app.listen(3000);
