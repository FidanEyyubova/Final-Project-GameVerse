import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

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
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("wishlist")) || []);

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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      // window.location.href = "/signin";
      return;
    }

    if (cart.some((item) => item.id === game.id)) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "This product is already in the cart!",
      });
    } else {
      setCart((prevCart) => [...prevCart, game]);
      Swal.fire({
        icon: "success",
        title: "Added!",
        text: "Product added to cart successfully.",
      });
    }
  };

  const addToWishlist =  (game) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to log in first!",
      });
      window.location.href = "/signin";
      return;
    }

    if (wishlist.some((item) => item.id === game.id)) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "This product is already in your wishlist!",
      });
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, game]);
      Swal.fire({
        icon: "success",
        title: "Added!",
        text: "Product added to wishlist successfully.",
      });
    }
  };

  const removeFromCart =  (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    Swal.fire({
      icon: "info",
      title: "Removed",
      text: "Product removed from cart.",
    });
  };

  const removeFromWishlist =  (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
    Swal.fire({
      icon: "info",
      title: "Removed",
      text: "Product removed from wishlist.",
    });
  };

  const clearCart =  () => {
    setCart([]);
    Swal.fire({
      icon: "info",
      title: "Cleared",
      text: "Cart has been emptied.",
    });
  };

  const clearWishlist =  () => {
    setWishlist([]);
    Swal.fire({
      icon: "info",
      title: "Cleared",
      text: "Wishlist has been emptied.",
    });
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
        cart,
        setCart,
        wishlist,
        setWishlist,
        addToCart,
        addToWishlist,
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
