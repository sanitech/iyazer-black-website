import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./Assets/style.css";
import Navbar from "./Componetes/Navbar";
import Movie from "./Pages/Movie";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie  />} />
      </Routes>
    </div>
  );
}

export default App;
