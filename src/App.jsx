import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Discover from "./pages/Discover";
import GameDetails from "./pages/GameDetails";
import Game from "./pages/Game";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Wishlist from "./pages/Wishlist";
import AddtoCart from "./pages/AddtoCart";
import AdminPanel from "./pages/AdminLogin";
import HomePic from "./pages/HomePic";
import HeaderTwo from "./components/HeaderTwo";
import NavbarTwo from "./components/NavbarTwo";
import { useEffect, useState } from "react";
import AboutPic from "./pages/AboutPic";

function App() {
  const location = useLocation();
  const [userRole, setUserRole] = useState(
    localStorage.getItem("userRole") || ""
  );

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/about" && (
        <>
          <HeaderTwo />
          <NavbarTwo />
        </>
      )}

      {location.pathname === "/" && (
        <div className="top-section">
          <Header />
          <Navbar />
          <HomePic />
        </div>
      )}
      {location.pathname === "/about" && (
        <div className="top-section top-section-about">
          <Header />
          <Navbar />
          <AboutPic />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/:id" element={<GameDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn  setUserRole={setUserRole} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<AddtoCart />} />
        <Route path="/admin" element={<AdminPanel  setUserRole={setUserRole} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
