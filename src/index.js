import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";

import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Goods from "./components/Goods";
import Good from "./components/Good";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/goods" component={Goods} />
        <Route path="/goods/:good" component={Good} />
        {/* путь по которому будет доступна страница,
            компонент который будет отрисовываться тогда,
            когда пользователь переходит по этому пути
        */}
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
