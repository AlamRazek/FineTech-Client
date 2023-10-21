import { useLoaderData } from "react-router-dom";
import MyCarts from "./MyCarts";

const Mycart = () => {
  const cartData = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-10  md:gap-6">
      {cartData?.map((data) => (
        <MyCarts key={data._id} data={data} />
      ))}
    </div>
  );
};

export default Mycart;
