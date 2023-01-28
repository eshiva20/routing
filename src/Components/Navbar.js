import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        style={{ display: "flex", gap: "10px"}}
        className="nav"
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
