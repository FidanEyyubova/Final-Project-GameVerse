import React, { useContext, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Trans, useTranslation } from "react-i18next";
import "../pagestyle/Contact.scss";
import { ThemeContext } from "../context/ThemeProvider";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
    window.scrollTo(0, 0);
  }, []);

  const { isLight } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className={isLight ? "light-app" : "dark-app"}>

    <div className="contact">
      <div className="container-fluid">
        <div
          className="d-flex justify-content-center align-items-center py-3 pt-5"
          data-aos="fade-down"
        >
          <div className="row info d-flex justify-content-center align-items-center py-4">
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <div className="mb-3 mx-md-4">
                <p>{t("contactinfo")}</p>
                <h2>
                  <Trans i18nKey="contacthead" components={{ br: <br /> }} />
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <div className="d-flex flex-lg-row  flex-md-column flex-sm-row flex-column gap-4">
                <div>
                  <h5 className="text-center pb-2">{t("email")}</h5>
                  <p className="cc text-center">gameverse@gmail.com</p>
                </div>
                <div>
                  <h5 className="text-center num pb-2">{t("number")}</h5>
                  <p className="cc text-center">+123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">

        <div
          className="second-conc d-flex justify-content-center align-items-center mt-5 py-4 pt-5 mx-4"
          data-aos="fade-down"
        >
          <div className="row d-flex justify-content-center align-items-center">
            <div className="conc-header d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center">{t("Contact")}</h2>
                <p className="text-center">{t("concques")}</p>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div>
                <form action="" className="py-3">
                  <div className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column gap-4 mb-5 mt-3">
                    <div className="d-flex flex-column input-wrapper">
                      <label htmlFor="">{t("first")}</label>
                      <input type="text" />
                    </div>
                    <div className="d-flex flex-column input-wrapper">
                      <label htmlFor="">{t("last")}</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="d-flex gap-4 mb-5 flex-lg-row flex-md-row flex-sm-row flex-column">
                    <div className="d-flex flex-column input-wrapper">
                      <label htmlFor="">{t("email")}</label>
                      <input type="email" />
                    </div>
                    <div className="d-flex flex-column input-wrapper">
                      <label htmlFor="">{t("number")}</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="d-flex flex-column input-wrapper">
                    <label htmlFor="">{t("message")}</label>
                    <textarea
                      name=""
                      id=""
                      placeholder="Write your message..."
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-lg-end justify-content-md-end justify-content-sm-end justify-content-center  align-items-center my-4">
                    <button className="send py-2">{t("sendmessage")}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="row py-5 pb-5">
          <div className="col-12 p-0">
            <div
              className="map-container"
              style={{ width: "100%", }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12880.636965452359!2d-115.07830475045652!3d36.18700888383667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8dc928cfe64e7%3A0xa7db8399b4bb0217!2sN%20Ringe%20Ln%2C%20Sunrise%20Manor%2C%20NV%2C%20USA!5e0!3m2!1sen!2saz!4v1740653097852!5m2!1sen!2saz"
                style={{ border: 0, width: "100%", height: "400px" }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
