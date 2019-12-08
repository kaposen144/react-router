/*
  на странице Goods (Товары) карточки с товарами,
  можно перейти на страницу каждого товара
*/

import React from "react";
import { Link, Route } from "react-router-dom";

// import Good from "./Good";

const goods = [
  {
    id: 1,
    name: "Xiaomi MI 9T",
    description: "123"
  },
  {
    id: 2,
    name: "Samsung Galaxy A8",
    description: "123"
  },
  {
    id: 3,
    name: "iPhone 6",
    description: "123"
  }
];

const Goods = () => {
  return (
    <React.Fragment>
      <div className="cards">
        {/*тут сразу достали нужные св-ва */}
        {goods.map(({ id, name }) => (
          <Link to={`/goods/${id}`} key={id}>
            {/* тут карточка с товаром*/}
            {name}
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Goods;
