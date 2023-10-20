import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const notify1 = (res) => toast(res);
  const notify2 = (err) => toast(err);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    if (!/^(?=.*[A-Za-z])(?=.*[@#$%^&+=!]).{6,}$/.test(password)) {
      setError(
        "Error: password should have Minimum six characters ,at least one capital letter and special character."
      );
      return;
    } else {
      setError("");
      createUser(email, password, photo, name)
        .then((res) => {
          console.log(res.user);
          notify1(res.user);
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
          notify2(err.message);
        });
    }
  };

  return (
    <div>
      <div data-aos="fade-down">
        <h1 className="text-2xl text-center my-2 md:my-6 lg:my-6 font-semibold">
          Please Register
        </h1>
      </div>

      <form
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        data-aos="fade-up"
        onSubmit={handleRegister}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoID</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">{error}</p>
      <p className="text-center pb-3 px-3 md:pb-6 md:px-6">
        Already have an account? please
        <Link className="font-bold text-blue-800 underline" to={"/login"}>
          Login
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Register;
