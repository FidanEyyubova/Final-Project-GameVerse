import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyProvider";
import { Link, useNavigate } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { Trans, useTranslation } from "react-i18next";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import "../pagestyle/WishAdd.scss"
import { ThemeContext } from "../context/ThemeProvider";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist, addToCart } =
    useContext(MyContext);

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
      }, []);

  const { t } = useTranslation();

  const { isLight } = useContext(ThemeContext);

  const navigate = useNavigate();
  return (
    <div className={isLight ? "light-app" : "dark-app"}>
    <div className="wishlist wishlist-first d-flex justify-content-center align-items-center">
      <div className="container-fluid">
        <div className="wishlist-header pt-5 mt-5">
          <div className="d-flex justify-content-between align-items-center px-5 pt-5">
            <h1 className={wishlist.length === 0 ? "mx-auto text-center" : ""}>
             {t("wihslist")}
            </h1>
            {wishlist.length > 0 && (
              <button className="clear py-1 px-1" onClick={clearWishlist}>
                {t("clearwish")}
              </button>
            )}
          </div>
        </div>
        {wishlist.length === 0 ? (
          <div className="text-center d-flex flex-column justify-content-center align-items-center gap-4 pb-5">
            <h2 className="text-center empty">
            <Trans i18nKey="woshtext" components={{ br: <br /> }} />
            </h2>
            <button
              className="shop animate__animated animate__tada animate__infinite	infinite animate__slower mb-4"
              onClick={() => navigate("/game")}
            >
              {t("backshop")}
            </button>
          </div>
        ) : (
          <div className="row row-wish d-flex flex-wrap justify-content-center align-items-center pb-5 mb-5 pt-3" >
            {wishlist.map((el, index) => (
              <div
                key={index}
                className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center" data-aos="fade-down"
              >
                <div className="d-flex wishlist-detail p-4 justify-content-between  align-items-center mb-4 gap-4">
                  <div>
                    <img src={el.imgProduct} alt="" />
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-3">
                        <h4 onClick={() => navigate(`/game/${el.id}`)}>{el.name}</h4>
                        <p className=" star-p px-2">
                          <GoStarFill className="star mb-lg-1" /> {el.rate}
                        </p>
                      </div>
                      <button
                        className="remove "
                        onClick={() => removeFromWishlist(el.id)}
                      >
                        <MdDelete className="mb-lg-2" />
                      </button>
                    </div>
                    <div>
                      <p className="desc py-2">{el.desc[0].slice(0, 120)}...</p>
                    </div>
                   
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2 align-items-center">
                        {el.prevprice !== null && el.prevprice !== "" && (
                          <p className="prev">
                            <del>${el.prevprice}</del>
                          </p>
                        )}
                        <h5 className="price">
                          <b>${el.price}</b>
                        </h5>
                      </div>
                      <button className="add py-1 px-2" onClick={() => addToCart(el)}>
                      {t("addbtn")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

    </div>
  );
};

export default Wishlist;
