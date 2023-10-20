const UpdateProduct = () => {
  const getUpdatedProductData = (e) => {};

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
        onSubmit={getUpdatedProductData}
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

export default UpdateProduct;
