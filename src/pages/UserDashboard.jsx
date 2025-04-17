import React, { useContext, useEffect } from "react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyProvider";
import "../pagestyle/AdminDashboard.scss";
import { FaFireAlt, FaUser } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { PiMedal } from "react-icons/pi";
import { Trans, useTranslation } from "react-i18next";
import { ThemeContext } from "../context/ThemeProvider";

const UserDashboard = () => {
  const navigate = useNavigate();
  const {
    cart,
    wishlist,
    setCart,
    setWishlist,
    purchasedGames,
    setPurchasedGames,
  } = useContext(MyContext);

  const { t } = useTranslation();
   const { isLight } = useContext(ThemeContext);

  useEffect(() => {
    const storedPurchased =
      JSON.parse(localStorage.getItem("purchasedGames")) || [];
    setPurchasedGames(storedPurchased);
  }, []);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};

  const logoutLogin = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("loggedInUser");

    setCart([]);
    setWishlist([]);

    setTimeout(() => {
      navigate("/signin");
    }, 0);
  };

  useEffect(() => {
    console.log("Cart:", cart);
    console.log("Wishlist:", wishlist);
  }, [cart, wishlist]);

  return (
    <div className={isLight ? "light-app" : "dark-app"}>
    <div className="dashboard user-dashboard">
      <div className="container-fluid">
        <div className=" row dashboard-head d-flex justify-content-between px-3 align-items-center py-3">
          <div className="col-12">
            <div className="d-flex justify-content-end align-items-center">
              <button
                onClick={logoutLogin}
                aria-label="Log out"
                className="out"
              >
                <MdLogout className="mb-1" />
              </button>
            </div>
          </div>
        </div>
        <div className="row py-4 mx-3">
          <div className="col-12">
            <div className="d-flex flex-lg-row flex-md-row  flex-sm-row flex-column gap-5 mb-5">
              <div className="user d-flex justify-content-center align-items-center">
                <FaUser />
              </div>
              <div>
                <div>
                  <h1 className="mb-3">
                    <b>{loggedInUser.username}</b>
                  </h1>
                </div>
                <div className="d-flex gap-5">
                  <div>
                    <p className="pp">{t("earn")}</p>
                    <h3>
                      <GiStarFormation className="icon-user mb-1 mx-1" />0 XP
                    </h3>
                  </div>
                  <div>
                    <p className="pp">{t("achieve")}</p>
                    <h3>
                      <PiMedal className="icon-user mb-1 mx-1" />0 XP
                    </h3>
                  </div>
                  <div>
                    <p className="pp">{t("platinum")}</p>
                    <h3>
                      <FaFireAlt className="icon-user mb-1 mx-1" />0 XP
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-3 pb-4">
          <div className="col-12">
            <div>
              <h2 className="pb-2"><Trans i18nKey="purch" components={{ br: <br /> }} /></h2>
              {purchasedGames.length === 0 ? (
                <p>{t("purchnon")}</p>
              ) : (

                <div className="row pb-5 pt-2">
                  {purchasedGames.map((game) => (
                    <div
                      key={game.id}
                      className=" col-lg-2 col-md-4 col-sm-6 mb-3 purchased d-flex justify-content-center align-items-center"
                    >
                      <div className="game-card p-3 h-100 ">
                        <img
                          src={game.imgProduct}
                          alt={game.name}
                          className="img-fluid mb-2"
                        />
                        <h5>{game.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default UserDashboard;
