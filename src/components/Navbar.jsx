import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../context/MyProvider";

const Navbar = () => {
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [openModal, setOpenModal] = useState();
  const { cart, wishlist, game } = useContext(MyContext);

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchData(search);

    const filtered = game.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };

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
            className="navbar-toggler ms-auto"
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
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "page")}
              >
                Discover
              </NavLink>
              <NavLink
                to={"/game"}
                className={({ isActive }) => (isActive ? "active" : "page")}
              >
                Games
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "active" : "page")}
              >
                About
              </NavLink>
              <Link className="page mx-2">Blog</Link>
              <NavLink
                to={"/contact"}
                className={({ isActive }) => (isActive ? "active" : "page")}
              >
                Contact Us
              </NavLink>
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
                  <Link to={"/wishlist"}>
                    <FaRegHeart className="wishcart" />
                  </Link>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {wishlist.length}
                  </span>
                </button>
              </div>
              <div>
                <button type="button" className="position-relative icon">
                  <Link to={"/cart"}>
                    <FiShoppingCart className="wishcart" />
                  </Link>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                    {cart.length}
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
                          value={searchData}
                          onChange={handleSearch}
                        />
                      </form>
                      <div className="body">
                        {searchData && filteredData.length > 0 ? (
                          <ul>
                            {filteredData.map((el) => (
                              <li>
                                <div className="d-flex my-4">
                                  <div>
                                    <img src={el.img} alt="" className="mx-3" />
                                  </div>
                                  <div>
                                    <Link
                                      to={`/products/${el.id}`}
                                      style={{
                                        color: "black",
                                        textDecoration: "none",
                                      }}
                                    >
                                      {el.title}
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          searchData && <p>No products found.</p>
                        )}
                      </div>
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
