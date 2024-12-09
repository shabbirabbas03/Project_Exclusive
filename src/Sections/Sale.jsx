import Sallers from "../Components/Sallers";
import { SaleSites } from "../constant";

const Sale = () => {
  return (
    <center className="flex justify-center gap-8 items-center flex-wrap py-14 mx-auto">
      {SaleSites.map((item) => (
        <Sallers key={item.heading} {...item} />
      ))}
    </center>
  );
};

export default Sale;
