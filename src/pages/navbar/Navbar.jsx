import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const userEmail = user?.email;

  const handleLogOut = () => {
    userLogOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addproduct"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "",
          })}
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/cart/${userEmail}`}
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "",
          })}
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <a className="px-2 md:px-4 normal-case text-xl">
          <img
            src="https://i.ibb.co/cQfxZys/logo-no-background.png"
            alt=""
            className="max-h-8"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <p>{user?.email}</p>
        <span>
          {user ? (
            <div className="avatar">
              <div className="w-[54px] rounded-full mx-2">
                <img src={user?.photoURL} />
              </div>
            </div>
          ) : (
            ""
          )}
        </span>
        {user ? (
          <button onClick={handleLogOut} className="btn">
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
