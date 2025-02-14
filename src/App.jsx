import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Discover from "./pages/Discover";
import GameDetails from "./pages/GameDetails";

function App() {
  return <>
  <Header />
  <Navbar />
  <Routes>
    <Route path="/" element = {<Discover />} />
    <Route path="/about" element ={<About />} />
    <Route path="/:id" element = {<GameDetails />} />
  </Routes>
  <Footer />
  </>;
}

export default App;
