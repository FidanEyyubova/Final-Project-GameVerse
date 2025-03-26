import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuCircleUserRound } from "react-icons/lu";
import { IoIosLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

const SignIn = ({ setUserRole }) => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scroll(0, 100);
  }, []);

  const handlePassword = () => {
    setShowPass((prev) => !prev);
  };

  const handleChange = (event) => {
    setUser((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!user.email || !user.password) {
      setError("All fields must be filled.");
      return;
    }

    if (!emailRegex.test(user.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(user.password)) {
      setError(
        "Password must be at least 8 characters, including letters and numbers."
      );
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = storedUsers.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      alert("Login successful!");
      navigate("/user-dashboard");
      setUserRole("user");
      localStorage.setItem("userRole", "user");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-user d-flex justify-content-center align-items-center">
      <div className="container-fluid  d-flex justify-content-center align-items-center">
        <div
          className="row middle g-0 pt-4 d-flex justify-content-center align-items-center"
          data-aos="fade-right"
        >
          <div className="col-12 log-col d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 pb-4">
              <div className="header">
                <h2 className="pt-3">Log In</h2>
              </div>
              <form
                className="d-flex flex-column gap-4 mb-3"
                onSubmit={handleSubmit}
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
                      name="email"
                      className="pass"
                      onChange={handleChange}
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
                      type={showPass ? "text" : "password"}
                      placeholder="Your password"
                      name="password"
                      className="pass"
                      onChange={handleChange}
                    />
                    <span
                      className="input-group-text lock-pass right"
                      id="addon-wrapping"
                      onClick={handlePassword}
                    >
                      {showPass ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                </div>
                <div className="mx-2">
                  <input type="checkbox" className="check" />
                  <span className="mx-2">Remember Me</span>
                </div>
                <div className="text-center">
                  <button type="submit" className="mb-3 mt-2 button-log-reg">
                    Login
                  </button>
                  <p>
                    Do not have an account?{" "}
                    <Link className="orange" to={"/signup"}>
                      Sign Up
                    </Link>
                  </p>
                  <p className="error">{error}</p>
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
