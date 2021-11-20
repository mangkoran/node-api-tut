// import express from 'express';
const express = require('express')
const mongoose = require('mongoose')

const app = express();

// middlewares
app.use('/posts', () => {
  console.log('/posts middleware running')
});

// routes
app.get('/', (req, res) => {
  res.send('We are on home')
});

app.get('/posts', (req, res) => {
  res.send('We are on posts')
});

// connect to db
mongoose.connect('mongodb://mangodb/?directConnection=true',
                 () => console.log('Connected to db')
);

// listen
app.listen(3000);
