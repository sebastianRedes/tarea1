import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

//import component

import HomePage from "./Pages/homepage/homepage.component.jsx";
import Pajaro from "./Pages/pajaro/pajaro.component.jsx";
import Header from "./Components/header/header.component.jsx";
import About from "./Components/about/about.component.jsx";
import PajaroGrande from "./Pages/pajaro-grande/pajaro-grande.component";
class App extends React.Component {
  constructor() {
    super();
  }

  //ciclos de vida

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/pajaros" component={Pajaro} />
          <Route path="/about" component={About} />
          <Route path="/pajaros-grandes" component={PajaroGrande} />


        </Switch>
      </div>
    );
  }
}

export default App;
