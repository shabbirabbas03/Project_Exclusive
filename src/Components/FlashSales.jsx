import React from "react";
import ReactStars from "react-stars";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useCartContext } from "../Context/Provider";
import toast from "react-hot-toast";

const FlashSales = ({ id, image, title, price, rating, readmore }) => {
  const { cartData, cartPrice, setCartData, setCartPrice } = useCartContext();
  const handleAddToCart = () => {
    setCartData([
      ...cartData,
      { id: id, image: image, title: title, price: price, quantity: 1 },
    ]);
    setCartPrice(Math.ceil(cartPrice + price));
    toast.success(`${title} has been added to cart`);
  };
  return (
    <div className="card justify-between items-start w-72 relative">
      <button className="btn btn-primary text-white text-xs px-4 py-1 btn-sm rounded absolute left-3 top-3">
        -40%
      </button>
      <div className="right-8 top-5 text-black absolute">
        <Heart className="bg-white rounded-full hover:fill-primary hover:text-primary" />
        <Eye className="mt-5 rounded-full fill-white hover:text-primary hover:fill-white" />
      </div>
      <figure className="bg-gray-100 w-[270px] h-[250px] rounded overflow-hidden">
        <img
          src={image}
          alt={title}
          className="max-w-32 mix-blend-multiply cards"
        />
      </figure>
      <article className="items-start py-2">
        <h1 className="text-black font-medium text-base">
          {title.substring(0, 30)}
        </h1>
        <p className="text-base font-medium text-primary">${price}</p>
        <div className="flex gap-2 items-center">
          <ReactStars
            count={5}
            value={rating?.rate}
            size={28}
            color2={"#ffd700"}
            edit={false}
          />
          <h1 className="font-medium text-gray-500">({rating?.count})</h1>
        </div>
        <div className="flex gap-20 items-center flex-wrap">
          <button className="relative flex items-center bg-transparent cursor-pointer text-primary font-semibold text-base transition-colors duration-300 ease-out hover:text-black">
            <a
              href={readmore}
              target="_blank"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full"
            >
              read more
            </a>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm group text-white hover:text-black hover:outline-double"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
};

export default FlashSales;
