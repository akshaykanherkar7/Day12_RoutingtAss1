import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        border: "1px solid lightgray",
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Navbar;
