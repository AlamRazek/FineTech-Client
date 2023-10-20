import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Mycart from "../pages/Mycart/Mycart";
import AddProduct from "../pages/AddProduct/AddProduct";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import CardDetails from "../pages/Home/cards/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoutes>
            <Mycart></Mycart>
          </PrivateRoutes>
        ),
      },
      {
        path: "/cardDetails/:brandNames",
        element: (
          <PrivateRoutes>
            <CardDetails></CardDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.brandNames}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
