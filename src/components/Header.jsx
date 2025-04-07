import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FiMoon, FiSun, FiUser } from "react-icons/fi";
import { MdOutlineLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import "../pagestyle/Header.scss";
import { ThemeContext } from "../context/ThemeProvider";

const Header = () => {
  const { isLight, setIsLight } = useContext(ThemeContext);
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const logging = localStorage.getItem("loggedInUser");

  const { t, i18n } = useTranslation();
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
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
                    <button
                      className="dropdown-item small"
                      href="#"
                      onClick={() => handleChangeLang("en")}
                    >
                      ENG
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item small"
                      href="#"
                      onClick={() => handleChangeLang("az")}
                    >
                      AZ
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item small"
                      href="#"
                      onClick={() => handleChangeLang("rus")}
                    >
                      RU
                    </button>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="moon mx-3"
                onClick={() => setIsLight(!isLight)}
              >
                {isLight ? <FiMoon /> : <FiSun />}
              </button>
              <div className="d-flex align-items-center">
                <Link
                  className="user d-flex align-items-center"
                  to={logging ? "/user-dashboard" : "/signin"}
                >
                  <FiUser />
                </Link>
                {loggedInUser.username && (
                  <span className="ms-2">{loggedInUser.username}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
