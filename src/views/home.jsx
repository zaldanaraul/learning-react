import React, { Component } from "react";
import HelloWorld from "../components/helloWorld";

const Home = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">This is the home page</h1>
      <HelloWorld name="Jared" />
    </div>
  );
};

export default Home;
