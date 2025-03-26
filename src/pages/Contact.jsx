import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
   useEffect(() => {
      Aos.init({ duration: 1500, once : true});
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="contact">
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center py-3 pt-5" data-aos="fade-down">
          <div className="row info d-flex justify-content-center align-items-center py-4">
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <div className="mb-3">
                <p>Contact Info</p>
                <h2>
                  We are always happy to <br /> assist you
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
              <div className="d-flex gap-4">
                <div>
                  <h5 className="text-center pb-2">Email Address</h5>
                  <p className="cc">gameverse@gmail.com</p>
                </div>
                <div>
                  <h5 className="text-center num pb-2">Number</h5>
                  <p className="cc">+123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-conc d-flex justify-content-center align-items-center mt-5 py-4 pt-5 mx-4" data-aos="fade-down">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="conc-header d-flex justify-content-start align-items-center">
              <div className="d-flex flex-column justify-content-center align-items-start">
              <h2>Contact Us</h2>
              <p>Any question or remarks? Just write us a message!</p>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div>
                <form action="" className="py-3">
                  <div className="d-flex gap-4 mb-5 mt-3">
                    <div className="d-flex flex-column input-wrapper">
                      <label htmlFor="">First Name</label>
                      <input type="text" />
                    </div>
                    <div className="d-flex flex-column input-wrapper">
                      <label htmlFor="">Last Name</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="d-flex gap-4 mb-5">
                    <div className="d-flex flex-column input-wrapper">
                      <label htmlFor="">Email</label>
                      <input type="email" />
                    </div>
                    <div className="d-flex flex-column input-wrapper">
                      <label htmlFor="">Phone Number</label>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="d-flex flex-column input-wrapper">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" placeholder="Write your message..."></textarea>
                  </div>
                  <div className="d-flex justify-content-end align-items-center my-4">
                    <button>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5 pb-5">
          <div className="col-12 p-0">
            <div
              className="map-container"
              style={{ width: "100%", maxWidth: "1700px" }}
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
  );
};

export default Contact;
