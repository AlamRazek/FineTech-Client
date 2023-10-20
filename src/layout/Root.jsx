import { Outlet } from "react-router-dom";
import Navbar from "../pages/navbar/Navbar";

const Root = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
