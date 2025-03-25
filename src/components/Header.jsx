import React from "react";
import { FiMoon, FiUser } from "react-icons/fi";
import { MdOutlineLanguage } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const logging = localStorage.getItem("loggedInUser");

  return (
    <div className="head py-3 px-3">
      <div className="container-fluid">
        <div className="row g-0 d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-start align-items-center">
            <div className="mt-2">
              <h5>GAMEVERSE</h5>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-end align-items-center">
            <div className="dropdown-center">
              <button
                className="dropdown-lang"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <small className="mx-1">
                  <MdOutlineLanguage className="lang" />
                </small>
              </button>
              <ul className="dropdown-menu custom-dropdown-menu text-center">
                <li>
                  <a className="dropdown-item" href="#">
                    <small className="mx-2">ENG</small>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <small className="mx-2">AZ</small>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <small className="mx-1">RUS</small>
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" className="moon mx-3">
              <FiMoon />
            </button>
            <div className="d-flex align-items-center">
              <Link className="user d-flex align-items-center" to={logging ? "/user-dashboard" : "/signin"}>
                <FiUser />
                {loggedInUser.username && (
                  <span className="ms-2">{loggedInUser.username}</span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
