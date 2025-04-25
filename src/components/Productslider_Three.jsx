import React, { useContext, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MyContext } from "../context/MyProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { HashLoader } from "react-spinners";
import { FaStar } from "react-icons/fa6";
import "../pagestyle/Popularity.scss";
import { ThemeContext } from "../context/ThemeProvider";

const Productslider_Three = () => {
  const { game, addToWishlist, wishlist, removeFromWishlist } =
    useContext(MyContext);
  const navigate = useNavigate();
  const { isLight } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
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

    const isInWishlist = wishlist.some((item) => item.id === el.id);

    if (isInWishlist) {
      removeFromWishlist(el.id);
      Swal.fire({
        icon: "warning",
        title: "Removed from Wishlist",
        text: `${el.name} has been removed from your wishlist!`,
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: <button className="slick-prev"></button>,
    nextArrow: <button className="slick-next"></button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="mx-4">
      <Slider {...settings} arrows>
        {game.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center load w-100 my-5">
            <HashLoader color="#ff4701" loading={true} size={50} />
          </div>
        ) : (
          game.slice(17, 25).map((el) => (
            <div className={isLight ? "light-app" : "dark-app"} key={el.id}>
              <div
                className="popularity main-slide"
                data-aos="fade-down"
                id="popularity"
              >
                <div className="product-slide d-flex justify-content-center">
                  <div className="image-container">
                    <img src={el.imgProduct} alt={el.name} />
                  </div>
                  <div className="heart-rate">
                    <div>
                      <button
                        className={`heart-slide-pop ${
                          wishlist.some((item) => item.id === el.id)
                            ? "act-heart-slide"
                            : "heart-slide"
                        }`}
                        onClick={() => handleClick(el)}
                      >
                        <FaHeart />
                      </button>
                    </div>
                    <div>
                      <p className="rate-slide d-flex px-2 mt-1">
                        <FaStar className="rate-star pt-1" />
                        {el.rate}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide-text text-center">
                  <div className="d-flex flex-column justify-content-center gap-2">
                    <p className="name ">
                      <Link
                        className="mo mx-lg-3 mx-md-3 mx-sm-3"
                        to={`/game/${el.id}`}
                      >
                        {el.name}
                      </Link>
                    </p>
                    <div className="end d-flex justify-content-center  text-center">
                      <div className="end-place d-flex gap-4">
                      <div>
                        <p className="mt-2 price discount">-{el.discount}%</p>
                      </div>
                      <div>
                        <p className="mt-2 price">${el.price}</p>
                      </div>
                      <div>
                        <button
                          className="add"
                          onClick={() => navigate(`/game/${el.id}`)}
                        >
                          {t("buynow")}
                        </button>
                      </div>

                      </div>
                    </div>
                    <div className="prev d-flex justify-content-center">

                    <div className="prev-place">
                  <p className="prevprice">
                    <del>${el.prevprice}</del>
                  </p>
                </div>
                    </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
          ))
        )}
      </Slider>
    </div>
  );
};

export default Productslider_Three;
