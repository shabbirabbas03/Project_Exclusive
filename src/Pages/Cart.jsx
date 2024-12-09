import toast from "react-hot-toast";
import { useCartContext } from "../Context/Provider";
import { Trash } from "lucide-react";

const Cart = () => {
  const { cartData, setCartData, cartPrice, setCartPrice } = useCartContext();

  const handleRemoveItem = (index) => {
    const updatedCartData = [...cartData];
    const itemToRemove = updatedCartData[index];

    setCartPrice(cartPrice - itemToRemove.price * itemToRemove.quantity);
    updatedCartData.splice(index, 1);
    setCartData(updatedCartData);
    toast.success("Removed From cart!!");
  };

  const handleClearCart = () => {
    setCartData([]);
    setCartPrice(0);
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedCartData = [...cartData];
    const item = updatedCartData[index];

    const newQuantity = Math.max(1, quantity);
    const priceDifference = (newQuantity - item.quantity) * item.price;

    setCartPrice(cartPrice + priceDifference);
    item.quantity = newQuantity;

    setCartData(updatedCartData);
  };

  return (
    <div className="mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-5 text-center sm:text-left">
        Your Cart
      </h1>
      {cartData.length === 0 ? (
        <div className="flex justify-center items-center flex-col">
          <img
            src="/Emoji/empty.avif"
            width={250}
            height={250}
            alt="empty"
            className="object-contain size-1/3"
          />
          <h1 className="font-bold">Your Cart is Empty</h1>
          <a href="/" className="btn btn-link">
            Browse Products
          </a>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-xl rounded-xl border-4">
          <div className="hidden md:block">
            <table className="table w-full">
              <thead className="bg-gray-200 text-sm border-none md:table-header-group">
                <tr>
                  <th className="pl-8">Product</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {cartData.map((item, index) => (
                  <tr key={index} className="border-none">
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        height="130"
                        width="120"
                        className="h-20 w-20 object-contain rounded-sm mix-blend-multiply"
                      />
                    </td>
                    <td className="text-base">{item.title.substring(0, 25)}</td>
                    <td className="text-base">${Math.round(item.price)}</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          handleQuantityChange(index, parseInt(e.target.value))
                        }
                        className="w-16 input input-sm input-bordered input-primary py-1 px-2"
                      />
                    </td>
                    <td className="text-base">
                      ${Math.round(item.price * item.quantity)}
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="btn btn-ghost group rounded-xl shadow-inner group-hover:shadow-gray-950"
                      >
                        <Trash className="text-black group-hover:fill-primary" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="block md:hidden">
            {cartData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-4 border-b-2 border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <img
                    src={item.image}
                    alt={item.title}
                    height="80"
                    width="80"
                    className="h-20 w-20 object-contain rounded-sm"
                  />
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="btn btn-ghost group rounded-xl shadow-inner group-hover:shadow-gray-950"
                  >
                    <Trash className="text-black group-hover:fill-primary" />
                  </button>
                </div>

                <div className="mt-2">
                  <p className="text-sm font-semibold">
                    {item.title.substring(0, 25)}
                  </p>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-500">Price</span>
                    <span className="font-semibold">
                      ${Math.round(item.price)}
                    </span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-500">Quantity</span>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                      className="w-16 input input-sm input-bordered input-primary py-1 px-2"
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-semibold">
                      ${Math.round(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-between items-start mt-8">
        <div className="flex flex-wrap items-center gap-4 py-2 md:py-3">
          <input
            type="text"
            placeholder="coupon code"
            className="px-6 py-2 rounded shadow-lg border border-gray-600 md:w-auto w-full"
          />
          <button className="btn btn-primary text-white rounded shadow-xl py-2 px-10 md:w-auto w-full">
            Apply Coupon
          </button>
        </div>

        <div className="border-2 rounded border-gray-500 space-y-4 p-6">
          <h1 className="font-medium text-lg">Cart Total</h1>
          <div className="text-sm flex justify-between items-center w-80">
            <span className="font-medium">Subtotal:</span>
            <span>${(cartPrice || 0).toFixed(2)}</span>
          </div>
          <hr />
          <div className="text-sm flex justify-between items-center">
            <span className="font-medium">Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="text-sm flex justify-between items-center">
            <span className="font-medium">Total:</span>
            <span>${(cartPrice || 0).toFixed(2)}</span>
          </div>
          <div>
            <a
              href="/checkout"
              className="btn btn-primary text-base items-center shadow-xl rounded text-white"
            >
              Proceed to checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
