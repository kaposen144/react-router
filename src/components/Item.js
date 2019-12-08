import React from "react";

const Item = ({ match }) => {
  return <h1 className="display-3">{match.params.id}</h1>;
};

export default Item;
