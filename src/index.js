import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
// import Goods from "./components/Goods";
// import Good from "./components/Good";

import goods from "./data";

const Goods = () => {
  return (
    <React.Fragment>
      <div className="cards">
        {/*тут сразу достали нужные св-ва */}
        {goods.map(({ id, name }) => (
          <Link to={`/goods/${id}`} key={id}>
            {/* тут карточка с товаром*/}
            <div className="card">{name}</div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

const Good = ({ match, goods }) => {
  // const good = goods.find(good => good.id === match.params.goodId);
  return <h1>{match.params.goodId}</h1>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/goods" component={Goods} goods={goods} />
          <Route path="/goods/:goodId" component={Good} goods={goods} />
          {/* путь по которому будет доступна страница,
              компонент который будет отрисовываться тогда,
              когда пользователь переходит по этому пути
          */}
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
