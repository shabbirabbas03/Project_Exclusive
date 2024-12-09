import BillingDetails from "../Components/BillingDetails";
import { useCartContext } from "../Context/Provider";

const CheckOut = () => {
  const { cartData, cartPrice } = useCartContext();
  return (
    <div className="mx-auto flex flex-wrap justify-around items-start my-10 gap-20">
      <div>
        <BillingDetails />
      </div>
      <div className="space-y-8">
        <h2 className="text-xl font-bold">Your Order</h2>
        <table className="w-full border-separate border-spacing-y-6">
          <tbody>
            {cartData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <span>{item.title.substring(0, 20)}</span>
                </td>
                <td className="text-right">${Math.round(item.price)}</td>
              </tr>
            ))}
            <tr className="border-t">
              <td className="font-semibold">Subtotal:</td>
              <td className="text-right">${Math.round(cartPrice)}</td>
            </tr>
            <tr>
              <td className="font-semibold">Shipping:</td>
              <td className="text-right">Free</td>
            </tr>
            <tr className="border-t">
              <td className="font-semibold">Total:</td>
              <td className="text-right">${Math.round(cartPrice)}</td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="py-3 px-4 border border-gray-500 rounded-sm"
                />
              </td>
              <td>
                <button className="btn btn-primary rounded text-white ms-4 px-10">
                  Apply Coupon
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="btn btn-primary px-7 rounded text-white py-2">
                  Place Order
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckOut;
