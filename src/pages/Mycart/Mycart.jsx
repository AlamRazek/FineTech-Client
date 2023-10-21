import { useLoaderData } from "react-router-dom";
import MyCarts from "./MyCarts";
import { useState } from "react";

const Mycart = () => {
  const cartData = useLoaderData();
  const [cart, setCart] = useState(cartData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-10  md:gap-6">
      {cart?.map((data) => (
        <MyCarts key={data._id} data={data} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Mycart;
