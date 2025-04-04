import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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
import { useContext, useEffect, useState } from "react";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { MyContext } from "./context/MyProvider";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

function App() {
  const location = useLocation();
  const { game } = useContext(MyContext);
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || "");

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  const isAdminDashboard = location.pathname === "/admin-dashboard";

  return (
    <>
      {!isAdminDashboard && (
        <>
          {location.pathname !== "/" &&
            location.pathname !== "/about" &&
            !location.pathname.startsWith("/game/") &&
            location.pathname !== "/blog" &&
            !location.pathname.startsWith("/blogs/") &&(
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
            </div>
          )}
        </>
      )}

      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn setUserRole={setUserRole} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/blog" element={<Blog />} />
        
        <Route
          path="/admin-dashboard"
          element={
            userRole === "admin" ? (
              <AdminDashboard setUserRole={setUserRole} />
            ) : (
              <Navigate to="/admin" />
            )
          }
        />
        <Route
          path="/user-dashboard"
          element={
            userRole === "user" ? <UserDashboard /> : <Navigate to="/signin" />
          }
        />
        <Route path="/cart" element={<AddtoCart />} />

        {/* Fixed /admin route logic */}
        <Route
          path="/admin"
          element={
            userRole === "admin" ? <Navigate to="/admin-dashboard" /> : <AdminPanel setUserRole={setUserRole} />
          }
        />
        
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAdminDashboard && <Footer />}
    </>
  );
}

export default App;
