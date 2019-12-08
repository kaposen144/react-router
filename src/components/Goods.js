/*
  на странице Goods (Товары) ссылка на страницу 
  с каждым товаром
*/

import React from "react";
import { Link } from "react-router-dom";

const goods = [
  {
    id: 1,
    name: "Xiaomi MI 9T"
  },
  {
    id: 2,
    name: "Samsung Galaxy A8"
  },
  {
    id: 3,
    name: "iPhone 6"
  }
];

const Goods = () => {
  return (
    <div>
      {/*тут сразу достали нужные св-ва */}
      {goods.map(({ id, name }) => (
        <Link to={`/goods/${id}`} key={id}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Goods;
