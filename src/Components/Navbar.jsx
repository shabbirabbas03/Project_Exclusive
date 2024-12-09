import { Heart } from "lucide-react";
import { NavItems } from "../constant";
import { User } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { CircleX } from "lucide-react";
import { Star } from "lucide-react";
import { LogOut } from "lucide-react";
import { useCartContext } from "../Context/Provider";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const { cartData, cartPrice } = useCartContext();
  const items = cartData.length;
  return (
    <div className="navbar mt-2">
      <div className="navbar-start">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src="/icon.png" alt="icon" className="h-6 w-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-950 text-white rounded z-50 w-28 mt-3 shadow-lg backdrop-filter backdrop-blur-md bg-opacity-30"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Sign Up</a>
            </li>
          </ul>
        </div>

        <div className="md:text-3xl text-black font-semibold font-sans">
          Exclusive
        </div>
      </div>

      <div className="navbar mx-auto hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 relative flex items-center bg-transparent cursor-pointer text-black font-semibold text-base transition-colors duration-300 ease-out">
          {NavItems.map((items) => (
            <li
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full"
              key={items.title}
            >
              <a href={items.href}>{items.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center gap-4 ml-20 sm:ml-0">
        <div className="hidden lg:flex items-center gap-8">
          <label className="input hover:input-bordered border-slate-300 flex items-center bg-white text-black">
            <input type="text" className="grow text-sm" placeholder="Search" />
            <Search />
          </label>
        </div>

        <Heart className="text-black" />

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <ShoppingCart />
                <span className="badge badge-sm bg-primary border-none text-black indicator-item">
                  {items}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-slate-950 text-white rounded mt-4 z-50 w-56 h-52 shadow-lg backdrop-filter backdrop-blur-md bg-opacity-30"
            >
              <div className="card-body mt-6">
                <span className="text-lg font-bold">{items} Items</span>
                <span className="text-info">Subtotal: ${cartPrice}</span>
                <div className="card-actions py-4">
                  <a
                    href="/cart"
                    className="btn btn-primary text-white btn-block"
                  >
                    View cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end md:block hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-outline btn-circle border-none hover:bg-primary"
          >
            <div className="w-10 rounded-full text-black py-2 px-2">
              <User />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-950 text-white rounded z-50 w-56 h-48 space-y-1 mt-4 shadow-lg backdrop-filter backdrop-blur-md bg-opacity-30"
          >
            <li className="hover:bg-primary hover:text-black hover:border-x-2 rounded">
              <a className="justify-start gap-4">
                <User />
                Manage My Account
              </a>
            </li>
            <li className="hover:bg-primary hover:text-black hover:border-x-2 rounded">
              <a className="justify-start gap-4">
                <ShoppingBag />
                My Order
              </a>
            </li>
            <li className="hover:bg-primary hover:text-black hover:border-x-2 rounded">
              <a className="justify-start gap-4">
                <CircleX />
                My Cancellations
              </a>
            </li>
            <li className="hover:bg-primary hover:text-black hover:border-x-2 rounded">
              <a className="justify-start gap-4">
                <Star />
                My Reviews
              </a>
            </li>
            <li className="hover:bg-primary hover:text-black hover:border-x-2 rounded">
              <a className="justify-start gap-4">
                <LogOut />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
