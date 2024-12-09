import React from "react";
import ReactStars from "react-stars";
import { useState } from "react";
import { Heart } from "lucide-react";

const DetailProduct = ({ image, title, rating, price, description }) => {
  const [count, setCount] = useState(1);

  return (
    <section className="overflow-hidden py-12 shadow-xl">
      <div className="flex flex-wrap justify-center sm:justify-evenly items-center">
        <img src={image} alt={title} className="md:max-w-md" />
        <article className="md:max-w-xl mt-8 px-6 sm:px-8 md:px-12 lg:px-16">
          <h1 className="text-gray-900 text-3xl font-medium mb-1">
            {title.substring(0, 30)}
          </h1>
          <div className="flex gap-2 items-center">
            <ReactStars
              count={5}
              value={rating?.rate}
              size={28}
              color2={"#ffd700"}
              edit={false}
            />
            <h1 className="font-medium text-gray-400">
              ({rating?.count} Reviews)
            </h1>
          </div>
          <h2 className="text-2xl text-black font-medium py-3">${price}</h2>
          <p className="leading-relaxed text-black">
            {description.substring(0, 200)}
          </p>
          <hr className="w-5/6 border-black mt-6" />
          <div className="flex flex-col sm:flex-row mt-6 gap-4 sm:items-start md:items-center">
            <div className="flex mb-4 sm:mb-0">
              <span className="mr-3 text-black font-medium text-lg">
                Color :
              </span>
              <button className="border-2 ml-1 bg-gray-700 rounded-full w-6 h-6 hover:border-black"></button>
              <button className="border-2 ml-1 bg-indigo-500 rounded-full w-6 h-6 hover:border-black"></button>
            </div>
            <div className="flex sm:ml-0 items-center">
              <span className="mr-3 text-black text-lg font-medium">
                Size :
              </span>
              <div className="relative">
                <select className="rounded border appearance-none border-black text-black py-1 focus:ring-2 text-base pl-3 pr-10">
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-start items-center gap-6">
            <div className="text-primary-content py-10">
              <div className="flex">
                <button
                  className="btn btn-square border-gray-400 bg-outline hover:bg-primary border-2 hover:border-none rounded-e-none"
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
                <center className="border-gray-400 border-2 w-20 py-3 h-12">
                  {count <= 1 ? 1 : count}
                </center>
                <button
                  className="btn btn-square border-gray-400 bg-outline hover:bg-primary border-2 hover:border-none rounded-s-none"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <a href="/cart">
              <button
                className="btn btn-primary text-white text-base font-medium border-0 px-12 py-2 focus:outline-none rounded"
                onClick={() => {
                  setItems(items + 1);
                  const updatedCartData = [
                    ...cartData,
                    {
                      image: image,
                      title: title,
                      price: price,
                      quantity: quantity,
                      Subtotal: Subtotal,
                    },
                  ];
                  setCartData(updatedCartData);
                  setCartPrice(cartPrice + price * quantity);
                }}
              >
                Buy Now
              </button>
            </a>
            <Heart className="hover:border-gray-400 text-gray-400 rounded btn btn-square hover:fill-primary hover:text-primary px-3" />
          </div>
          <div className="flex justify-start items-center gap-3 border border-gray-400 rounded px-6 py-4 max-w-[450px] mt-6">
            <img src="/Icon/delivery.svg" alt="delivery" />
            <article className="space-y-1">
              <h3 className="text-black text-lg font-medium">Free Delivery</h3>
              <p className="text-black">
                Enter your postal code for Delivery Availability
              </p>
            </article>
          </div>
          <div className="flex justify-start items-center gap-3 border border-gray-400 rounded px-6 py-4 max-w-[450px]">
            <img src="/Icon/return.svg" alt="return" />
            <article className="space-y-1">
              <h3 className="text-black text-lg font-medium">
                Return Delivery
              </h3>
              <p className="text-black">
                Free 30 Days Delivery Returns. Details
              </p>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
};

export default DetailProduct;
