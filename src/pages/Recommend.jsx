import React, { useContext, useEffect } from "react";
import { SiTicktick } from "react-icons/si";
import { MyContext } from "../context/MyProvider";
import { FaHeart } from "react-icons/fa";
import { Link, useAsyncValue, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import "../pagestyle/Recommend.scss";
import { ThemeContext } from "../context/ThemeProvider";

const Recommend = () => {
  const { game, wishlist } = useContext(MyContext);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isLight } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    // window.scroll(0, 100);
  }, []);

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

    const isInWishlist = wishlist.some((item) => item.id === el.id);

    if (isInWishlist) {
      removeFromWishlist(el.id);
      Swal.fire({
        icon: "warning",
        title: "Removed from Wishlist",
        text: "Game has been removed from your wishlist!",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
    } else {
      addToWishlist(el);
      Swal.fire({
        icon: "success",
        title: "Added to Wishlist",
        text: "Game has been added to your wishlist!",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
    }
  };

  const handleBack = () => {
    localStorage.setItem("checkedOut", "false");
    navigate("/game");
  };

  return (
    <div className={isLight ? "light-app" : "dark-app"}>
      <div className="recommend">
        <div className="container-fluid">
          <div className="row g-0 py-4 pt-5">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center py-3">
              <p className="animate__animated animate__tada animate__slower animate__infinite">
                <SiTicktick className="tick-icon p-5" />
              </p>
              <h2>Thank you for your purchase!</h2>
              <span className="recommend-text text-center">
                Whether you're diving into epic challenges or just relaxing with
                some fun gameplay, we hope every moment brings you excitement
                and satisfaction. Happy gaming!"
              </span>
              <button className="shop mt-4 mb-4" onClick={handleBack}>
                {t("backshop")}
              </button>
            </div>
          </div>
          <div className="row g-0 py-4 pb-5">
            <div className="recommend-head d-flex justify-content-between align-items-center">
              <h3>Recommend Games</h3>
              <button className="view" onClick={() => navigate("/game")}>
                View More
              </button>
            </div>
            {game.slice(0, 6).map((el) => (
              <div
                className="col-lg-2 col-md-4 col-sm-6 col-12 cont my-2 d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-down"
              >
                <div>
                  <div className="image  text-center py-2 pt-5">
                    <img src={el.imgProduct} />
                  </div>
                  <Link
                    className={`heart ${
                      wishlist.some((item) => item.id === el.id)
                        ? "act-heart-game"
                        : "heart-game"
                    }`}
                    onClick={() => handleClick(el)}
                  >
                    <FaHeart />
                  </Link>
                  <div className="body  body-pop">
                    <div>
                      <div>
                        <p className="name text-center">
                          <Link
                            className=" text-center mo"
                            to={`/game/${el.id}`}
                          >
                            {el.name.slice(0, 17)}
                          </Link>
                        </p>
                      </div>
                      <div className="end d-flex justify-content-around">
                        <button
                          className="add"
                          onClick={() => navigate(`/game/${el.id}`)}
                        >
                          {t("buynow")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
