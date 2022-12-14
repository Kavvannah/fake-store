import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark shadow-sm py-2">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold fs-4 text-danger" href="#">
            FakeStore
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="buttons">
                <a href="" className="btn btn-outline-danger">
                    <i className="fa fa-sign-in me-1"> Sign in</i>
                </a>
                <a href="" className="btn btn-outline-danger ms-2">
                    <i className="fa fa-user-plus me-1"> Register</i>
                </a>
                <a href="" className="btn btn-outline-danger ms-2">
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