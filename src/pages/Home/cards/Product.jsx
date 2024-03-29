import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const {
    name,
    image,
    brandName,
    radio,
    price,
    shortDescription,
    rating,
    _id,
  } = data;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="max-h-[400px]">
        <img src={image} alt="image" className="max-h-[280px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Brand: {brandName}</p>
        <p>Type: {radio}</p>
        <p>Description: {shortDescription}</p>
        <p>Rating: {rating}.00</p>
        <p>Price: ${price}</p>

        <span className="card-actions justify-start">
          <Link to={`${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>

          <Link to={`updateProduct/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Product;
