import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyProvider";
import axios from "axios";
import { MdArrowOutward, MdKeyboardArrowRight } from "react-icons/md";
import Productslider from "../components/Productslider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Discountslider from "../components/Discountslider";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import CountPage from "../components/CountPage";
import Productslider_Three from "../components/Productslider_Three";

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
      <div className="container-fluid p-0 py-4">
        <div className="row first mx-4 py-2 px-3">
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-start align-items-center">
            <div className="d-flex flex-column gap-2">
              <span className="pt-1">Top picks</span>
              <h3>Games</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-end align-items-center">
            <div>
              <span>
                Unleash the gamer in you – explore, battle, and <br /> conquer
              </span>
            </div>
          </div>
        </div>
        <div className="row second g-0 popular">
          <div className="col-12 pt-3">
            <h2 className="py-4 mx-5">Popularity <MdKeyboardArrowRight /></h2>
            <div className="mx-4 py-2">
              <Productslider />
            </div>
          </div>
        </div>
        <div className="row g-0 third">
          <div className="col-12">
            <h2 className="py-4 mx-5">Now On The Gameverse Store <MdKeyboardArrowRight /></h2>
            <div className="mx-4 py-2">
              <Productslider />
            </div>
          </div>
        </div>
        <div className="row fourth g-0">
          <div className="col-12">
            <h2 className="py-4 mx-5">
              Featured Discounts <MdKeyboardArrowRight />
            </h2>
            <div className="mx-4 py-2">
              <Productslider_Three/>
            </div>
          </div>
        </div>
        <div className="mx-5 pt-3">
          <h2 className="py-3">Discover Free Games</h2>
        </div>
        <div className="row sixth g-0 mx-4 py-2 px-3 my-3">
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-start align-items-center">
            <div className="d-flex flex-column gap-2 py-2">
              <h4>PUBG 8th Anniversary</h4>
              <span>
                Set sail on a grand adventure in PUBG's 8th anniversary
                celebration Erangel world update
              </span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-end align-items-center">
            <div>
              <div className="d-flex">
                <button className="buy">
                  <Link className="link-add" to={"/game"}>Play for free</Link>
                </button>
                <button className="buy-arrow">
                  <Link className="link-add pb-1">
                    <MdArrowOutward />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row seventh g-0">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center">
              <img src="../src/images/pubg.jpg" alt="" />
            </div>
          </div>
        </div>
       <div>
        <CountPage />
       </div>
       <div className="row mobile g-0 d-flex justify-content-center align-items-center">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <img src="../src/images/mobile.png" alt="" />
          </div>
        </div>
       </div>
        <div className="row five g-0 py-5" >
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div id="faq">
                <h2 className="py-3">Frequently Asked Questions</h2>
              </div>
              <div className="w-75 py-3" >
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
