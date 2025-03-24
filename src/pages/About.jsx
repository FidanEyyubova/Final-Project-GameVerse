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

        <div className="row middle py-4 mx-3" data-aos="fade-down">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="d-flex flex-column gap-3">
              <div>
                <h2 className="py-3">
                  Welcome to GameVerse your <br /> ultimate destination for
                  games!
                </h2>
              </div>
              <div>
                <img
                  src="https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Epic_Landscape_Offer2560x1440-2560x1440-08987c0c3e1701ea6a7217ed5616922d.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div>
              <div>
                <span className="text-center">
                  We offer a wide selection of the latest and <br /> classic PS titles
                  at the best prices. Whether <br /> you're looking for action,
                  adventure, <br /> sports, or RPGs, we've got you covered.
                </span>
              </div>
              <div className="text-center py-3">
                <img
                  src="https://gh.cdn.sewest.net/assets/ident/games/final-fantasy-xv/en_US/GamesIndex_GameListing_Artwork_01.jpg?quality=65"
                  alt=""
                  className="mx-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row descript py-3 mx-2" data-aos="fade-right">
          <div className="col-12 py-4">
            <h2>
              Welcome to <span>GameVerse</span> your ultimate <br /> destination
              for games!
            </h2>
            <p className="py-3">
              Gameverse is a platform dedicated to gaming enthusiasts, providing
              the latest news, reviews, and insights into the gaming industry.
              It covers a wide range of topics, including PC, console, and
              mobile games, ensuring content for every type of gamer. The
              website features in-depth game reviews that analyze gameplay
              mechanics, storylines, graphics, and overall user experience.
              Players can also find previews of upcoming games, offering early
              insights into what’s next in the gaming world. Gameverse keeps its
              audience informed with daily gaming news, covering game releases,
              industry updates, and esports events.
            </p>
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
