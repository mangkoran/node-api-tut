// const express = require('express');
// const Post = require('../models/Post');
import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// get post
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch(err) {
    res.json({ message: err });
  }
});

// submit post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);

  } catch(err) {
    res.json({ message: err });
  }
});

//specific post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch(err) {
    res.json({ message: err });
  }
});

//delete post
router.delete('/:postId', async (req, res) => {
  try {
    // const removedPost = await Post.remove({ _id: req.params.postId });
    const removedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removedPost);
  } catch(err) {
    res.json({ message: err });
  }
});

//update post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch(err) {
    res.json({ message: err });
  }
});

// module.exports = router;
export default router;
