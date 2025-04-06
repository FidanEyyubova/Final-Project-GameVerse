import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyProvider";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import "../pagestyle/HomePic.scss"

const HomePic = () => {
  const { game, addToWishlist } = useContext(MyContext);

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  const { t } = useTranslation();

  const handleClick = (el) => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser || loggedInUser === "null") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to sign in first!",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      }).then(() => {
        window.location.href = "/signin";
      });
      return;
    }

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isAlreadyInWishlist = wishlist.some((item) => item.id === el.id);

    if (isAlreadyInWishlist) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This game is already in your wishlist!",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
    } else {
      wishlist.push(el);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      addToWishlist(el);

      Swal.fire({
        icon: "success",
        title: "Added to Wishlist",
        text: `${el.name} has been added to your wishlist!`,
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
    }
  };

  return (
    <div className="home-pic">
      <div className="container-fluid">
        <div className="row g-0 first d-flex justify-content-center align-items-center">
          <div className="d-lg-flex d-md-flex py-lg-0 py-md-0 py-5 my-lg-0 my-md-0 my-5 text-lg-start text-md-start text-center justify-content-center align-items-center home-row">
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center home-pic-desc">
              <div className="mx-lg-5 mx-md-5">
                {game && game.length > 0 ? (
                  game.slice(0, 1).map((el) => (
                    <div key={el.id} data-aos="fade-down">
                      <h1>{el.name}</h1>
                      <p className="pb-3 py-2">{el.desc[0]}</p>
                      <div className="d-flex gap-3 justify-content-lg-start justify-content-md-start justify-content-center">
                        <button
                          className="wish"
                          style={{ color: "white" }}
                          onClick={() => handleClick(el)}
                        >
                          {t("wishlistbtn")}
                        </button>
                        <div className="d-flex">
                          <button className="buy">
                            <Link className="link-add" to={`/game/${el.id}`}>
                            {t("buynow")}
                            </Link>
                          </button>
                          <button className="buy-arrow">
                            <Link className="link-add pb-1">
                              <MdArrowOutward />
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading games...</p>
                )}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-12 d-lg-flex d-md-flex d-sm-none justify-content-end align-items-center"
              data-aos="fade-down"
            >
              <div className="d-flex flex-column gap-3 mx-lg-5 pt-2">
                <img
                  src="https://www.playdeltaforce.com/ossweb-img/p3-main2.jpg"
                  alt="Game Preview 1"
                  className="d-lg-flex d-md-flex d-none"
                />
                <img
                  src="https://i.redd.it/high-quality-delta-force-wallpapers-v0-juvk2c34z48e1.png?width=3840&format=png&auto=webp&s=9ecab059e7548a99c0dfb72e94721d764bd889aa"
                  alt="Game Preview 2"
                  className="d-lg-flex d-md-flex d-none"
                />
                <img
                  src="https://images8.alphacoders.com/138/1386595.jpg"
                  alt="Game Preview 3"
                  className="d-lg-flex d-md-flex d-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePic;
