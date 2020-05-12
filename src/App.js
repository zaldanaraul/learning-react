import React from "react";
import logo from "./logo.svg";
import HelloWorld from "./components/helloWorld";
//import CounterExample from "./components/counterExample";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header></Header>
      <HelloWorld name="Jared" />
      <Footer />
    </div>
  );
}

export default App;
