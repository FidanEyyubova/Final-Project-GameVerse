import React, { useContext, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { MyContext } from "../context/MyProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const baseURL = "https://qsnhkufqjyikekheefuo.supabase.co/rest/v1/games";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0";

const Discountslider = () => {
  const { game, setGame, addtoWishlist } = useContext(MyContext);
  const navigate = useNavigate();

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
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
          <div className="popularity">
            <div
              key={el.id}
              className="product-slide d-flex justify-content-center"
            >
              <img src={el.imgProduct} alt={el.name} />
            </div>
            <Link onClick={() => addtoWishlist(el)}>
              <FaHeart className="heart" />
            </Link>
            <div className="body px-4 body-discount">
              <div>
                <div>
                  <p className="name">

                  <Link className="mo mx-3" to={`/${el.id}`}>
                    {el.name}
                  </Link>
                  </p>
                </div>
                <div className="end d-flex justify-content-around text-center mt-2">
                  <div>

                  <p className="mt-2 price discount">-{el.discount}%</p>
                  </div>
                  <div>

                  <p className="mt-2 price">${el.price}</p>
                  </div>
                  <div>

                  <button
                    className="add"
                    onClick={() => navigate(`/${el.id}`)}
                  >
                    Buy Now
                  </button>
                  </div>
                </div>
                <div className="mx-3 pb-3">
                  <p className="prevprice"><del>${el.prevprice}</del></p>
                </div>
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

export default Discountslider;
