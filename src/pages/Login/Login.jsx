import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [errors, setError] = useState("");

  const notify1 = () => toast("Successfully Logged in");
  const notify2 = (err) => toast(err);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        notify1();
        console.log(res);
      })
      .catch((err) => {
        notify2(err.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((res) => {
        console.log(res);

        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        notify2(err.message);
      });
  };

  return (
    <div>
      <div data-aos="fade-down">
        <h1 className="text-2xl text-center my-2 md:my-6 lg:my-6 font-semibold">
          Please Login
        </h1>
      </div>

      <form
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        data-aos="fade-up"
        onSubmit={handleLogin}
      >
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className="text-center ">
        <button className="btn btn-accent " onClick={handleGoogleSignIn}>
          Google login
        </button>
      </div>
      <div>{errors && <span className="text-red-700">{errors}</span>}</div>
      <p className="text-center pb-3 px-3 md:pb-6 md:px-6">
        Do not have an account? please{" "}
        <Link className="font-bold text-blue-800 underline" to={"/register"}>
          Register
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;
