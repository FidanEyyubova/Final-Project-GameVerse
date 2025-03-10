import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { supabase } from "../supabaseClient";

const AdminPanel = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scroll(0, 70);
  }, []);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const adminEmail = "gameverse@gmail.com";
  const adminPassword = "fidan2004";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (email === adminEmail && password === adminPassword) {
      console.log('Admin login successful');
      navigate('/');
      return;
    }
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setError(error.message);
      } else {
        alert('Signed in successfully:', data);
        navigate('/game');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="login-user py-5">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row middle g-0 pt-4 d-flex justify-content-center align-items-center" data-aos="fade-right">
          <div className="col-12 log-col d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 pb-4">
              <div className="header">
                <h2 className="pt-3">Admin Login</h2>
              </div>
              <form className="d-flex flex-column gap-4 mt-3 mb-3" onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-2">
                  <label>Email address</label>
                  <div className="input-group flex-nowrap pass">
                    <span className="input-group-text lock-pass" id="addon-wrapping">
                      <MdAlternateEmail />
                    </span>
                    <input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} // Handle email input
                      className="pass"
                    />
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="d-flex justify-content-between">
                    <label>Password</label>
                  </div>
                  <div className="input-group flex-nowrap pass">
                    <span className="input-group-text lock-pass" id="addon-wrapping">
                      <IoIosLock />
                    </span>
                    <input
                      type={passwordVisible ? "text" : "password"} // Toggle password visibility
                      placeholder="Your password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Handle password input
                      className="pass"
                    />
                    <span
                      className="input-group-text lock-pass right"
                      id="addon-wrapping"
                      onClick={togglePasswordVisibility} // Toggle password visibility on click
                    >
                      {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                </div>
                {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
                <div className="text-center">
                  <button type="submit" className="mb-3 mt-2 button-log-reg">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
