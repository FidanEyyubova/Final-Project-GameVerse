import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyProvider";
import "../pagestyle/Games.scss";
import { GrCubes } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import { IoMdSearch } from "react-icons/io";

const Game = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
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
    addtoWishlist,
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

  return (
    <div className="games">
      <div className="container-fluid py-4">
        <div className="row first mx-4 py-2 px-3">
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-start align-items-center">
            <div className="d-flex flex-column gap-2">
              <span className="pt-1">Top picks</span>
              <h3>Games</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-end align-items-center">
            <div>
              <span>
                Unleash the gamer in you – explore, battle, and <br /> conquer
              </span>
            </div>
          </div>
        </div>
        <div className="row middle py-4 d-flex gap-5 justify-content-center">
          <div className="col-lg-3">
            <div className="d-flex flex-column gap-4">
              <div>
                <h5>Search</h5>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <IoMdSearch />
                  </span>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search products..."
                    value={searchProducts}
                    onChange={(e) => setSearchProducts(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex flex-column">
                <HashLink className="menu" smooth to="/#faq">
                  FAQ
                </HashLink>
                <HashLink className="menu" smooth to="/#faq">
                  FAQ
                </HashLink>
                <HashLink className="menu" smooth to="/#faq">
                  FAQ
                </HashLink>
              </div>
              <div>
                <h4>Genres</h4>
                <div>
                  <select
                    className="genre-select"
                    aria-label="Genre selection"
                    onChange={(e) =>
                      setFilteredGenre(
                        e.target.value ? [e.target.value] : genres
                      )
                    }
                  >
                    <option value="">Select a genre</option>
                    {genres.map((genre) => (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <h4>Features</h4>
                <div>
                  <select
                    className="genre-select"
                    aria-label="Feature selection"
                    onChange={(e) =>
                      setFilteredFeature(
                        e.target.value ? [e.target.value] : features
                      )
                    }
                  >
                    <option value="">Select a feature</option>
                    {features.map((feature) => (
                      <option key={feature} value={feature}>
                        {feature}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <h4>Mode</h4>
                {modes.map((mode) => (
                  <div className="py-2" key={mode}>
                    <input
                      type="checkbox"
                      name="category"
                      className="mx-2"
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
                    <label>{mode}</label>
                  </div>
                ))}
              </div>

              <div>
                <h4>Max Price: ${price}</h4>
                <input
                  type="range"
                  className="form-range custom-range"
                  min="0"
                  max="100"
                  step="5"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="mb-4">
              <h4>Best Sellers</h4>
              <div className="d-flex flex-column flex-wrap gap-2 mt-4">
                {game.slice(0, 2).map((el) => (
                  <div
                    key={el.id}
                    className="d-flex slm mb-2"
                    style={{ backgroundColor: "white", borderRadius: "10px" }}
                  >
                    <div className="mx-3 py-3">
                      <img
                        src={el?.imgProduct}
                        alt=""
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div className="mx-3 pt-3">
                      <p style={{ color: "black" }}>
                        <b>{el?.name}...</b>
                      </p>
                      <p style={{ color: "#F13D45", fontWeight: "600" }}>
                        {el.price}.00
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="d-flex justify-content-end align-items-center">
              <div className="d-flex justify-content-center align-items-center gap-3 sorting">
                <div>
                  <p className=" sort">Sort</p>
                </div>
                <div>
                  <select
                    className="middle"
                    aria-label="Default select example"
                    onChange={handleSortChange}
                  >
                    <option value="az" selected>
                      Open this select menu
                    </option>
                    <option value="za">One</option>
                    <option value="low-high">Two</option>
                    <option value="high-low">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              {filteredGames.map((el) => (
                <div key={el.id} className="col-md-4">
                  <div className="cont my-2 d-flex flex-column justify-content-center align-items-center">
                    <div className="image  text-center py-2 pt-5">
                      <img src={el.imgProduct} />
                    </div>
                    <Link onClick={() => addtoWishlist(el)}>
                      <FaHeart className="heart" />
                    </Link>
                    <div className="body  body-pop">
                      <div>
                        <div>
                          <p className="name">
                            <Link className=" mx-4 px-2 mo" to={`/${el.id}`}>
                              {el.name.slice(0, 17)}
                            </Link>
                          </p>
                        </div>
                        <div className="end d-flex justify-content-around mt-4">
                          <p className="mt-2 price">${el.price}</p>
                          <button
                            className="add"
                            onClick={() => navigate(`/${el.id}`)}
                          >
                            Buy Now
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
              ))}
            </div>
          </div>
          <div className="row g-0">
            <div className="col-12">
              <div className="back py-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
