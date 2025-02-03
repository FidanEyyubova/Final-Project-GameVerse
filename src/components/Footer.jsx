import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <div className="container-fluid">
        <div className="row mx-3 border-bottom py-3">
          <img src="../src/images/logo.png" alt="" />
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
                  <Link className="menu">Discover</Link>
                </li>
                <li className="nav-item mb-1 my-3">
                  <Link className="menu">Games</Link>
                </li>
                <li className="nav-item mb-1 my-3">
                  <Link className="menu">About</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 my-2">
            <div>
              <ul className="nav flex-column">
                <li className="nav-item mb-1 my-3">
                  <Link className="menu">Blog</Link>
                </li>
                <li className="nav-item mb-1 my-3">
                  <Link className="menu">Contact</Link>
                </li>
                <li className="nav-item mb-1 my-3">
                  <Link className="menu">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-12 py-3">
            <div>
              <h5 className="mx-2">Follow us</h5>
              <div className="d-flex gap-2">
                <a href="https://www.youtube.com/" className="icon">
                  <FaYoutube />
                </a>
                <a href="https://x.com/?lang=en" className="icon">
                  <RiTwitterXFill />
                </a>
                <a href="https://www.instagram.com/" className="icon">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/?locale=ru_RU"
                  className="icon"
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
