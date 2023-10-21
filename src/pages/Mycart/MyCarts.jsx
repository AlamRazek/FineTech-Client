const MyCarts = ({ data }) => {
  console.log(data.name);
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={data.image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.shortDescription}</p>
        <p>Price: {data.price}$</p>
      </div>
    </div>
  );
};

export default MyCarts;
