import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyProvider";
import "../pagestyle/Games.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { IoMdSearch } from "react-icons/io";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Swal from "sweetalert2";
import { Trans, useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import { HashLoader } from "react-spinners";
import { ThemeContext } from "../context/ThemeProvider";

const Game = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
    Aos.init({ duration: 1000, once: true });
  }, []);
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {isLight} = useContext(ThemeContext)
  const {
    game,
    // setGame,
    filteredFeature,
    setFilteredFeature,
    filteredGenre,
    setFilteredGenre,
    filteredMode,
    setFilteredMode,
    price,
    setPrice,
    addToWishlist,
    wishlist,
    removeFromWishlist,
  } = useContext(MyContext);

  const [sortedGames, setSortedGames] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");

  useEffect(() => {
    setSortedGames(game);
  }, [game]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    let sorted = [...game];

    switch (value) {
      case "az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        return;
    }
    setSortedGames(sorted);
  };

  const features = [...new Set(game.flatMap((el) => el.features))];

  const genres = [...new Set(game.flatMap((el) => el.genres))];

  const modes = [...new Set(game.flatMap((el) => el.mode))];

  const filteredGames = sortedGames.filter(
    (el) =>
      (filteredFeature.length === 0 ||
        el.features.some((f) => filteredFeature.includes(f))) &&
      (filteredGenre.length === 0 ||
        el.genres.some((g) => filteredGenre.includes(g))) &&
      (filteredMode.length === 0 ||
        el.mode.some((m) => filteredMode.includes(m))) &&
      el.price <= price &&
      el.name.toLowerCase().includes(searchProducts.toLowerCase())
  );

  const handleClick = (el) => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser || loggedInUser === "null") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to sign in first!",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      }).then(() => {
        window.location.href = "/signin";
      });
      return;
    }

    const isInWishlist = wishlist.some((item) => item.id === el.id);

    if (isInWishlist) {
      removeFromWishlist(el.id);
      Swal.fire({
        icon: "warning",
        title: "Removed from Wishlist",
        text: "Game has been removed from your wishlist!",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
    } else {
      addToWishlist(el);
      Swal.fire({
        icon: "success",
        title: "Added to Wishlist",
        text: "Game has been added to your wishlist!",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
    }
  };

  return (
    <div className={isLight ? "light-app games" : "dark-app games"}>
      <div className="container-fluid py-4 game-cont">
        <div className="row first mx-4 py-2 px-3">
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-start justify-content-md-start  justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center gap-2 top-game">
              <span className="pt-1">{t("Top")}</span>
              <h3>{t("Games")}</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-lg-end justify-content-md-end   justify-content-center text-lg-start text-md-start text-center align-items-center">
            <div>
              <span>
                <Trans i18nKey="Topdesc" components={{ br: <br /> }} />
              </span>
            </div>
          </div>
        </div>
        <div className="row middle py-4 d-flex gap-5 justify-content-center">
          <div className="col-lg-3 mt-5 pt-5">
            <div className="d-flex flex-column gap-4">
              <div>
                <div className="input-group input-custom-group">
                  <span
                    className="input-group-text span-search"
                    id="basic-addon1"
                  >
                    <IoMdSearch className="span-icon" />
                  </span>
                  <input
                    type="text"
                    className="search-input"
                    placeholder={t("search")}
                    value={searchProducts}
                    onChange={(e) => setSearchProducts(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex flex-column gap-4 py-2">
                <HashLink className="menu-tag" smooth to="/#popularity">
                  {t("Popularity")} <MdOutlineKeyboardArrowRight />
                </HashLink>
                <HashLink className="menu-tag" smooth to="/#nowongamestore">
                  {t("NowOn")} <MdOutlineKeyboardArrowRight />
                </HashLink>
                <HashLink className="menu-tag" smooth to="/#discount">
                  {t("Discount")} <MdOutlineKeyboardArrowRight />
                </HashLink>
              </div>
              <div className="select-container mt-2">
                <div className="d-flex">
                  <select
                    className="genre-select px-3 custom-genre-select"
                    onChange={(e) =>
                      setFilteredGenre(
                        e.target.value ? [e.target.value] : genres
                      )
                    }
                  >
                    <option value="" className="select-name">
                      {t("genre")}
                    </option>
                    {genres.map((genre) => (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                  <div className="icon-container d-flex justify-content-center align-items-center">
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
              </div>

              <div className="select-container mt-2">
                <div className="d-flex">
                  <select
                    className="genre-select px-3"
                    aria-label="Feature selection"
                    onChange={(e) =>
                      setFilteredFeature(
                        e.target.value ? [e.target.value] : features
                      )
                    }
                  >
                    <option value="" className="select-name">
                      {t("feature")}
                    </option>
                    {features.map((feature) => (
                      <option key={feature} value={feature}>
                        {feature}
                      </option>
                    ))}
                  </select>
                  <div className="icon-container d-flex justify-content-center align-items-center">
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
              </div>

              <div>
                {modes.map((mode) => (
                  <div className="py-2" key={mode}>
                    <input
                      type="checkbox"
                      name="category"
                      className="mx-2 mode"
                      value={mode}
                      checked={filteredMode.includes(mode)} // Check if mode exists in the array
                      onChange={(e) => {
                        const selectedMode = e.target.value;
                        setFilteredMode(
                          (prev) =>
                            prev.includes(selectedMode)
                              ? prev.filter((m) => m !== selectedMode) // Remove if already selected
                              : [...prev, selectedMode] // Add if not selected
                        );
                      }}
                    />
                    <label className="label-name">{mode}</label>
                  </div>
                ))}
              </div>

              <div>
                <h4>
                  {t("maxprice")}: ${price}
                </h4>
                <input
                  type="range"
                  className="custom-range"
                  min="0"
                  max="100"
                  step="5"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="d-flex justify-content-end align-items-center">
              <div className="d-flex justify-content-center align-items-center gap-3 sorting select-container">
                <div className="d-flex">
                  <select
                    className="middle-sorting px-3"
                    aria-label="Default select example"
                    onChange={handleSortChange}
                  >
                    <option value="" selected>
                      {t("sorting")}
                    </option>
                    <option className="op" value="az">
                      AZ
                    </option>
                    <option className="op" value="za">
                      ZA
                    </option>
                    <option className="op" value="low-high">
                      {t("Low-high")}
                    </option>
                    <option className="op" value="high-low">
                      {t("High-low")}
                    </option>
                  </select>
                  <div className="icon-container-two d-flex justify-content-center align-items-center">
                    <MdOutlineKeyboardArrowDown />
                  </div>
                </div>
              </div>
            </div>
            <div className="row filtered-game" data-aos="fade-down">
              {filteredGames.length === 0 ? (
                <div className="d-flex justify-content-center align-items-center load w-100 my-5">
                  <HashLoader color="#ff4701" loading size={50} />
                </div>
              ) : (
                filteredGames.map((el) => (
                  <div key={el.id} className="col-md-4 col-sm-6">
                    <div className="cont my-2 d-flex flex-column justify-content-center align-items-center">
                      <div className="image text-center py-2 pt-5">
                        <img src={el.imgProduct} />
                      </div>
                      <div className="heart-map">
                        <Link
                          className={`heart ${
                            wishlist.some((item) => item.id === el.id)
                              ? "act-heart-game"
                              : "heart-game"
                          }`}
                          onClick={() => handleClick(el)}
                        >
                          <FaHeart />
                        </Link>
                        <p className="rate px-2 py-1">
                          <FaStar className="rate-star pb-1" />
                          {el.rate}
                        </p>
                      </div>
                      <div className="body body-pop">
                        <div>
                          <div>
                            <p className="name">
                              <Link
                                className="mx-lg-3 mx-md-3 mx-sm-4 px-lg-3 px-md-3 px-sm-2  mo"
                                to={`/game/${el.id}`}
                              >
                                {el.name.slice(0, 17)}
                              </Link>
                            </p>
                          </div>
                          <div className="end d-flex justify-content-around align-items-start mt-4 gap-lg-0 gap-md-4 gap-sm-0 gap-4 mx-lg-0 mx-md-0 mx-sm-0 mx-5 px-lg-0 px-md-0 px-sm-0 px-4">
                            <div className="d-flex gap-1">
                              {el.prevprice && (
                                <div>
                                  <p className="prevprice">
                                    <del>${el.prevprice}</del>
                                  </p>
                                </div>
                              )}
                              <p className="price mt-1">${el.price}</p>
                            </div>
                            <button
                              className="add"
                              onClick={() => navigate(`/game/${el.id}`)}
                            >
                              {t("buynow")}
                            </button>
                          </div>
                        </div>
                      </div>
                      {el.percent !== null && el.percent !== "" && (
                        <div className="percent px-2">
                          <p>{el.percent}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
