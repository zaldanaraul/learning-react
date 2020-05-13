import React, { Component, useState, useEffect } from "react";

import Loader from "../components/loader";
import ProductCard from "../components/ProductCard";
import useAxiosGet from "../hooks/httpRequests";

const Home = () => {
  const url = "https://5ebb15e4f2cfeb001697c8e0.mockapi.io/products";

  let products = useAxiosGet(url);

  let content = null;

  if (products.loading) {
    content = <Loader />;
  }

  if (products.error) {
    content = <p>There was an error. Please try again</p>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }

  console.log(products);
  return (
    <div>
      <h1 className="font-bold text-2xl">Best Sellers</h1>
      {content}
    </div>
  );
};

export default Home;
