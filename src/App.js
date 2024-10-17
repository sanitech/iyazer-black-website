import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./Assets/style.css";
import Navbar from "./Components/Navbar";
import Movie from "./Pages/Movie";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
