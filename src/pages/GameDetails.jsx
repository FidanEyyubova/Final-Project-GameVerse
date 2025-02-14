import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyProvider";
import axios from "axios";

const baseURL = "https://qsnhkufqjyikekheefuo.supabase.co/rest/v1/products";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0";

const GameDetails = () => {
  const { id } = useParams();
  const { game, setGame } = useContext(MyContext);


  const gameDetail = game?.find((item) => item.id == id)

  return <div className="gamedetail">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
                <h3>{gameDetail?.title}</h3>
                <img src={gameDetail?.image} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-12"></div>
        </div>
    </div>
  </div>;
};

export default GameDetails;
