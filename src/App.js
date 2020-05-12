import React from "react";
import logo from "./logo.svg";
//import CounterExample from "./components/counterExample";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./views/about";
import Home from "./views/home";

function App() {
  return (
    <div>
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
          </Switch>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
