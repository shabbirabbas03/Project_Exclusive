import FlashCounter from "../Components/FlashCounter";

const Enhance = () => {
  return (
    <div className="py-10">
      <div className="hero bg-black h-full md:p-10 p-0 w-full">
        <div className="hero-content flex justify-between w-full h-full items-center flex-wrap">
          <div className="max-w-lg">
            <h6 className="text-[#00FF66] text-base font-semibold mb-6">
              Categories
            </h6>
            <h1 className="text-6xl font-semibold text-white py-6">
              Enhance Your Music Experience
            </h1>
            <FlashCounter />
            <button className="btn bg-[#00FF66] hover:bg-[#56ed93] text-black px-12 rounded mt-4">
              Buy Now!
            </button>
          </div>
          <img src="/Categories/Enhance.svg" alt="Enhance" />
        </div>
      </div>
    </div>
  );
};

export default Enhance;
