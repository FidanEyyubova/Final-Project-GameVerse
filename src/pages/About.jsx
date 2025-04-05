import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();

  const handleclick = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  };

  return (
    <div className="about">
      <div className="container-fluid py-4">
        <div className="row first mx-4 py-2 px-3">
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-start align-items-center">
            <div className="d-flex flex-column gap-2">
              <span className="pt-1">{t("About")}</span>
              <h3>GameVerse</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-end align-items-center">
            <div>
              <span>
                <Trans i18nKey="aboutstep" components={{ br: <br /> }} />
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
                src="../src/images/about1.png"
                alt=""
                className="image pt-4"
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-12  d-flex justify-content-center align-items-center col-second">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <span className="mx-5 px-2">
                {t("aboutspan")}
              </span>
              <img
                src="../src/images/about2.png"
                alt=""
                className="image-2 pt-4"
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
              <img src="../src/images/ai.png" alt="" />
            </div>
          </div>
        </div>
        <div className="row  text-center team pt-5" data-aos="fade-down">
          <h2 className="team text-center my-2 py-4">{t("team")}</h2>
          <div className="col-lg-3 col-12 my-4" data-aos="fade-down">
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
          <div className="col-lg-3 col-12 my-4" data-aos="fade-down">
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
          <div className="col-lg-3 col-12 my-4" data-aos="fade-down">
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
          <div className="col-lg-3 col-12 my-4" data-aos="fade-down">
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
  );
};

export default About;
