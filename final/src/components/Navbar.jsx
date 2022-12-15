import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark shadow-sm py-2">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4 text-white" href="#">
            FakeStore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
                <a href="" className="btn btn-outline-light">
                    <i className="fa fa-sign-in me-1"> Sign in</i>
                </a>
                <a href="" className="btn btn-outline-light ms-2">
                    <i className="fa fa-user-plus me-1"> Register</i>
                </a>
                <a href="" className="btn btn-outline-light ms-2">
                    <i className="fa fa-shopping-bag me-1"> Cart (0)</i>
                </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
