const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// routes
app.get('/', (req, res) => {
  res.send('We are on home')
});

app.get('/posts', (req, res) => {
  res.send('We are on posts')
});

// connect to db
mongoose.connect(process.env.MONGODB_URL,
                 () => console.log('Connected to ' + process.env.MONGODB_URL)
);

// listen
app.listen(3000);
