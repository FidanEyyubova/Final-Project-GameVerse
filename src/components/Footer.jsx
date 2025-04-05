import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <div className="container-fluid">
        <div className="row mx-3 border-bottom py-2 mt-2">
          <h5>GAMEVERSE</h5>
        </div>
        <div className="row mx-3 border-bottom py-3">
          <div className="col-lg-3 col-md-12 col-12">
            <div>
              <p className="my-3 game">
                <Trans i18nKey="footdesc" components={{ br: <br /> }} />
              
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 my-2">
            <div>
              <ul className="nav flex-column">
                <li className="nav-item mb-1 my-3">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) => (isActive ? "active" : "menu")}
                  >
                    {t("Discover")}
                  </NavLink>
                </li>
                <li className="nav-item mb-1 my-3">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "menu")}
                    to={"/game"}
                  >
                    {t("Games")}
                  </NavLink>
                </li>
                <li className="nav-item mb-1 my-3">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "menu")}
                    to={"/about"}
                  >
                    {t("About")}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 my-2">
            <div>
              <ul className="nav flex-column">
                <li className="nav-item mb-1 my-3">
                  <NavLink
                    to={"/blog"}
                    className={({ isActive }) => (isActive ? "active" : "menu")}
                  >
                    {t("Blog")}
                  </NavLink>
                </li>
                <li className="nav-item mb-1 my-3">
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "menu")}
                    to={"/contact"}
                  >
                    {t("Contact")}
                  </NavLink>
                </li>
                <li className="nav-item mb-1 my-3">
                  <HashLink className="menu" smooth to="/#faq">
                    FAQ
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 py-3">
            <div>
              <h5 className="mx-2">{t("follow")}</h5>
              <div className="d-flex gap-3 mx-2">
                <a href="https://www.youtube.com/" className="footer-icon">
                  <FaYoutube />
                </a>
                <a href="https://x.com/?lang=en" className="footer-icon">
                  <RiTwitterXFill />
                </a>
                <a href="https://www.instagram.com/" className="footer-icon">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/?locale=ru_RU"
                  className="footer-icon"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-3 d-flex justify-content-between py-3 text-center">
          <div className="col-12">
            <p>{t("right")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
