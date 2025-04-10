import React, { useContext, useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../context/MyProvider";
import { useTranslation } from "react-i18next";
import "../pagestyle/Navbar.scss";

const NavbarTwo = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { cart, wishlist, isLight } = useContext(MyContext);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={isLight ? "light-app" : "dark-app"}>
      <div className={`navbar-two py-2 ${showNavbar ? "show" : "hide"}`}>
        <nav className="navbar navbar-expand-sm navbar-dark mx-4" aria-label="Main navbar">
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
              <ul className="navbar-nav me-auto mb-2 mb-sm-0 gap-5">
                <div className="d-flex gap-5 mx-3">
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "active" : "page"} to="/">
                      {t("Discover")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "active" : "page"} to="/game">
                      {t("Games")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "active" : "page"} to="/about">
                      {t("About")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "active" : "page"} to="/blog">
                      {t("Blog")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "active" : "page"} to="/contact">
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
                    <button type="button" className="position-relative badge-icon">
                      <Link to={"/wishlist"}>
                        <FaRegHeart className="nav-item-icon" />
                      </Link>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                        {wishlist.length}
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="position-relative badge-icon">
                      <Link to={"/cart"}>
                        <FiShoppingCart className="nav-item-icon" />
                      </Link>
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
    </div>
  );
};

export default NavbarTwo;
