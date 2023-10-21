import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const {
    _id,
    name,
    image,
    brandName,
    radio,
    price,
    shortDescription,
    rating,
  } = data;
  const addedProduct = {
    name,
    image,
    brandName,
    radio,
    price,
    shortDescription,
    rating,
    userEmail,
  };
  const addCartHandler = (_id) => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Product Added",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="card card-compact max-w-[850px]  mx-auto p-4">
      <figure>
        <img src={data.image} alt="Shoes" className="max-h-[400px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.shortDescription}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => addCartHandler(_id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
