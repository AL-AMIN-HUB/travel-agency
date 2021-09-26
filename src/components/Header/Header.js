import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="nav d-flex justify-content-around px-5">
        <div className="d-flex">
          <h2 className="text-white text-uppercase mt-2">
            TravelOF<span className="text-danger">People</span>
          </h2>
          <div className="input-group my-2 ms-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search rich industry people"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button className="input-group-text btn btn-danger" id="basic-addon2">
              Search
            </button>
          </div>
        </div>
        <div>
          <a style={{ borderLeft: "1px solid wheat" }} href="/home">
            Home
          </a>
          <a href="/hire">Budget</a>
          <a href="/help">Community</a>
          <a href="/about">About</a>
          <a href="/login">
            <i className="fas fa-user"></i> Login
          </a>
        </div>
      </nav>
      {/* travel minimum budget declare of header */}
      <div className="budget">
        <h1 className="explore-header text-white">Explore The World</h1>
        <p className="lead text-white">
          Travel to the most beautiful place in the world, like shahara desert! <br /> <b>Tips</b>: Did you know that you can start a travel blog for
          as low as 3 USD per month? If you are looking to start a travel blog and are looking to save some cost, I highly recommend you check out 
          <span className="text-warning"> Hostgator</span>.
        </p>
        <h2 className="text-center text-warning fs-1 fw-bolder">Total Budget: $20 Million</h2>
      </div>
    </div>
  );
};

export default Header;
