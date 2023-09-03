import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './home.jpg';
import storeImage from './store.jpg';
import blogImage from './blog.png';
import "./Home.css"
import "./Button/Button"
import Button from './Button/Button';


const HomePage = () => {
  return (
    <div className="home-page">
     
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
         <div className="brand-introduction">
        <h1>Welcome to Our Agriculture Website</h1>
        <p>Discover the world of agriculture and farming.</p>
      </div>
      </div>


      <div className="card-container" >

        <Link to="/BlogComponent" className="card shadow ">
        <img
            src={storeImage}
            alt="Card"
            className="card-image"
          />
          <Button name="Blogs"/>
          <p className="card-description">Read our latest articles on farming techniques.</p>
        </Link>

        <Link to="/shop" className="card shadow ">
          <img
            src={blogImage}
            alt="Card"
            className="card-image"
          />
          <Button name="Shop"/>
          <p className="card-description">Explore our online store for agricultural products.</p>
        </Link>

      </div>
    </div>
  );
};

export default HomePage;



 