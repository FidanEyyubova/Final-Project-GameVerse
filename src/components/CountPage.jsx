import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import "aos/dist/aos.css";

const CountPage = () => {
  const [counterOn, setCounterOn] = useState(false);
  useEffect(() => {
      Aos.init({ duration: 1000});
    }, []);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="count-page py-5" style={{ color: "white" }}>
        <div className="container-fluid">
          <div className="header text-center py-3">
            <h2>We bring the best gaming experience.</h2>
            <p className="mt-4 text">Thousands of happy gamers have purchased their <br /> favorite games with us.</p>
          </div>

          <div className="row text-center py-4">
            <div className="col-lg-4 col-md-4 col-12 d-flex justify-content-center align-items-center" data-aos="zoom-in">
              <div className="count-space py-3">
                <h3>
                  {counterOn && <CountUp start={0} end={2000} duration={2} delay={0} />}+
                </h3>
                <p>Games sold</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 d-flex justify-content-center align-items-center" data-aos="zoom-in">
              <div className="count-space py-3">
                <h3>4.8/5</h3>
                <p>Avg. rating</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12 d-flex justify-content-center align-items-center" data-aos="zoom-in">
              <div className="count-space py-3">
                <h3 className="num" >
                  {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}K
                </h3>
                <p>Active users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CountPage;
