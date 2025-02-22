import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyProvider";
import { GrCubes } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const Game = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const {
    game,
    setGame,
    filteredFeature,
    setFilteredFeature,
    filteredGenre,
    setFilteredGenre,
    filteredMode,
    setFilteredMode,
    price,
    setPrice,
  } = useContext(MyContext);

  const [sortedGames, setSortedGames] = useState([]);

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

  const features = [ ...new Set(game.flatMap((el) => el.features))];

  const genres = [ ...new Set(game.flatMap((el) => el.genres))];

  const modes = [ ...new Set(game.flatMap((el) => el.mode))];

  const filteredGames = sortedGames.filter(
    (el) =>
      (filteredFeature.length === 0 || el.features.some((f) => filteredFeature.includes(f))) &&
      (filteredGenre.length === 0 || el.genres.some((g) => filteredGenre.includes(g))) &&
      (filteredMode.length === 0 || el.mode.some((m) => filteredMode.includes(m))) &&
      el.price <= price
  );

  console.log(filteredGames)

  return (
    <div className="games">
      <div className="container-fluid">
        <div className="row back-img">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h1>
              <i>PRODUCTS</i>
            </h1>
          </div>
        </div>

        <div className="row middle py-4 d-flex gap-5 justify-content-center">
          <div className="col-lg-3">
            <div className="d-flex flex-column gap-4 py-3">
              <div>
                <h5>features</h5>
                {features.map((feature) => (
                  <div className="py-2" key={feature}>
                    <input
                      type="checkbox"
                      name="feature"
                      className="mx-2"
                      value={feature}
                      checked={filteredFeature.includes(feature)} // Check if feature exists in array
                      onChange={(e) => {
                        const selectedFeature = e.target.value;
                        setFilteredFeature(
                          (prev) =>
                            prev.includes(selectedFeature)
                              ? prev.filter((f) => f !== selectedFeature) // Remove if already selected
                              : [...prev, selectedFeature] // Add if not selected
                        );
                      }}
                    />
                    <label>{feature}</label>
                  </div>
                ))}
              </div>
              <div>
                <h4>Stock</h4>
                <div>
                  {genres.map((genre) => (
                    <div key={genre} className="py-2">
                      <input
                        type="checkbox"
                        name="genre"
                        className="mx-2"
                        value={genre}
                        checked={filteredGenre.includes(genre)} // Check if genre exists in the array
                        onChange={(e) => {
                          const selectedGenre = e.target.value;
                          setFilteredGenre(
                            (prev) =>
                              prev.includes(selectedGenre)
                                ? prev.filter((g) => g !== selectedGenre) // Remove if already selected
                                : [...prev, selectedGenre] // Add if not selected
                          );
                        }}
                      />
                      <label>{genre}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4>Brand</h4>
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
                        src={el.img}
                        alt=""
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div className="mx-3 pt-3">
                      <p>
                        <b>{el.title.slice(0, 20)}...</b>
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
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 mx-2">
                <GrCubes className="icon-b" />
              </div>
              <div className="d-flex gap-3">
                <p className="mt-2 sort">Sort</p>
                <select className="form mb-2" onChange={handleSortChange}>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                </select>
              </div>
            </div>
            <div className="row">
              {filteredGames.map((el) => (
                <div key={el.id} className="col-md-4">
                  <div className="cont my-2 d-flex flex-column justify-content-center align-items-center">
                    <div className="image  text-center py-2 pt-5">
                      <img src={el.image} />
                      <div className="d-flex justify-content-between align-items-center mx-3">
                        <Link className="icon px-2 pb-1">
                          <CiHeart />
                        </Link>
                        <Link className="icon px-2 pb-1">
                          <CiShoppingBasket />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center py-2">
                      <div className="py-2">
                        <h5>
                          <Link to={`/${el.id}`}>{el.title}</Link>
                        </h5>
                      </div>
                      <div className="d-flex gap-2">
                        {el.prevprice !== null && el.prevprice !== "" && (
                          <p className="prev">${el.prevprice}.00</p>
                        )}
                        <p className="price">${el.price}.00</p>
                      </div>
                      <div className="d-flex">
                        <p className="star">
                          <FaStar />
                        </p>
                        <p className="mt-1 mx-2">
                          <b>{el.rate}</b>
                        </p>
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
