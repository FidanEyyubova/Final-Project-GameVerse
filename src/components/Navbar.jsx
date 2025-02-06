import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [openModal, setOpenModal] = useState();

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark py-4"
        aria-label="Fifth navbar example"
      >
        <div className="container-fluid py-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 mx-3 px-3">
              <Link className="page mx-2">Discover</Link>
              <Link className="page mx-2">Games</Link>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "active" : "page")}
              >
                About
              </NavLink>
              <Link className="page mx-2">Blog</Link>
              <Link className="page mx-2">Contact us</Link>
            </ul>
            <div className="icons d-flex gap-4 mx-4">
              <div className="icon">
                <Link
                  className="icon"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <BsSearch onClick={handleOpenModal} />
                </Link>
              </div>
              <div>
                <button type="button" className="position-relative icon">
                  <FaRegHeart />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    0<span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </div>
              <div>
                <button type="button" className="position-relative icon">
                  <FiShoppingCart />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    0<span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </div>
            </div>
            {openModal && (
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        <span style={{ color: "white" }}>
                          Search for products
                        </span>
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        id="close"
                      />
                    </div>
                    <div className="modal-body">
                      <form action="" className="text-center py-3">
                        <input
                          type="text"
                          className="search w-100  form-control  shadow-sm"
                          placeholder="Search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
