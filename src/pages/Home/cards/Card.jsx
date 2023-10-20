import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import CardDetails from "./CardDetails";

const Card = ({ card }) => {
  const { name, photo } = card;
  const { brandName } = useParams();
  const [brand, setBrand] = useState(name);

  const cardDetails = (name) => {};

  return (
    <>
      <Link to={`/cardDetails/${brand}`}>
        <div
          className="card  max-h-[414px] p-2 bg-gray-200"
          onClick={() => cardDetails(name)}
        >
          <figure className="max-h-[300px] rounded-md">
            <img src={photo} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold ">{name}</h2>
          </div>
        </div>
        {}
      </Link>
    </>
  );
};

export default Card;
