import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/MyProvider";
import axios from "axios";
import { MdArrowOutward, MdKeyboardArrowRight } from "react-icons/md";
import Productslider from "../components/Productslider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import CountPage from "../components/CountPage";
import Productslider_Three from "../components/Productslider_Three";
import { Trans, useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeProvider";

const baseURL = "hhttps://qsnhkufqjyikekheefuo.supabase.co/rest/v1/games";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0";

const Discover = () => {
  const { game, setGame, addtoWishlist, addToCart } = useContext(MyContext);
  const { isLight, setIsLight } = useContext(ThemeContext);
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

    // window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  return (
    <div className={isLight ? "light-app" : "dark-app"}>
      <div className="discover">
        <div className="container-fluid p-0 py-4">
          <div className="row first mx-4 py-2 px-3">
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-start justify-content-md-start  justify-content-center align-items-center">
              <div className="d-flex flex-column justify-content-center gap-2 top-game">
                <span className="pt-1">{t("Top")}</span>
                <h3>{t("Games")}</h3>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-end justify-content-md-end   justify-content-center text-lg-start text-md-start text-center align-items-center">
              <div>
                <span>
                  <Trans i18nKey="Topdesc" components={{ br: <br /> }} />
                </span>
              </div>
            </div>
          </div>
          <div className="row second g-0 popular">
            <div className="col-12 pt-3">
              <h2 className="py-4 mx-5 hed-pop">
                {t("Popularity")} <MdKeyboardArrowRight />
              </h2>
              <div className="mx-4 py-2">
                <Productslider />
              </div>
            </div>
          </div>
          <div className="row g-0 third">
            <div className="col-12">
              <h2 className="py-4 mx-5 hed-pop now">
                {t("NowOn")} <MdKeyboardArrowRight />
              </h2>
              <div className="mx-4 py-2 hed-pop">
                <Productslider />
              </div>
            </div>
          </div>
          <div className="row fourth g-0">
            <div className="col-12">
              <h2 className="py-4 mx-5 hed-pop">
                {t("Discount")} <MdKeyboardArrowRight />
              </h2>
              <div className="mx-4 py-2">
                <Productslider_Three />
              </div>
            </div>
          </div>
          <div className="mx-4 px-1 pt-3">
            <h2 className="py-3 hed-pop">{t("Freegames")}</h2>
          </div>
          <div className="row sixth g-0 mx-4 py-2 px-3 my-3">
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-start align-items-center">
              <div className="d-flex flex-column gap-2 py-2 text-lg-start text-md-start text-center">
                <h4>{t("Anniversary")}</h4>
                <span className="anniversarydesc">{t("Anniversarydesc")}</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-end justify-content-md-end justify-content-center align-items-center">
              <div>
                <div className="d-flex mt-lg-0 mt-md-0 mt-2">
                  <button className="buy">
                    <Link className="link-add" to={"/game"}>
                      {t("Playfree")}
                    </Link>
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
              <div className="d-flex justify-content-center align-items-center mx-4">
                <img src="../src/images/pubg.jpg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <CountPage />
          </div>
          <div className="row mobile g-0 d-flex justify-content-center align-items-center">
            <div className="col-12 d-flex justify-content-center align-items-center">
              {isLight ? (
              <div className="d-flex justify-content-center align-items-center">
                 <img src="../src/images/app-light.png" alt="" />
              </div>

              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <img src="../src/images/mobile.png" alt="" />
               
              </div>
              )}
            </div>
          </div>
          <div className="row five g-0 py-5">
            <div className="col-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div id="faq">
                  <h2 className="py-3">{t("FAQ")}</h2>
                </div>
                <div className="w-75 py-3">
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
                          {t("faq1-quest")}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{t("faq1-answer")}</p>
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
                          {t("faq2-quest")}
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{t("faq2-answer")}</p>
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
                          {t("faq3-quest")}
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{t("faq3-answer")}</p>
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
                          {t("faq4-quest")}
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{t("faq4-answer")}</p>
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
                          {t("faq5-quest")}
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{t("faq5-answer")}</p>
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
    </div>
  );
};

export default Discover;
