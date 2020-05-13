import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";

const Product = (props) => {
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,
  });
  let { id } = useParams();
  if (props.id) {
    id = props.id;
  }
  const url = "https://5ebb15e4f2cfeb001697c8e0.mockapi.io/products/" + id;
  let content;

  useEffect(() => {
    setProduct({ loading: true, data: null, error: false });
    Axios.get(url)
      .then((response) => {
        setProduct({ loading: false, data: response.data, error: false });
      })
      .catch(() => {
        setProduct({ loading: false, data: null, error: true });
      });
  }, [url]);

  if (product.loading) {
    content = <Loader />;
  }

  if (product.error) {
    content = <p>There was an error. Please try again.</p>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.images} alt={product.name} />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div>{product.data.description}</div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Product;
