import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
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
                <span>Gameverse</span> is a gaming <br /> platform for news,
                reviews, <br /> and community discussions <br /> on the latest
                trends <br /> and releases.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 my-2">
            <div>
              <ul className="nav flex-column">
                <li className="nav-item mb-1 my-3">
                  <NavLink to={"/"} className={({isActive}) => (
                    isActive ? "active" : "menu"
                  )}>Discover</NavLink>
                </li>
                <li className="nav-item mb-1 my-3">
                <NavLink className={({isActive}) => 
                  isActive ? "active" : "menu"} to={"/game"}>
                    Games
                  </NavLink>
                </li>
                <li className="nav-item mb-1 my-3">
                  <NavLink className={({isActive}) => 
                  isActive ? "active" : "menu"} to={"/about"}>
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 my-2">
            <div>
              <ul className="nav flex-column">
                <li className="nav-item mb-1 my-3">
                <NavLink to={"/blog"} className={({isActive}) => (
                    isActive ? "active" : "menu"
                  )}>Blog</NavLink>
                </li>
                <li className="nav-item mb-1 my-3">
                <NavLink className={({isActive}) => 
                  isActive ? "active" : "menu"} to={"/contact"}>
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item mb-1 my-3">
                <HashLink className="menu" smooth to="/#faq">FAQ</HashLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 py-3">
            <div>
              <h5 className="mx-2">Follow us</h5>
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
            <p>All Rights Reserved © 2025 Wedesigntech Pvt Ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
