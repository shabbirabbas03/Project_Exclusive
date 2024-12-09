import { ServiceCenter } from "../constant";
import ServiceOffer from "../Components/ServiceOffer";

const Service = () => {
  return (
    <center className="flex justify-center items-center gap-[88px] flex-wrap mx-auto py-10">
      {ServiceCenter.map((item) => (
        <ServiceOffer key={item.heading} {...item} />
      ))}
    </center>
  );
};

export default Service;
