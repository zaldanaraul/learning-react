import React from "react";
import logo from "./logo.svg";
import HelloWorld from "./components/helloWorld";
import CounterExample from "./components/counterExample";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header></Header>
      <HelloWorld name="Jared" />
    </div>
  );
}

export default App;
