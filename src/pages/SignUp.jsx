import Aos from "aos";
import React, { useEffect, useState } from "react";
import { FaEyeSlash, FaEye, FaRegUserCircle, FaUserEdit } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const SignUp = () => {
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scroll(0, 200);
  }, []);

  const navigate = useNavigate();

  const handlePassword = () => {
    setShowPass((prev) => !prev);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!user.firstname || !user.lastname || !user.username || !user.email || !user.password) {
      setError("All fields must be filled.");
      return;
    }

    if (!emailRegex.test(user.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(user.password)) {
      setError("Password must be at least 8 characters, including letters and numbers.");
      return;
    }


    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = storedUsers.some(
      (existingUser) => existingUser.email === user.email || existingUser.username === user.username
    );

    if (isUserExists) {
      setError("This username or email is already taken.");
      setUser({ firstname: "", lastname: "", username: "", email: "", password: "" });
      return;
    }

    storedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    setError("");
    Swal.fire({
      icon: "success",
      title: "Account Created",
      text: "Your account has been created successfully!",
      customClass: {
        popup: "wishlist-popup",
        title: "wishlist-title",
        htmlContainer: "wishlist-text",
        confirmButton: "wishlist-button",
      },
    });
    navigate("/signin");


  };

  return (
    <div>
      <div className="register d-flex justify-content-center align-items-center py-5">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="row middle g-0 pt-4 d-flex justify-content-center align-items-center" data-aos="fade-right">
            <div className="col-12 log-col d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column justify-content-center align-items-center gap-3 pb-4">
                <div className="header">
                  <h2 className="pt-3">Create account</h2>
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <form className="d-flex flex-column gap-4 mb-3" onSubmit={handleSubmit}>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex flex-column in gap-2">
                      <label>First Name</label>
                      <div className="input-group flex-nowrap pass">
                        <span className="input-group-text lock-pass start-pass" id="addon-wrapping">
                          <FaUserEdit />
                        </span>
                        <input
                          type="text"
                          placeholder="First Name"
                          name="firstname"
                          className="pass"
                          value={user.firstname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column in gap-2">
                      <label>Last Name</label>
                      <div className="input-group flex-nowrap pass">
                        <span className="input-group-text lock-pass start-pass" id="addon-wrapping">
                          <FaUserEdit />
                        </span>
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="lastname"
                          className="pass"
                          value={user.lastname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  <div className="d-flex flex-column in gap-2 three">
                    <label>Username</label>
                    <div className="input-group flex-nowrap pass">
                      <span className="input-group-text lock-pass start-pass" id="addon-wrapping">
                        <FaRegUserCircle />
                      </span>
                      <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        className="pass pass-three"
                        value={user.username}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column in gap-2 three">
                    <label>Email address</label>
                    <div className="input-group flex-nowrap pass">
                      <span className="input-group-text lock-pass start-pass" id="addon-wrapping">
                        <MdAlternateEmail />
                      </span>
                      <input
                        type="email"
                        placeholder="Your email"
                        name="email"
                        className="pass pass-three"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label>Password</label>
                    <div className="input-group flex-nowrap pass">
                      <span className="input-group-text lock-pass end-pass" id="addon-wrapping">
                        <IoIosLock />
                      </span>
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="Your password"
                        name="password"
                        className="pass"
                        value={user.password}
                        onChange={handleChange}
                      />
                      <span className="input-group-text lock-pass right" id="addon-wrapping" onClick={handlePassword}>
                        {showPass ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </div>
                    <p>Minimum length is 8 characters.</p>
                  </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="mb-3  button-log-reg">
                      Sign Up
                    </button>
                    <p className="end">
                      Already have an account?{" "}
                      <Link className="orange" to={"/signin"}>
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
