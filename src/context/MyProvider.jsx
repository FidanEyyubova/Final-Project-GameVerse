import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

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
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [wishlist, setWishlist] = useState(
    () => JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [purchasedGames, setPurchasedGames] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (
      cardNumber.length === 16 &&
      cvv.length === 3 &&
      /^\d{2}$/.test(month) &&
      Number(month) >= 1 &&
      Number(month) <= 12 &&
      /^\d{4}$/.test(year)
    ) {

      const existing = JSON.parse(localStorage.getItem("purchasedGames")) || [];

      // Combine current cart items with existing purchased ones
      const updatedPurchased = [...existing, ...cart];
  
      // Save back to localStorage
      localStorage.setItem("purchasedGames", JSON.stringify(updatedPurchased));
  
      // Optional: update in context state if needed
      setPurchasedGames(updatedPurchased);
      
      setPurchasedGames((prev) => [...prev, ...cart]);

      clearCart();
      setShowModal(false);
      navigate("/checkout");
    } else {
      alert("Please fill all fields correctly.");
    }
  };

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
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
      return;
    }

    if (cart.some((item) => item.id === game.id)) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "This product is already in the cart!",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
    } else {
      setCart((prevCart) => [...prevCart, game]);
      Swal.fire({
        icon: "success",
        title: "Added!",
        text: "Product added to cart successfully.",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
    }
  };

  const addToWishlist = (game) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to log in first!",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
      return;
    }

    if (wishlist.some((item) => item.id === game.id)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This product is already in your wishlist!",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, game]);
      Swal.fire({
        icon: "success",
        title: "Added!",
        text: "Product added to wishlist successfully.",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    Swal.fire({
      icon: "info",
      title: "Removed",
      text: "Product removed from cart.",
      customClass: {
        popup: "wishlist-popup",
        title: "wishlist-title",
        htmlContainer: "wishlist-text",
        confirmButton: "wishlist-button",
      },
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
    Swal.fire({
      icon: "info",
      title: "Removed",
      text: "Product removed from wishlist.",
      customClass: {
        popup: "wishlist-popup",
        title: "wishlist-title",
        htmlContainer: "wishlist-text",
        confirmButton: "wishlist-button",
      },
    });
  };

  const clearCart = () => {
    setCart([]);
    Swal.fire({
      icon: "info",
      title: "Cleared",
      text: "Cart has been emptied.",
      customClass: {
        popup: "wishlist-popup",
        title: "wishlist-title",
        htmlContainer: "wishlist-text",
        confirmButton: "wishlist-button",
      },
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
    Swal.fire({
      icon: "info",
      title: "Cleared",
      text: "Wishlist has been emptied.",
      customClass: {
        popup: "wishlist-popup",
        title: "wishlist-title",
        htmlContainer: "wishlist-text",
        confirmButton: "wishlist-button",
      },
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
        cardNumber,
        setCardNumber,
        cvv,
        setCvv,
        month,
        setMonth,
        year,
        setYear,
        purchasedGames,
        setPurchasedGames,
        handleAdd,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
