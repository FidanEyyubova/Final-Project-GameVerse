import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyProvider";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePic = () => {
  const { game } = useContext(MyContext);
   useEffect(() => {
      Aos.init({ duration: 1500, once : true});
    }, []);

    
  return (
    <div className="home-pic">
      <div className="container-fluid">
        <div className="row g-0 first d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center home-row">
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center home-pic-desc">
              <div className="mx-lg-5">
                {game.slice(0, 1).map((el) => (
                  <div data-aos="fade-down">
                    <h1>{el.name}</h1>
                    <p className="pb-3 py-2">{el.desc[0]}</p>
                    <div className="d-flex gap-3">
                      <button className="wish">
                        <Link className="link-add">Add to Wishlist</Link>
                      </button>
                      <div className="d-flex">
                        <button className="buy">
                          <Link className="link-add">Buy now</Link>
                        </button>
                        <button className="buy-arrow">
                          <Link className="link-add pb-1">
                            <MdArrowOutward />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-end align-items-center" data-aos="fade-down">
              <div className="d-flex flex-column  gap-3 mx-lg-5 pt-2">
                <img
                  src="https://www.playdeltaforce.com/ossweb-img/p3-main2.jpg"
                  alt=""
                />
                <img
                  src="https://i.redd.it/high-quality-delta-force-wallpapers-v0-juvk2c34z48e1.png?width=3840&format=png&auto=webp&s=9ecab059e7548a99c0dfb72e94721d764bd889aa"
                  alt=""
                />
                <img
                  src="https://images8.alphacoders.com/138/1386595.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePic;
