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
          <a href="/help">Shop</a>
          <a href="/about">About</a>
          <a href="/login">
            <i className="fas fa-user"></i> Login
          </a>
        </div>
      </nav>
      {/* travel minimum budget declare of header */}
      <h1 className="text-center text-warning fw-bolder budget">Total Budget: $150 Million</h1>
    </div>
  );
};

export default Header;
