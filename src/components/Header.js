import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">Home</Link>
      <Link to="/about">О нас</Link>
      <Link to="/goods">Товары</Link>
      {/* <Link to="/items">Items</Link> */}
    </div>
  );
};

export default Header;
