import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex justify-content-evenly">
        <h3 className="text-white">WANT TO JOIN OUR EXCLUSIVE COMMUNITY?</h3>
        <div className="input-group w-25">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your email..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <button className="input-group-text btn btn-danger" id="basic-addon2">
            Subscribe
          </button>
        </div>
      </div>
      <p className="lead text-white text-center mt-3">All rights reserved by Al Amin</p>
      <p className="lead text-white text-center">copyright &copy;2021</p>
    </div>
  );
};

export default Footer;
