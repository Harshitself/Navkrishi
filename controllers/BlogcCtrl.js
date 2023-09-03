const Blog = require('../models/BlogModel');

const blogController = {};

blogController.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

blogController.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(404).json({ message: 'Blog not found' });
  }
};

blogController.createBlog = async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    body: req.body.body
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

blogController.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

blogController.deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    res.json(deletedBlog);
  } catch (err) {
    res.status(404).json({ message: 'Blog not found' });
  }
};

module.exports = blogController;
