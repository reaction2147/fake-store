import "./styles/App.css";
import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./pages/shop"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/about">
            <About />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
