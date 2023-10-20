import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();

  return (
    <div className="card card-compact max-w-[850px] mx-auto p-4">
      <figure>
        <img src={data.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.shortDescription}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
