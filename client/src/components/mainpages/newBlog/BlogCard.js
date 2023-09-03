// BlogCard.js
import React from 'react';
import './BlogCard.css';
import { Link } from 'react-router-dom'

const BlogCard = ({blog}) => {
  return (
    <div className="blog-card">
      <h2 className="blog-title">{blog.title}</h2>
      <p className="blog-description">{blog.content}</p>
      {/* <button className="read-more-button">Read More</button> */}
      
      <Link id="btn" to={`/blog/${blog.id}`}>
  <button className="read-more-button">Read More</button>
</Link>

    </div>
  );
};

export default BlogCard;

