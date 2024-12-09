import BestSelling from "../Components/BestSelling";
import { bestSellingProducts } from "../constant";

const Selling = () => {
  return (
    <div className="py-10">
      <div className="flex items-center gap-4">
        <div className="bg-primary px-3 py-6 rounded-md"></div>
        <h6 className="text-primary font-semibold">Categories</h6>
      </div>
      <div className="py-3 flex justify-between items-center flex-wrap">
        <h1 className="text-4xl font-semibold text-black">
          Best Selling Products
        </h1>
        <button className="btn bg-primary hover:bg-[#e05656] text-white tracking-wider px-8 rounded border-none mt-4">
          View All
        </button>
      </div>
      <div className="flex justify-around items-center py-12 flex-wrap">
        {bestSellingProducts.map((item) => (
          <BestSelling key={item.heading} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Selling;
