import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Item from "./components/Item";
import Items from "./components/Items";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {/*
        <Route exact path="/items" component={Items} />
        <Route path="/items/:id" component={Item} />
        */}
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
