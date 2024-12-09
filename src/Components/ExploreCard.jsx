import React from "react";
import ReactStars from "react-stars";
import { Heart } from "lucide-react";
import { Eye } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useCartContext } from "../Context/Provider";
import toast from "react-hot-toast";

const ExploreCard = ({
  id,
  image,
  title,
  price,
  description,
  category,
  rating,
}) => {
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
    <div className="mx-auto w-72 relative">
      <figure className="rounded bg-gray-100 w-[270px] h-[250px] flex items-center justify-center">
        <div className="right-7 top-5 text-black absolute">
          <Heart className="bg-white rounded-full hover:fill-primary hover:text-primary" />
          <Eye className="mt-5 rounded-full fill-white hover:text-primary hover:fill-white" />
        </div>
        <img
          src={image}
          alt={title}
          className="max-w-32 object-cover cards mix-blend-multiply"
        />
      </figure>
      <div className="mt-4">
        <h3 className="text-base text-black font-semibold">
          {title.substring(0, 30)}
        </h3>
        <p className="py-2 text-base font-medium text-primary">${price}</p>
        <div className="flex items-center gap-2">
          <ReactStars
            count={5}
            value={rating?.rate}
            size={28}
            color2={"#ffd700"}
            edit={false}
          />
          <h1 className="font-medium text-gray-500">({rating?.count})</h1>
        </div>
      </div>
      <div className="flex gap-20 items-center flex-wrap">
        <button className="relative flex items-center bg-transparent cursor-pointer text-primary font-semibold text-base transition-colors duration-300 ease-out hover:text-black">
          <a className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-7px] after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full">
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
    </div>
  );
};
export default ExploreCard;
