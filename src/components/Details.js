import React from "react";

const Details = ({ match, goods }) => {
  const good = goods.find(good => good.id === match.params.id);
  return (
    <div>
      <div>{good.price}</div>
    </div>
  );
};

export default Details;
