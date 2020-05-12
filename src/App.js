import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/helloWorld";
import CounterExample from "./components/counterExample";

function App() {
  return (
    <div className="App">
      <CounterExample name="Jared" />
    </div>
  );
}

export default App;
