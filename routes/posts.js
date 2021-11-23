// const express = require('express');
// const Post = require('../models/Post');
import express from 'express';
import Post from '../models/Post.js';
import lodash from 'lodash';

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
    const post = await Post.findById(req.params.postId);
    let query = { $set: { } };
    lodash.forEach(req.body, (_value, key) => {
      (post[key] && post[key] !== req.body[key]) && (query.$set[key] = req.body[key])
    });
    // for (let key in req.body) {
    //   if (post[key] && post[key] !== req.body[key])
    //     query.$set[key] = req.body[key];
    // }
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      query
    );
    res.json(updatedPost);
  } catch(err) {
    res.json({ message: err });
  }
});

// module.exports = router;
export default router;
