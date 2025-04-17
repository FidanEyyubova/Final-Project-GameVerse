import React, { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Trans, useTranslation } from "react-i18next";
import "../pagestyle/About.scss"
import { ThemeContext } from "../context/ThemeProvider";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const {isLight} = useContext(ThemeContext)

  const handleclick = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  };

  return (
    <div className={isLight ? "light-app" : "dark-app"}>

    <div className="about">
      <div className="container-fluid pb-4">
      <div className="row pb-5">
          <div
            className="col-12 back-img"
            style={{
              backgroundImage: `url(https://cdn.wallpapersafari.com/76/63/LXlAPV.jpg)`,
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Header />
            <Navbar />
          </div>
        </div>
      <div className="row first mx-4 py-2 px-3">
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-start justify-content-md-start  justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center gap-2 top-game">
              <span className="pt-1">{t("Top")}</span>
              <h3 className="text-lg-start text-md-start text-center">{t("Games")}</h3>
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

        <div
          className="row middle py-5 d-flex justify-content-center align-items-center my-3"
          data-aos="fade-down"
        >
          <div className="col-lg-7 col-md-7 col-12 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column  justify-content-center align-items-center">
              <h2 className="mx-5 text-center">{t("abouthead")}</h2>
              <img
                src="https://4kwallpapers.com/images/walls/thumbs_2t/21839.jpg"
                alt=""
                className="image pt-4"
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12  d-flex justify-content-center align-items-center col-second">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <span className="mx-5 px-2 mt-3 text-lg-start text-md-start text-center">
                {t("aboutspan")}
              </span>
              <img
                src="https://e0.pxfuel.com/wallpapers/700/914/desktop-wallpaper-popular-gaming-steam-games.jpg"
                alt=""
                className="image-2 down-img pt-4"
              />
            </div>
          </div>
        </div>
        <div className="row first mx-3 py-3 px-3 my-3 mt-5">
          <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-start align-items-center">
            <div className="d-flex flex-column gap-2">
              <h3> {t("futurehead")}</h3>
              <span>
              {t("futurespan")}
              </span>
            </div>
          </div>
        </div>
        <div className="row seventh g-0">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center">
              <img src="https://wallpapers.com/images/hd/pc-gaming-setup-rgb-4k-ft1ym37yjyb7lp19.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="row  text-center team pt-5" data-aos="fade-down">
          <h2 className="team text-center my-2 py-4">{t("team")}</h2>
          <div className="col-lg-3 col-md-6 col-12 my-4" data-aos="fade-down">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/well-dressed-young-businessman-portrait_1024356-1568.jpg"
                alt=""
              />
            </div>
            <div className="my-3 team-name">
              <h5>James Holloway</h5>
              <p>
                <i>CEO</i>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-4" data-aos="fade-down">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/woman-business-suit-gray-background_1106493-225464.jpg"
                alt=""
              />
            </div>
            <div className="my-3 team-name">
              <h5>Isabella Thornton</h5>
              <p>
                <i>{t("marketing")}</i>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-4" data-aos="fade-down">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/well-dressed-businessman-with-cross-arm-portrait_1024356-1497.jpg"
                alt=""
              />
            </div>
            <div className="my-3 team-name">
              <h5>Lucas Montgomery</h5>
              <p>
                <i>{t("customer")}</i>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-4" data-aos="fade-down">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/formal-female_929505-4339.jpg"
                alt=""
              />
            </div>
            <div className="my-3 team-name">
              <h5>Angela Wilson</h5>
              <p><i>{t("designer")}</i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
