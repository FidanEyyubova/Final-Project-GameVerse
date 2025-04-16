import React, { useContext, useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyProvider";
import NavbarTwo from "./NavbarTwo";
import { useTranslation } from "react-i18next";
import "../pagestyle/Navbar.scss";

const Navbar = () => {
  const { cart, wishlist } = useContext(MyContext);
  const [scrolling, setScrolling] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`sticky-top main-navbar ${scrolling ? "d-none" : ""}`}>
        <nav
          className="navbar navbar-expand-sm navbar-dark mx-4"
          aria-label="Main navbar"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav navbar-nav-first me-auto mb-2 mb-sm-0 gap-lg-4 gap-md-4 gap-sm-5  gap-2">
                <div className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column gap-lg-5 gap-md-5 gap-sm-5 gap-2 mx-3">
                  <li className="nav-item nav-item-name mt-lg-0 mt-md-0 mt-sm-0 mt-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "page"
                      }
                      to="/"
                    >
                      {t("Discover")}
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-name">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "page"
                      }
                      to="/game"
                    >
                      {t("Games")}
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-name">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "page"
                      }
                      to="/about"
                    >
                      {t("About")}
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-name">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "page"
                      }
                      to="/blog"
                    >
                      {t("Blog")}
                    </NavLink>
                  </li>
                  <li className="nav-item nav-item-name">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : "page"
                      }
                      to="/contact"
                    >
                      {t("Contact")}
                    </NavLink>
                  </li>
                </div>
                <div className="d-flex gap-3">
                  <li className="nav-item">
                    <Link to={"/game"}>
                      <BsSearch className="nav-item-icon" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="position-relative badge-icon"
                      onClick={() => {
                        if (!loggedInUser) {
                          navigate("/signin");
                        } else {
                          navigate("/wishlist");
                        }
                      }}
                    >
                      <FaRegHeart className="nav-item-icon" />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                        {wishlist.length}
                      </span>
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      type="button"
                      className="position-relative badge-icon"
                      onClick={() => {
                        if (!loggedInUser) {
                          navigate("/signin");
                        } else {
                          navigate("/cart");
                        }
                      }}
                    >
                      <FiShoppingCart className="nav-item-icon" />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                        {cart.length}
                      </span>
                    </button>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {scrolling && (
        <div className="fixed-top scrolling-navbar">
          <NavbarTwo />
        </div>
      )}
    </>
  );
};

export default Navbar;
