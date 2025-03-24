import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const baseURL = "https://qsnhkufqjyikekheefuo.supabase.co/rest/v1/games";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbmhrdWZxanlpa2VraGVlZnVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MDM3ODUsImV4cCI6MjA1Mzk3OTc4NX0.GQfp52qKvFfupCS-NSeCJs2GipfRoAwRCEEmxHZSpU0";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [game, setGame] = useState([]);
  const [filteredFeature, setFilteredFeature] = useState([]);
  const [filteredGenre, setFilteredGenre] = useState([]);
  const [filteredMode, setFilteredMode] = useState([]);
  const [price, setPrice] = useState(100);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);


  const addToCart = (game) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
    if (!loggedInUser) {
      alert("You need to log in first!");
      window.location.href = "/login";
      return;
    }
  
    if (cart.some((item) => item.id === game.id)) {
      alert("Bu mehsul cart-da var!");
    } else {
      setCart([...cart, game]);
    }
  };

  const addtoWishlist = (game) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
    if (!loggedInUser) {
      alert("You need to log in first!");
      window.location.href = "/login"
      return;
    }
    if (wishlist.some((item) => item.id === game.id)) {
      alert("bu mehsul wishlistde var!");
    } else {
      setWishlist([...wishlist, game]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <MyContext.Provider
      value={{
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
        cart, setCart,
        wishlist, setWishlist,
        addToCart,
        addtoWishlist,
        removeFromCart,
        removeFromWishlist,
        clearCart,
        clearWishlist,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
