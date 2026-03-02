import React from "react";
import {Link, NavLink} from "react-router-dom";
import { useAuth } from "../../Context/auth";
import toast from "react-hot-toast";


var Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successfully");
  };
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid bg-info">
      <a className="navbar-brand" href="#">Logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/aboutus" className="nav-link">ABOUT US</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contactus" className="nav-link">CONTACT US</NavLink>
          </li>
        </ul>  

        {!auth?.user ? (
        <>
        <li className="nav-item me-3" style={{listStyle: "none"}}>
          <NavLink to="/register" className="nav-link">Register</NavLink>
        </li>
        <li className="nav-item me-3" style={{listStyle: "none"}}>
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </li>
        </>
        ) : (
          <>
          <li className="nav-item dropdown me-2" style={{listStyle: "none"}}>
            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" style={{border: "none"}}>
              {auth?.user?.name}
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item">
                Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleLogout} to="/login" className="dropdown-item">
                Logout
                </NavLink>
              </li>
            </ul>
          </li>
          </>
        )}
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav>
        </>
    )
};

export default Header;