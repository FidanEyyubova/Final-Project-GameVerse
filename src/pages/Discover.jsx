import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyProvider";
import axios from "axios";
import { MdKeyboardArrowRight } from "react-icons/md";
import Productslider from "../components/Productslider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Discountslider from "../components/Discountslider";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

const baseURL = "hhttps://qsnhkufqjyikekheefuo.supabase.co/rest/v1/games";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0";

const Discover = () => {
  const { game, setGame, addtoWishlist, addToCart } = useContext(MyContext);
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
      .catch((err) => console.log(err));

      window.scrollTo(0, 0);
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
                {game.slice(0, 3).map((el, index) => (
                  <div
                    key={el.id}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={el.imgDetail ? el.imgDetail : el.imgData}
                      className="d-block w-100"
                      alt={el.title}
                    />
                    <div className="carousel-caption d-lg-flex flex-column align-items-start justify-content-center h-100 text-start d-md-flex d-flex">
                      <h1>{el.name}</h1>
                      <p className="w-75 my-4 d-lg-flex d-md-flex d-none">
                        {el.desc[0]}
                      </p>

                      <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center">
                        <button
                          className="wish py-2 w-100 mb-2 mb-md-0"
                          onClick={() => addtoWishlist(el)}
                        >
                          Add to Wishlist
                        </button>
                        <button
                          className="add py-2 mx-md-2 w-lg-0 w-sm-75"
                          onClick={() => navigate(`/${el.id}`)}
                        >
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
              <Link className="view p-2" to={"/game"}>
                View More
              </Link>
            </div>
          </div>
          <div className="or row px-3 g-0">
            {game.slice(15, 19).map((el, index) => (
              <div key={index} className=" miid col-lg-3 col-md-6 col-12 mb-4">
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={el.imgProduct}
                    alt={el.name}
                    className="img-fluid"
                  />
                </div>
                <div className="d-flex flex-column gap-5 load justify-content-start align-items-center">
                  <div className="up d-flex justify-content-between px-3 align-items-start gap-5 mt-4 text-center">
                    <div className="p-rate text-center">
                      <p>
                        <span className="pb-2">
                          <GoStarFill  className="pb-1"/>
                        </span>
                        {el.rate}
                      </p>
                    </div>

                    <Link onClick={() => addtoWishlist(el)}>
                      <FaHeart className="heart" />
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-column gap-5 load justify-content-end align-items-center">
                  <div className="down text-center mb-4">
                    <h5>{el.name}</h5>
                    <p className="desc px-2">{el.desc[0].slice(0, 120)}...</p>
                    <div className="d-flex justify-content-center gap-4">
                      <button
                        className="add"
                        onClick={() => navigate(`/${el.id}`)}
                      >
                        Buy now
                      </button>
                      <div className="price pt-2">
                        <p>${el.price}</p>
                      </div>
                    </div>
                  </div>
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
              <Discountslider />
            </div>
          </div>
        </div>
        <div className="row five g-0 py-3" id="faq">
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div>
                <h2 className="py-3">Frequently Asked Questions</h2>
              </div>
              <div className="w-50 py-3">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What types of games are available on this website?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We offer a variety of games, including action,
                          adventure, puzzle, strategy, sports, racing, and more.
                          Whether you prefer single-player, multiplayer, or
                          casual games, we have something for everyone.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What if I encounter problems while playing?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          If the problem persists, you can contact our Support
                          Team through the "Contact Us" section. Please provide
                          details such as the name of the game, the issue you’re
                          experiencing, and any error messages you’ve received.
                          We’ll work to resolve the problem as quickly as
                          possible!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Are the games on this site safe and virus-free?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, all the games on our site are thoroughly tested
                          to ensure they are safe and virus-free. We work with
                          trusted developers and conduct regular security checks
                          to protect your device and personal information. We
                          also use secure connections to ensure your experience
                          is safe while playing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How do I use promotional codes or discounts?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          To use a promotional code or discount, simply go to
                          the Cart section during checkout. There, you’ll find a
                          field where you can enter your discount code. Once
                          entered, click "Apply" to see the discount reflected
                          in your total. Be sure that is valid.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Do you have a mobile app?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Currently, we do not have a mobile app. However, you
                          can easily access and buy games directly from our
                          website on your computer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
