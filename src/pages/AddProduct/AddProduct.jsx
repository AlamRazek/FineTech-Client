import Swal from "sweetalert2";

const AddProduct = () => {
  const getProductData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brandName = form.brandName.value;
    const radio = form.radio.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const addedProduct = {
      name,
      image,
      brandName,
      radio,
      price,
      shortDescription,
      rating,
    };
    console.log(addedProduct);

    // send data to server
    fetch("http://localhost:5000/products", {
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
    <div>
      <div data-aos="fade-down">
        <h2 className="text-2xl text-center my-2 md:my-6 lg:my-6 font-semibold">
          Please Register
        </h2>
      </div>

      <form
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        data-aos="fade-up"
        onSubmit={getProductData}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            placeholder="Image"
            name="image"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input
            type="text"
            placeholder="Brand Name"
            name="brandName"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold underline">
              Product Type
            </span>
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Phone</span>
            <input type="radio" name="radio" value="Phone" className="radio " />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Computer</span>
            <input
              type="radio"
              name="radio"
              value="Computer"
              className="radio "
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Headphone</span>
            <input
              type="radio"
              name="radio"
              value="Headphone"
              className="radio  "
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Price"
            name="price"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <input
            type="text"
            placeholder="Short description"
            name="shortDescription"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input
            type="number"
            placeholder="Rating"
            name="rating"
            className="input input-bordered"
            min="1"
            max="5"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
