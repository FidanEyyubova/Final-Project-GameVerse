import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Discover from "./pages/Discover";

function App() {
  return <>
  <Header />
  <Navbar />
  <Routes>
    <Route path="/" element = {<Discover />} />
    <Route path="/about" element ={<About />} />
  </Routes>
  <Footer />
  {/* <Productslider /> */}
  </>;
}

export default App;
