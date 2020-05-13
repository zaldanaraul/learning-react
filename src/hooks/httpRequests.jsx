import React, { Component, useState, useEffect } from "react";
import Axios from "axios";

function useAxiosGet(url) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setRequest({ loading: true, data: null, error: false });
    Axios.get(url)
      .then((response) => {
        setRequest({ loading: false, data: response.data, error: false });
      })
      .catch((error) =>
        setRequest({ loading: false, data: null, error: true })
      );
  }, [url]);

  return request;
}

export default useAxiosGet;
