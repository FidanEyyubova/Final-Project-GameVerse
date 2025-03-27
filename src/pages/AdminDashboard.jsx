import React from "react";
import { MdArrowOutward, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../pagestyle/AdminDashboard.scss";
import { LuActivity } from "react-icons/lu";
import { Link } from "react-router-dom";

const AdminDashboard = ({ setUserRole }) => {
  const navigate = useNavigate();

  const logoutAdmin = () => {
    localStorage.removeItem("userRole");
    setUserRole("");
    navigate("/admin");
  };

  return (
    <div className="dashboard admin-dashboard py-3">
      <div className="container-fluid">
        <div className=" row dashboard-head d-flex justify-content-between px-3 align-items-center py-3">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5>Hi, Admin</h5>
                <h2>Welcome to GameVerse!</h2>
              </div>
              <button
                onClick={logoutAdmin}
                aria-label="Log out"
                className="out"
              >
                <MdLogout className="mb-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="row second py-2">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex justify-content-between align-items-center mb-2 admin-first px-3 py-2">
              <div>
                <small>Total Sales This Month</small>
                <h5 className="mt-2">$12,450 </h5>
              </div>
              <div>
                <img src="../src/images/static1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex justify-content-start gap-2 align-items-center mb-2 admin-first px-3 py-2">
              <div>
                <img
                  src="../src/images/static2.png"
                  alt=""
                  className="static"
                />
              </div>
              <div>
                <small>Total Revenue</small>
                <h5 className="mt-2">$35,040 </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex justify-content-start gap-2 align-items-center mb-2 admin-first px-3 py-2">
              <div>
                <img
                  src="../src/images/static3.png"
                  alt=""
                  className="static"
                />
              </div>
              <div>
                <small>
                  <b>New users</b>
                </small>
                <h5 className="mt-2">1,342</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="d-flex justify-content-between align-items-center mb-2 admin-first px-3 py-2">
              <div>
                <small>User Engagement</small>
                <h5 className="mt-2 percent">75%</h5>
              </div>
              <div>
                <img src="../src/images/static4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row third">
          <div className="col-lg-3">
            <div className="d-flex flex-column gap-2">
              <div className="d-flex justify-content-between gap-2 align-items-center mb-2 admin-first px-3 py-3">
                <div>
                  <small>Top Selling Games</small>
                  <h3 className="mt-2">500+ Sales</h3>
                </div>

                <div>
                  <button className="buy-arrow mb-4">
                    <Link className="link-add pb-1">
                      <MdArrowOutward />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-between gap-2 align-items-center mb-2 admin-first px-3 py-3">
              <div>
                  <small>Top Selling Games</small>
                  <h3 className="mt-2">500+ Sales</h3>
                </div>

                <div>
                  <button className="buy-arrow mb-4">
                    <Link className="link-add pb-1">
                      <MdArrowOutward />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="d-flex gap-4 flex-column justify-content-between align-items-center mb-2 admin-first game-pur px-3 py-3">
                <div className="py-2">
              <div>
                  <h5 className="pb-3">Game Purchases</h5>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <img src="https://daks2k3a4ib2z.cloudfront.net/59bd2f35ac06760001db2fa1/59bd3cce5ea0cd00010eb4f7_pexels-photo-450271.jpeg" alt="" className="game-pur-img" />
                  </div>
                  <div className="d-flex flex-column">
                    <small className="head-dash">GTA 5</small>
                    <small className="desc"> GamerX | Date: March 22, 2025</small>
                  </div>
                </div>

                </div>
                <div className="pb-2">
            
                <div className="d-flex gap-2">
                  <div>
                    <img src="https://daks2k3a4ib2z.cloudfront.net/59bd2f35ac06760001db2fa1/59bd3cccac06760001db3574_pexels-photo-193355.jpeg" alt="" className="game-pur-img" />
                  </div>
                  <div className="d-flex flex-column">
                    <small className="head-dash">FIFA 24</small>
                    <small className="desc"> ProPlayer | Date: March 19, 2025</small>
                  </div>
                </div>

                </div>
                <div className="pb-2">
            
                <div className="d-flex gap-2">
                  <div>
                    <img src="https://daks2k3a4ib2z.cloudfront.net/59bd2f35ac06760001db2fa1/59bd3cce5ea0cd00010eb4f6_pexels-photo-324658.jpeg" alt="" className="game-pur-img" />
                  </div>
                  <div className="d-flex flex-column">
                    <small className="head-dash">Elden Ring</small>
                    <small className="desc">ShadowX | Date: March 17, 2025</small>
                  </div>
                </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
          <div className="d-flex justify-content-between gap-2 align-items-center mb-2  px-3 py-3">
                <div>
                  <h3 className="mt-2">Publish Blog Post</h3>
                </div>

                <div>
                  <button className="blog-arrow link-add-blog">
                    <Link className="link-add">
                      Add Blog +
                    </Link>
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
