import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyProvider";
import axios from "axios";
import { GoStarFill } from "react-icons/go";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import Swal from 'sweetalert2'

const baseURL = "https://qsnhkufqjyikekheefuo.supabase.co/rest/v1/games";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0";

const GameDetails = () => {
  const { id } = useParams();
  const { game, setGame, addToWishlist, addToCart } = useContext(MyContext);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!game || game.length === 0) {
      const fetchGameData = async () => {
        try {
          const res = await axios.get(`${baseURL}?select=*`, {
            headers: {
              apikey,
              Authorization: `Bearer ${apikey}`,
            },
          });
          setGame(res.data);
        } catch (err) {
          console.error("Error fetching games:", err);
        }
      };

      fetchGameData();
    }
  }, [game, setGame]);
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  const gameDetail = game?.find((item) => item.id == id);

  if (!gameDetail) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  const handleClick = (el, action) => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser || loggedInUser === "null") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      }).then(() => {
        window.location.href = "/signin";
      });
      return;
    }
    const user = JSON.parse(loggedInUser);

    if (action === "cart") {
      addToCart(el);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    } else if (action === "wishlist") {
      addToWishlist(el);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="gamedetail">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 back-img"
            style={{
              backgroundImage: `url(${gameDetail.imgDetail})`,
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Header />
            <Navbar />
          </div>
        </div>
        <div className="row g-0" data-aos="zoom-in">
          <div className="col-lg-3 col-md-6 col-12  d-flex justify-content-center align-items-center">
            <div className="square-img">
              <img src={gameDetail.imgDetail} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="square-img">
              <img src={gameDetail.imgDetail} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="square-img">
              <img src={gameDetail.imgDetail} alt="" />
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="square-img">
              <img src={gameDetail.imgDetail} alt="" />
            </div>
          </div>
        </div>
        <div className="row g-0 d-flex justify-content-center align-items-center mx-3">
          <div className="col-lg-9 col-md-12 col-12 d-flex justify-content-center align-items-center">
            <div>
              <div className="d-flex flex-column">
                <h1 className="mb-3 mx-3">{gameDetail.name}</h1>

                <div>
                  <p className="des mx-3">{gameDetail.desc?.[1]}</p>
                  <h2 className="mt-5">{gameDetail.desc?.[2]}</h2>
                  <p className="des">{gameDetail.desc?.[3]}</p>
                </div>
                <div className="gap-md-3 d-lg-block d-md-flex mx-4">
                  <div>
                    <h5 className="pb-2">
                      <b>Genres</b>
                    </h5>
                    <div className="d-flex gap-3">
                      {gameDetail.genres?.length > 0 &&
                        gameDetail.genres.map((genre, index) => (
                          <p key={index} className="prop text-center py-2">
                            {genre}
                          </p>
                        ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="pb-2">
                      <b>Features</b>
                    </h5>
                    <div className="d-flex gap-3">
                      {gameDetail.features?.length > 0 &&
                        gameDetail.features.map((feature, index) => (
                          <p key={index} className="prop text-center py-2">
                            {feature}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 d-flex justify-content-center align-items-center">
            <div>
              <div className="d-flex">
                {gameDetail.prevprice && (
                  <p className="prev mt-2">
                    <del>${gameDetail.prevprice}</del>
                  </p>
                )}
                <p className="price mx-2">
                  <b>${gameDetail.price}</b>
                </p>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex">
                  <button className="add mb-2">
                    <Link className="link-add">Play for free</Link>
                  </button>
                  <button className="buy-arrow mb-2">
                    <Link className="link-add pb-1">
                      <MdArrowOutward />
                    </Link>
                  </button>
                </div>
                <button
                  className="wish mb-2"
                  onClick={() => handleClick(gameDetail, "cart")}
                >
                  Add to Cart
                </button>
                <button
                  className="wish mb-2"
                  onClick={() => handleClick(gameDetail, "wishlist")}
                >
                  Add to Wishlist
                </button>
              </div>

              <div className="d-flex flex-column justify-content-center gap-2">
                <div className="d-flex justify-content-between b mt-4 mb-3">
                  <p>Developer</p>
                  <p>{gameDetail.developer}</p>
                </div>
                <div className="d-flex justify-content-between b mb-3">
                  <p>Publisher</p>
                  <p>{gameDetail.publisher}</p>
                </div>
                <div className="d-flex justify-content-between b">
                  <p>Release Date</p>
                  <p>{gameDetail.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="mx-4">
              <h2>{gameDetail.name}</h2>
              <p>{gameDetail.desc?.[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
