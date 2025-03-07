import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyProvider";
import axios from "axios";
import { GoStarFill } from "react-icons/go";

const baseURL = "https://qsnhkufqjyikekheefuo.supabase.co/rest/v1/games";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0";

const GameDetails = () => {
  const { id } = useParams();
  const { game, setGame } = useContext(MyContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const res = await axios.get(`${baseURL}?select=*`, {
          headers: {
            apikey,
            Authorization: `Bearer ${apikey}`,
          },
        });
        setGame(res.data);
      } catch (err) {
        console.error("Error fetching games:", err);
      }
    };

    fetchGameData();
  }, [setGame]);

  const gameDetail = game?.find((item) => item.id == id);

  if (!gameDetail) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="gamedetail py-5">
      <div className="container-fluid">
        <div className="row g-0 d-flex justify-content-center align-items-center">
          <div className="col-lg-8 col-md-12 col-12 d-flex justify-content-center align-items-center">
            <div>
              <div className="d-flex">
                <h1 className="mx-2">{gameDetail.name}</h1>
                <div className="d-flex rate">
                  <p className="mx-2 star">
                    <GoStarFill />
                  </p>
                  <p className="mt-1">{gameDetail.rate}</p>
                </div>
              </div>
              <img src={gameDetail.imgDetail} alt="" className="mt-3" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 d-flex justify-content-center align-items-center pt-4">
            <div>
              <p className="price">
                <b>${gameDetail.price}</b>
              </p>
              <div className="d-flex flex-column">
                <button className="add mb-2">Buy now</button>
                <button className="wish mb-2">Add to Cart</button>
                <button className="wish mb-2">Add to Wishlist</button>
              </div>
              <div className="py-2 gap-md-3 d-lg-block d-md-flex">
                <div>
                  <p >
                   <b>Genres</b> 
                  </p>
                  <div className="d-flex gap-3">
                    {gameDetail.genres?.map((genre, index) => (
                      <p key={index} className="prop text-center py-1">
                        {genre}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <p>
                    <b>Features</b>
                  </p>
                  <div className="d-flex gap-3">
                    {gameDetail.features?.map((feature, index) => (
                      <p key={index} className="prop text-center py-1">
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="py-2">
                <div className="d-flex justify-content-between b mb-2">
                  <p>Developer</p>
                  <p>{gameDetail.developer}</p>
                </div>
                <div className="d-flex justify-content-between b mb-2">
                  <p>Publisher</p>
                  <p>{gameDetail.publisher}</p>
                </div>
                <div className="d-flex justify-content-between b mb-2">
                  <p>Release Date</p>
                  <p>{gameDetail.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div>
              <h2>{gameDetail.des?.[0]}</h2>
              <p className="des">{gameDetail.des?.[1]}</p>
              <h2 className="mt-5">{gameDetail.des?.[2]}</h2>
              <p className="des">{gameDetail.des?.[3]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
