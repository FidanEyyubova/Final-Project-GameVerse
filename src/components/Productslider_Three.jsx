import React, { useContext, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import axios from "axios";
import { MyContext } from "../context/MyProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";
import "../pagestyle/Discover.scss";
import { FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { HashLoader } from "react-spinners";
import { FaStar } from "react-icons/fa6";

const Productslider_Three = () => {
  const { game, addToWishlist, wishlist, removeFromWishlist } =
    useContext(MyContext);
  const navigate = useNavigate();

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
    <Slider {...settings} arrows>
      {game.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center load w-100 my-5">
          <HashLoader color="#ff4701" loading={true} size={50} />
        </div>
      ) : (
        game.slice(19, 27).map((el) => (
          <div
            key={el.id}
            className="popularity py-2 discount"
            data-aos="fade-down"
            id="discount"
          >
            <div className="product-slide d-flex justify-content-center">
              <img src={el.imgProduct} alt={el.name} />
            </div>
            <div className="top-rate-wish">
              <button
                className={`heart heart-app ${
                  wishlist.some((item) => item.id === el.id)
                    ? "act-heart mb-2"
                    : "heart mb-3"
                }`}
                onClick={() => handleClick(el)}
              >
                <FaHeart />
              </button>
              <p className="rate rate-app px-2 py-1">
                <FaStar className="rate-star pb-1" />
                {el.rate}
              </p>
            </div>

            <div className="body-wrap-dis px-lg-4 px-md-4 px-sm-4  body-pop">
              <p className="name">
                <Link className="mo mx-lg-3 mx-md-3 mx-sm-3" to={`/game/${el.id}`}>
                  {el.name}
                </Link>
              </p>
              <div className="end d-flex justify-content-around gap-lg-0 gap-md-0 gap-sm-0 gap-2 text-center">
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
              <div className="mx-lg-3 mx-md-3 mx-sm-3 pb-3">
                <p className="prevprice">
                  <del>${el.prevprice}</del>
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </Slider>
  );
};

export default Productslider_Three;
