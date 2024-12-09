import React, { useEffect, useState } from "react";
import DetailProduct from "../Components/DetailProduct";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useFetchProducts();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (products) {
      const data = products.find((item) => item?.id === Number(id));
      setData(data);
    }
  }, [id, products]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DetailProduct {...data} />
    </div>
  );
};

export default SingleProduct;
