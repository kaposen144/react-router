import React from "react";

const Good = ({ match }) => {
  return <h1>:id товара: {match.params.id}</h1>;
};

export default Good;
