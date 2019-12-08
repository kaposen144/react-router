import React from "react";
import { NavLink } from "react-router-dom";

const Items = () => {
  return (
    <div>
      <NavLink to="/items/1">iphone</NavLink>
      <NavLink to="/items/2">huawei</NavLink>
    </div>
  );
};

export default Items;
