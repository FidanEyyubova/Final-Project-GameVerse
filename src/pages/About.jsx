import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once : true});
  }, []);
  return (
    <div className="about">
      <div className="container-fluid">
        <div className="row">
          <img src="../src/images/aboutpic.jpg" alt="" />
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
        <div className="row middle py-4 mx-3" data-aos="fade-down">
          <div className="col-lg-6 col-md-6 col-12">
            <div>
              <div className="text-center">
                <img
                  src="https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Epic_Landscape_Offer2560x1440-2560x1440-08987c0c3e1701ea6a7217ed5616922d.jpg"
                  alt=""
                />
              </div>
              <div>
                <p className="py-3">
                  One of the standout features of Gameverse is its extensive
                  collection of game guides and tutorials. These guides help
                  players navigate difficult levels, unlock achievements, and
                  master game mechanics. The platform also includes a vibrant
                  community section where gamers can discuss their favorite
                  titles, share experiences, and exchange tips. Forums and
                  comment sections allow for engaging discussions and debates on
                  trending gaming topics.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div>
              <div>
                <p>
                  The website has a sleek and user-friendly interface, making it
                  easy to navigate and find relevant content. A special section
                  is dedicated to indie games, giving smaller developers a
                  platform to showcase their work. Gameverse offers a
                  marketplace for gaming merchandise, including apparel,
                  accessories, and collectibles. It also features a section for
                  deals and discounts on popular games and gaming gear. Readers
                  can participate in giveaways and contests to win
                  gaming-related prizes.
                </p>
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
