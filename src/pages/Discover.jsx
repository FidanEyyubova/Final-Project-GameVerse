import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyProvider";
import axios from "axios";

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
        <div className="row first  g-0">
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
      </div>
    </div>
  );
};

export default Discover;
