import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const baseURL = "https://qsnhkufqjyikekheefuo.supabase.co/rest/v1/products";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [game, setGame] = useState([]);
  const [filteredFeature, setFilteredFeature] = useState([]);
  const [filteredGenre, setFilteredGenre] = useState([]);
  const [filteredMode, setFilteredMode] = useState([]);
  const [price, setPrice] = useState(100);

  useEffect(() => {
    axios
      .get(`${baseURL}?select=*`, {
        headers: {
          apikey,
          Authorization: `Bearer ${apikey}`,
        },
      })
      .then((res) => setGame(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <MyContext.Provider value={{ game, setGame, filteredFeature, setFilteredFeature, filteredGenre, setFilteredGenre, filteredMode, setFilteredMode, price, setPrice }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
