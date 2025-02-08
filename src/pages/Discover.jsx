import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyProvider";
import axios from "axios";
import { MdKeyboardArrowRight } from "react-icons/md";
import Productslider from "../components/Productslider";
import { Link } from "react-router-dom";

const baseURL = "https://qsnhkufqjyikekheefuo.supabase.co/rest/v1/products";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0";

const Discover = () => {
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
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="discover">
      <div className="container-fluid p-0">
        <div className="row first g-0">
          {game.length > 0 ? (
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide w-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {game.slice(24, 27).map((el, index) => (
                  <div
                    key={el.id}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={el.image}
                      className="d-block w-100"
                      alt={el.title}
                    />
                    <div className="carousel-caption d-lg-flex flex-column align-items-start justify-content-center h-100 text-start d-md-flex d-flex">
                      <h1>{el.title}</h1>
                      <p className="w-75 my-4 d-lg-flex d-md-flex d-none">
                        {el.desc.slice(0, 240)}
                      </p>

                      <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
                        <button className="wish py-2 w-100 mb-2 mb-md-0">
                          Add to Wishlist
                        </button>
                        <button className="add py-2 mx-md-2 w-lg-0 w-sm-75">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="row second g-0 popular">
          <div className="col-12">
            <h2 className="py-4 mx-5">
              Popularity <MdKeyboardArrowRight />
            </h2>
            <div className="mx-4 py-2">
              <Productslider />
            </div>
          </div>
        </div>
        <div className="row g-0 third">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mx-5">
              <h2 className="py-4">Now On The Gameverse Store</h2>
            <Link className="view p-2">View More</Link>
            </div>
          </div>
          <div className="row px-3 g-0">
            {game.slice(12, 16).map((el, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12 mb-4">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={el.image} alt={el.title} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row fourth g-0">
        <div className="col-12">
            <h2 className="py-4 mx-5">
            Featured Discounts <MdKeyboardArrowRight />
            </h2>
            <div className="mx-4 py-2">
              <Productslider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
