import { useState, useEffect } from "react";

export const useFetchProducts = () => {

  const [products, setProducts] = useState([]);

  const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const response = await data.json();
        setProducts(response);
      } catch (error) {
        console.error(error.message);
      }
  }
    useEffect(() => {
      fetchData();
    }, []);

    return {
        products
    };
  };
  