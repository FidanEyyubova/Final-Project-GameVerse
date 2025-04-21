import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { supabase } from "../supabaseClient";
import { useTranslation } from "react-i18next";
import "../pagestyle/LogReg.scss";
import { ThemeContext } from "../context/ThemeProvider";

const AdminPanel = ({ setUserRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scroll(0, 70);
  }, []);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { t } = useTranslation();

  const { isLight } = useContext(ThemeContext);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const adminEmail = "gameverse@gmail.com";
  const adminPassword = "fidan2004";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (email === adminEmail && password === adminPassword) {
      console.log("Admin login successful");
      localStorage.setItem("userRole", "admin");
      navigate("/admin-dashboard");
      setUserRole("admin");
      return;
    }
    setError("Invalid email or password.");
    navigate("/admin");
  };

  return (
    <div className={isLight ? "light-app" : "dark-app"}>
    <div className="login-user admin pt-5 d-flex justify-content-center align-items-center">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div
          className="row middle g-0 pt-4 d-flex justify-content-center align-items-center"
          data-aos="fade-right"
        >
          <div className="col-12 log-col d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 pb-4">
              <div className="header">
                <h2 className="pt-3">{t("admin")}</h2>
              </div>
              <form
                className="d-flex flex-column gap-4 mt-3 mb-3"
                onSubmit={handleSubmit}
              >
                <div className="d-flex flex-column gap-2">
                  <label>{t("email")}</label>
                  <div className="input-group flex-nowrap pass">
                    <span
                      className="input-group-text lock-pass"
                      id="addon-wrapping"
                    >
                      <MdAlternateEmail />
                    </span>
                    <input
                      type="email"
                      placeholder={t("yourmail")}
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pass"
                    />
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between">
                    <label>{t("password")}</label>
                  </div>
                  <div className="input-group flex-nowrap pass">
                    <span
                      className="input-group-text lock-pass"
                      id="addon-wrapping"
                    >
                      <IoIosLock />
                    </span>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder={t("yourpass")}
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pass"
                    />
                    <span
                      className="input-group-text lock-pass right"
                      id="addon-wrapping"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="text-center">
                  <button type="submit" className="mb-3 mt-2 button-log-reg">
                    {t("login")}
                  </button>
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

export default AdminPanel;
