// BlogDetail.js
import React, {useState } from 'react'
import {useParams} from 'react-router-dom'
import './BlogDetail.css';
import { blogs } from './Blogs.js'; 

const BlogDetail = ({blog}) => {
    const params = useParams()
    const [item, setitem] = useState([])
    if(params.id){

        blogs.forEach(singleblog => {
            if(singleblog._id === params.id) setitem(singleblog)
        })
    }
  return (
    <div className="blog-detail">
      <h2 className="blog-title">{item.title}</h2>
      {/* <div className="blog-meta">
        {blog.date} | {blog.author}
      </div> */}
      <div className="blog-content">{item.content}</div>
    </div>
  );
};

export default BlogDetail;
