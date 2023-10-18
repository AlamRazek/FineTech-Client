import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

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
      <p className="text-center pb-3 px-3 md:pb-6 md:px-6">
        Do not have an account? please{" "}
        <Link className="font-bold text-blue-800 underline" to={"/register"}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
