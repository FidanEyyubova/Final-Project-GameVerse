import React, { useContext, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { MyContext } from "../context/MyProvider";
import { Link } from "react-router-dom";

const baseURL = "https://qsnhkufqjyikekheefuo.supabase.co/rest/v1/products";
const apikey = "YOUR_API_KEY_HERE";

const Discountslider = () => {
    const { game, setGame } = useContext(MyContext);

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
          game.slice(16,23).map((el) => (
            <div className="popularity">
              <div
                key={el.id}
                className="product-slide d-flex justify-content-center"
              >
                <img src={el.image} alt={el.name} />
              </div>
              <div className="body px-4 mx-3">
  
              <div>
              <Link to={`/${el.id}`} className="name">{el.title}</Link>
              </div>
              <div className="d-flex end py-4">
                <p className="my-2 mx-3 price">${el.price}</p>
                <button className="add mx-5">Buy now</button>
              </div>
              </div>
            </div>
          ))
        ) : (
          <div className="loading">Loading products...</div>
        )}
      </Slider>
    );
}

export default Discountslider
