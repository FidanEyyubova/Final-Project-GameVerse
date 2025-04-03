import React, { useContext, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { MyContext } from "../context/MyProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";
import "../pagestyle/Discover.scss";
import { FaHeart } from "react-icons/fa";

const baseURL = "https://qsnhkufqjyikekheefuo.supabase.co/rest/v1/games";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0";

const Productslider_Three = () => {
  const { game, setGame, addToWishlist, wishlist, removeFromWishlist } =
    useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseURL}?select=*`, {
        headers: {
          apikey,
          Authorization: `Bearer ${apikey}`,
        },
      })
      .then((res) => setGame(res.data))
      .catch((err) => console.error("Error fetching products:", err));
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
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Slider {...settings} arrows>
      {game && game.length > 0 ? (
        game.slice(19, 27).map((el) => (
          <div key={el.id} className="popularity py-2" data-aos="fade-down" id="discount">
            <div className="product-slide d-flex justify-content-center">
              <img src={el.imgProduct} alt={el.name} />
            </div>
            <button
              className={`heart ${
                wishlist.some((item) => item.id === el.id)
                  ? "act-heart mb-2"
                  : "heart mb-3"
              }`}
              onClick={() => handleClick(el)}
            >
              <FaHeart />
            </button>

            <div className="body-wrap-dis px-4 body-pop">
              <p className="name">
                <Link className="mo mx-3" to={`/game/${el.id}`}>
                  {el.name}
                </Link>
              </p>
              <div className="end d-flex justify-content-around text-center">
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
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="mx-3 pb-3">
                  <p className="prevprice">
                    <del>${el.prevprice}</del>
                  </p>
                </div>
            </div>
          </div>
        ))
      ) : (
        <div className="loading">Loading products...</div>
      )}
    </Slider>
  );
};

export default Productslider_Three;
