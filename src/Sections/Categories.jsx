import Browse from "../Components/Browse";
import { CategoriesCard } from "../constant";

const Categories = () => {
  return (
    <section className="py-8">
      <div className="flex items-center gap-4">
        <div className="bg-primary px-3 py-6 rounded-md"></div>
        <h6 className="text-primary font-semibold">Categories</h6>
      </div>

      <div className="py-3">
        <h1 className="text-4xl text-black font-semibold">
          Browse By Category
        </h1>
      </div>

      <div className="carousel carousel-center ml-6 max-w-full items-center py-14 space-x-16 sm:space-x-12 md:space-x-16 lg:space-x-32">
        {CategoriesCard.map((items) => (
          <Browse key={items.title} {...items} className="carousel-item" />
        ))}
      </div>

      <hr className="mt-6" />
    </section>
  );
};

export default Categories;
