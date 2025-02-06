import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container-fluid">
        <div className="row">
          <img src="../src/images/aboutpic.jpg" alt="" />
        </div>
        <div className="row descript">
          <div className="col-12 py-4">
            <h2>Welcome to <span>GameVerse</span> your ultimate <br /> destination  for games!</h2>
            <p className="py-3">
              Gameverse is a platform dedicated to gaming enthusiasts,
              providing the latest news, reviews, and insights into the gaming
              industry. It covers a wide range of topics, including PC, console,
              and mobile games, ensuring content for every type of gamer. The
              website features in-depth game reviews that analyze gameplay
              mechanics, storylines, graphics, and overall user experience.
              Players can also find previews of upcoming games, offering early
              insights into what’s next in the gaming world. Gameverse keeps its
              audience informed with daily gaming news, covering game releases,
              industry updates, and esports events.
            </p>
          </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
                
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
