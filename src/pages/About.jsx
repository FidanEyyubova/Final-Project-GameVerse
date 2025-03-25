import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <div className="container-fluid py-4">
        <div className="row first mx-4 py-2 px-3">
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-start align-items-center">
            <div className="d-flex flex-column gap-2">
              <span className="pt-1">About</span>
              <h3>GameVerse</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-end align-items-center">
            <div>
              <span>
                Step into the arena – play, compete, and <br /> dominate
              </span>
            </div>
          </div>
        </div>

        <div
          className="row middle py-5 d-flex justify-content-center align-items-center"
          data-aos="fade-down"
        >
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column  justify-content-center align-items-center">
              <div>
                <h2 className="py-3">
                  Welcome to GameVerse your <br /> ultimate destination for
                  games!
                </h2>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Epic_Landscape_Offer2560x1440-2560x1440-08987c0c3e1701ea6a7217ed5616922d.jpg"
                  alt=""
                  className="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12  d-flex justify-content-center align-items-center col-second">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="spandiv">
                <span>
                  Gameverse is your ultimate gaming hub that brings together the
                  latest news, in-depth reviews, and insights from the world of
                  video games. Designed for gamers by gamers, the website serves
                  as a one-stop destination to explore trending games, upcoming
                  releases, esports tournaments, and gaming culture.
                </span>
              </div>
              <div className="py-3">
                <img
                  src="https://gh.cdn.sewest.net/assets/ident/games/final-fantasy-xv/en_US/GamesIndex_GameListing_Artwork_01.jpg?quality=65"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row first mx-3 py-3 px-3 my-3">
          <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-start align-items-center">
            <div className="d-flex flex-column gap-2">
              <h3>The Future of Gaming Starts Now</h3>
              <span>
                {" "}
                At <span>GameVerse</span> we believe that gaming is evolving faster than
                ever, bringing players together through innovation, competition,
                and an immersive community experience. With a vast collection of
                the latest games, AI-driven matchmaking, and interactive
                tournaments, we are redefining how gamers connect and compete.
              </span>
            </div>
          </div>
        </div>
        <div className="row seventh g-0">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center">
              <img src="../src/images/ai.png" alt="" />
            </div>
          </div>
        </div>
        <div className="row  text-center team py-3 pb-5 " data-aos="fade-down">
          <h2 className="team text-center my-2 py-4">Our Team</h2>
          <div className="col-lg-4 col-12 my-2" data-aos="fade-down">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/well-dressed-young-businessman-portrait_1024356-1568.jpg"
                alt=""
              />
            </div>
            <div className="my-3">
              <h4>James Holloway</h4>
              <p>
                <i>CEO</i>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 my-2" data-aos="fade-down">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/woman-business-suit-gray-background_1106493-225464.jpg"
                alt=""
              />
            </div>
            <div className="my-3">
              <h4>Isabella Thornton</h4>
              <p>
                <i>Marketing</i>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-12 my-2" data-aos="fade-down">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/well-dressed-businessman-with-cross-arm-portrait_1024356-1497.jpg"
                alt=""
              />
            </div>
            <div className="my-3">
              <h4>Lucas Montgomery</h4>
              <p>
                <i>Customer Support</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
