import React from "react";

const Good = ({ match, goods }) => {
  const good = goods.find(good => good.id === match.params.good);
  return (
    <div>
      <div>{good.name}</div>
    </div>
  );
};

export default Good;
