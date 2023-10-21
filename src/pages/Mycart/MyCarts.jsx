import Swal from "sweetalert2";

const MyCarts = ({ data, cart, setCart }) => {
  const { _id, name, image, shortDescription, price } = data;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Cart been deleted.", "success");
              const remaining = cart.filter((crt) => crt._id !== _id);
              setCart(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card w-60  glass mx-auto">
      <figure>
        <img src={image} alt="car!" className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{shortDescription}</p>
        <p>Price: {price}$</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning" onClick={() => handleDelete(_id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCarts;
