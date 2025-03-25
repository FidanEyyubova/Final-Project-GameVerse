import React, { useContext, useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../context/MyProvider";
import NavbarTwo from "./NavbarTwo";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const { cart, wishlist } = useContext(MyContext);
  const [scrolling, setScrolling] = useState(false);

  

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
      {/* Main Navbar (Hidden when scrolling) */}
      <div className={`sticky-top main-navbar ${scrolling ? "d-none" : ""}`}>
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
                    <NavLink className={({ isActive }) => (isActive ? "active" : "page")} to="/">
                      Discover
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "page")} to="/game">
                      Games
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "page")} to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "page")} to="/blog">
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => (isActive ? "active" : "page")} to="/contact">
                      Contact Us
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

      {/* Scrolling Navbar (Appears when scrolling) */}
      {scrolling && (
        <div className="fixed-top scrolling-navbar">
          <NavbarTwo />
        </div>
      )}
    </>
  );
};

export default Navbar;
