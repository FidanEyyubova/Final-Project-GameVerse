import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Discover from "./pages/Discover";
import GameDetails from "./pages/GameDetails";
import Game from "./pages/Game";
import Contact from "./pages/Contact";

function App() {
  return <>
  <Header />
  <Navbar />
  <Routes>
    <Route path="/" element = {<Discover />} />
    <Route path="/about" element ={<About />} />
    <Route path="/game" element = {<Game />} />
    <Route path="/:id" element = {<GameDetails />} />
    <Route path="/contact" element = {<Contact />} />
  </Routes>
  <Footer />
  </>;
}

export default App;
