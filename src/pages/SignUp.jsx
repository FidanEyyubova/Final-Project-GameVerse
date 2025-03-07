import Aos from 'aos'
import React, { useEffect } from 'react'
import { FaEyeSlash, FaRegUserCircle, FaUserEdit } from 'react-icons/fa'
import { IoIosLock } from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import "aos/dist/aos.css";

const SignUp = () => {
     useEffect(() => {
        Aos.init({ duration: 1000 });
        window.scroll(0, 140);
      }, []);
  return (
    <div>
      <div className="register py-5">
    <div className="container-fluid  d-flex justify-content-center align-items-center">
      <div className="row middle g-0 pt-4 d-flex justify-content-center align-items-center" data-aos="fade-right">
        <div className="col-12 log-col d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center gap-3 pb-4">
            <div className="header">
              <h2 className="pt-3">Create account</h2>
            </div>
            <form
              className="d-flex flex-column gap-4 mt-3 mb-3"
            >
                <div className='d-flex gap-3'>
                <div className="d-flex flex-column in gap-2">
                <label>First Name</label>

                <div className="input-group flex-nowrap pass">
                      <span
                    className="input-group-text lock-pass"
                    id="addon-wrapping"
                  >
                    <FaUserEdit />
                  </span>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="password"
                    className="pass"
                  />
                
                </div>
              </div>
              <div className="d-flex flex-column in gap-2">
                <label>Last Name</label>

                <div className="input-group flex-nowrap pass">
                      <span
                    className="input-group-text lock-pass"
                    id="addon-wrapping"
                  >
                    <FaUserEdit />
                  </span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="password"
                    className="pass"
                  />
                
                </div>
              </div>
                </div>
                <div className="d-flex flex-column in gap-2 three">
                <label>Username</label>

                <div className="input-group flex-nowrap pass">
                      <span
                    className="input-group-text lock-pass"
                    id="addon-wrapping"
                  >
                    <FaRegUserCircle />
                  </span>
                  <input
                    type="text"
                    placeholder="Username"
                    name="password"
                    className="pass pass-three"
                  />
                
                </div>
              </div>
              <div className="d-flex flex-column in gap-2 three">
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
                    className="pass pass-three"
                  />
                
                </div>
              </div>
              <div className="d-flex flex-column gap-2">

                <label>Password</label>
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
                    className="pass pass-three-2"
                  />
                  <span
                    className="input-group-text lock-pass right"
                    id="addon-wrapping"
                  >
                    <FaEyeSlash />
                  </span>
                </div>
              <p>Minimum length is 8 characters.</p>
              </div>
              <div className="text-center">
                <button type="submit" className="mb-3 mt-2 button-log-reg">
                  Sign Up
                </button>
                <p className='end'
                >
                    Already have an account? <Link className="orange" to={"/signin"}>Sign In</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default SignUp
