import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { name, photo } = card;
  const [brand, setBrand] = useState(name);

  return (
    <>
      <Link to={`/cardDetails/${brand}`}>
        <div className="card  max-h-[414px] p-2 bg-gray-200">
          <figure className="max-h-[300px] rounded-md">
            <img src={photo} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold ">{name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
