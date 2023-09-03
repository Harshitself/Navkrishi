const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogcCtrl');

router.get('/blogs', blogController.getBlogs);
router.get('/blogs/:id', blogController.getBlog);
router.post('/blogs', blogController.createBlog);
router.put('/blogs/:id', blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;
