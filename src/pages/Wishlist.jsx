import React, { useContext } from "react";
import { MyContext } from "../context/MyProvider";
import { Link, useNavigate } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import { MdDelete } from "react-icons/md";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist, addToCart } =
    useContext(MyContext);

  const navigate = useNavigate();
  return (
    <div className="wishlist wishlist-first py-5">
      <div className="container-fluid">
        <div className="wishlist-header">
          <div className="d-flex justify-content-between align-items-center px-5 py-4">
            <h1 className={wishlist.length === 0 ? "mx-auto text-center" : ""}>
              My Wishlist
            </h1>
            {wishlist.length > 0 && (
              <button className="clear" onClick={clearWishlist}>
                Clear Wishlist
              </button>
            )}
          </div>
        </div>
        {wishlist.length === 0 ? (
          <div className="text-center d-flex flex-column justify-content-center align-items-center gap-4 my-3">
            <h2 className="text-center empty">
              You haven't added anything to <br /> your wishlist yet.
            </h2>
            <button
              className="shop animate__animated animate__tada animate__infinite	infinite animate__slower mb-4"
              onClick={() => navigate("/game")}
            >
              Back to the shop
            </button>
          </div>
        ) : (
          <div className="row d-flex flex-wrap justify-content-center align-items-center py-4">
            {wishlist.map((el, index) => (
              <div
                key={index}
                className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center"
              >
                <div className="d-flex wishlist-detail p-4 justify-content-between  align-items-center mb-4 gap-4">
                  <div>
                    <img src={el.imgProduct} alt="" />
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-3">

                      <h4>{el.name}</h4>
                      <p className=" star-p">
                        <GoStarFill className="star mb-lg-1" /> {el.rate}
                      </p>
                      </div>
                      <button
                        className="remove "
                        onClick={() => removeFromWishlist(el.id)}
                      >
                        <MdDelete className="mb-lg-2" />
                      </button>
                    </div>
                    <div>
                      <p className="desc py-2">{el.desc[1].slice(0,120)}...</p>
                    </div>
                      {/* <div>
                        <p className="genre">Genres</p>
                      </div>
                      <div className="d-flex flex-wrap">
                        {el.genres?.map((genre, index) => (
                          <p key={index} className="prop text-center mx-1 py-1">
                            {genre}
                          </p>
                        ))}
                      </div> */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2 align-items-center">

                      {el.prevprice !== null && el.prevprice !== "" && (
                        <p className="prev">
                          <del>${el.prevprice}</del>
                        </p>
                      )}
                      <h5 className="price">
                        <b>${el.price}</b>
                      </h5>
                      </div>
                      <button className="add" onClick={() => addToCart(el)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
