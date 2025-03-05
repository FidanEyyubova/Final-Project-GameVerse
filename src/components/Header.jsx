import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiMoon, FiUser } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="head d-flex justify-content-center align-items-center text-center">
      <div className="container-fluid">
        <div className="row w-100 my-2 d-flex justify-content-between align-items-center">
          <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-start align-items-center">
            <div className="mx-3">
              <img src="../src/images/logo.png" alt="" className="img-logo" />
            </div>
            <button type="button" className=" moon  mx-3">
              <FiMoon />
            </button>
          </div>

          <div className="col-lg-6 col-md-6 col-6 d-flex justify-content-end align-items-center">
            <div className="dropdown-center mx-3">
              <button
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="https://www.svgrepo.com/show/405643/flag-for-flag-united-kingdom.svg" alt="" className="img-lang" />
                <small className="mx-1">ENG</small>
              </button>
              <ul className="dropdown-menu  custom-dropdown-menu text-center">
                <li>
                  <a className="dropdown-item" href="#">
                  <img
                      src="https://www.svgrepo.com/show/405416/flag-for-flag-azerbaijan.svg"
                      alt=""
                      className="img-lang"
                    />
                    <small className="mx-2">AZ</small>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  <img
                      src="https://www.svgrepo.com/show/405590/flag-for-flag-russia.svg"
                      alt=""
                      className="img-lang"
                    />
                    <small className="mx-1">RUS</small>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Link  className="user" to={"/signin"}>
                <FiUser/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
