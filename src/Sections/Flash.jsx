import Counter from "../Components/Counter";
import FlashSales from "../Components/FlashSales";
import { useFetchProducts } from "../hooks/useFetchProducts";

const Flash = () => {
  const { products } = useFetchProducts();

  return (
    <section className="py-20">
      <div className="flex items-center gap-4 justify-center sm:justify-start">
        <div className="bg-primary px-3 py-6 rounded-md"></div>
        <h6 className="text-primary font-semibold">Today's</h6>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center items-center gap-x-24">
        <h1 className="text-4xl text-black font-semibold">Flash Sales</h1>
        <div className="grid grid-flow-col gap-5 py-6 md:py-3 text-center auto-cols-max text-black">
          <Counter />
        </div>
      </div>

      <div className="carousel carousel-center py-10 gap-4 rounded-box sm:ml-0 ml-12 sm:max-w-full max-w-72">
        {products.map((item) => (
          <div key={item.id} className="carousel-item">
            <FlashSales {...item} readmore={`/products/${item.id}`} />
          </div>
        ))}
      </div>

      <center className="mb-14">
        <button className="btn btn-primary mt-5 text-white rounded px-10">
          View All Products
        </button>
      </center>

      <hr />
    </section>
  );
};

export default Flash;
