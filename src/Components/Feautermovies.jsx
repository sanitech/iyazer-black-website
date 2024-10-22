import React from "react";
import { movieData } from "../Data/Data";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

const FeatureMovies = () => {
  return (
    <section className="feature-movie-section">
      <div className="feature-movie-header">
        <div className="feature-movie-sub-text">Our works</div>
        <h1>Iyazer Films</h1>
      </div>

      <div className="feature-movie-container">
        {movieData.map((movie, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
            whileInView={{ opacity: 1, y: 0 }} // Move to original position and become visible
            transition={{ duration: 2, type: "spring", stiffness: 100 }} // Transition properties
            viewport={{ once: true }} // Only animate once when in view
            className="movie-card-wrapper"
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down when tapped (for touch devices)
          >
            <MovieCard movieInfo={movie} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureMovies;
