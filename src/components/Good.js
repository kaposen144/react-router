import React from "react";

class Good extends React.Component {
  render() {
    const good = this.props.goods.find(
      good => good.id === this.props.match.params.goodId
    );
    return (
      <div>
        <div>{good.name}</div>
        <div>{good.price}</div>
      </div>
    );
  }
}

export default Good;
