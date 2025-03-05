import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuCircleUserRound } from "react-icons/lu";
import { IoIosLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

const SignIn = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scroll(0, 70);
  }, []);
  return (
    <div className="login-user py-5">
    <div className="container-fluid  d-flex justify-content-center align-items-center">
      <div className="row middle g-0 pt-4 d-flex justify-content-center align-items-center" data-aos="fade-right">
        <div className="col-12 log-col d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center gap-3 pb-4">
            <div className="header">
              <h2 className="pt-3">Log In</h2>
            </div>
            <form
              className="d-flex flex-column gap-4 mt-3 mb-3"
            >
              <div className="d-flex flex-column in gap-2">
                <label>Email address</label>

                <div className="input-group flex-nowrap pass">
                      <span
                    className="input-group-text lock-pass"
                    id="addon-wrapping"
                  >
                    <MdAlternateEmail />
                  </span>
                  <input
                    type="email"
                    placeholder="Your email"
                    name="password"
                    className="pass"
                  />
                
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex justify-content-between">

                <label>Password</label>
                <Link className="orange">Forgot Password?</Link>
                </div>
                <div className="input-group flex-nowrap pass">
                <span
                    className="input-group-text lock-pass"
                    id="addon-wrapping"
                  >
                    <IoIosLock />
                  </span>
                  <input
                    type="password"
                    placeholder="Your password"
                    name="password"
                    className="pass"
                  />
                  <span
                    className="input-group-text lock-pass right"
                    id="addon-wrapping"
                  >
                    <FaEyeSlash />
                  </span>
                </div>
              </div>
              <div className="mx-2">
                <input
                  type="checkbox" className="check"
                />
                <span className="mx-2">
                  Remember Me
                </span>
              </div>
              <div className="text-center">
                <button type="submit" className="mb-3 mt-2 button-log-reg">
                  Login
                </button>
                <p
                >
                    Do not have an account? <Link className="orange" to={"/signup"}>Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignIn;
