// AllBlogs.js
import React from 'react';
import BlogCard from './BlogCard';
import './AllBlogs.css';
import { blogs } from './Blogs.js'; // import the blogs array from blogs.js

export default function AllBlogs() {
  return (
    <>
      {/* Hello world */}
      <section className="title container">
        <div className="row">
          <div className="col-md-12">
            <h1>All Blog</h1>
            <div className="seperator" />
            <p>Modern Farming Blogs</p>
          </div>
        </div>
      </section>
      {/* Start Blog Layout */}
      <div className="all-blogs">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
}
