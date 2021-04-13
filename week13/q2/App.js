import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import Recipe from "./components/recipe";
import Menu from "./components/menu";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/menu" component={Menu} />
            <Route path="/recipe" component={Recipe} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
