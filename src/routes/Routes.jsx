import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Mycart from "../pages/Mycart/Mycart";
import AddProduct from "../pages/AddProduct/AddProduct";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import CardDetails from "../pages/Home/cards/CardDetails";
import Error from "../pages/Error/Error";
import ProductDetails from "../pages/Home/cards/ProductDetails";
import MyCarts from "../pages/Mycart/MyCarts";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        path: "/cardDetails/:brandNames/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/cart/:userEmail",
        element: (
          <PrivateRoutes>
            <Mycart></Mycart>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.userEmail}`),
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
        path: "/cardDetails/:brandName/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
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
