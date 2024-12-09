import React from "react";
import ReactStars from "react-stars";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const BestSelling = ({
  ImgSrc,
  heading,
  price,
  discount,
  rating,
  ratecount,
}) => {
  return (
    <div className="card">
      <div className="right-4 top-5 text-black absolute">
        <Heart className="bg-white rounded-full hover:fill-primary hover:text-primary" />
        <Eye className="mt-5 rounded-full fill-white hover:text-primary hover:fill-white" />
      </div>
      <figure className="bg-gray-100 rounded w-[270px] h-[250px]">
        <img src={`Selling/${ImgSrc}.svg`} alt="selling" className="cards" />
      </figure>
      <div className="mt-4">
        <h5 className="text-base font-medium text-black">{heading}</h5>
        <div className="card-actions items-start py-2 gap-3">
          <div className="font-medium text-base text-primary">{price}</div>
          <div className="line-through text-base font-medium text-gray-500">
            {discount}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <ReactStars
            count={5}
            value={rating}
            size={28}
            color2={"#ffd700"}
            edit={false}
          />
          <h1 className="font-medium text-gray-500">({ratecount})</h1>
        </div>
        <div className="flex gap-20 items-center flex-wrap mb-6">
          <button className="relative flex items-center bg-transparent cursor-pointer text-primary font-semibold text-base transition-colors duration-300 ease-out hover:text-black">
            <a className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full">
              read more
            </a>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm group text-white hover:text-black hover:outline-double"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
