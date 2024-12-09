import React from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ExploreCard from "../Components/ExploreCard";

const Explore = () => {
  const { products } = useFetchProducts();
  const limitedProducts = products.slice(0, 8);

  return (
    <div className="py-8">
      <div className="flex items-center gap-4">
        <div className="bg-primary px-3 py-6 rounded-md"></div>
        <h6 className="text-primary font-semibold">Our Products</h6>
      </div>
      <div className="py-3">
        <h1 className="text-4xl text-black font-semibold">
          Explore Our Products
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 py-14 flex-wrap">
        {limitedProducts.map((item) => (
          <ExploreCard key={item.id} {...item} />
        ))}
      </div>
      <center>
        <button
          className="btn btn-primary mt-5 text-white rounded px-10"
          aria-label="View all products"
        >
          View All Products
        </button>
      </center>
    </div>
  );
};

export default Explore;
