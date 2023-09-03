import React from 'react';
import { Link } from 'react-router-dom';
import "../Home/Home";
import "../about/About";

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>Nav<span>Krishi</span></h3>
        <p className="footer-links">
          <Link to="/">HOME</Link>
          <Link to="/About">About</Link>
        </p>
        <p className="footer-company-name">Company Name © 2015</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>Road no-3</span> Ashok nagar, Nearby Argora chock, Ranchi</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+19.555.555.5555</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@NavKrishi.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
        <div className="footer-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
}
