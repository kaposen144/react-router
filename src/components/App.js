import React from "react";
import { Route, Link } from "react-router-dom";

import Header from ".//Header";
import About from "./About";
import Home from "./Home";
import Goods from "./Goods";
import Details from "./Details";

import goods from "../products";

const App = () => {
  return (
    <div className="app">
      <Header />

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/goods" render={() => <Goods goods={goods} />} />
      <Route
        path="/goods/:id"
        render={props => <Details {...props} goods={goods} />}
      />
      {/* путь по которому будет доступна страница,
              компонент который будет отрисовываться тогда,
              когда пользователь переходит по этому пути
          */}
    </div>
  );
};

export default App;
