import React from "react";
import logo from "./logo.svg";
//import CounterExample from "./components/counterExample";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./views/about";
import Home from "./views/home";
import Product from "./views/product";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header></Header>

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
