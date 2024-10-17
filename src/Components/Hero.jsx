import React from "react";
import heroimage from "../Assets/images/forweb2.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <header class="hero">
      <div class="social-media">
        <div class="follow">Follow</div>
        <hr />
        <a href="">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@Arts-Tube" target="_blank">
          <i class="bi bi-youtube"></i>
        </a>
        <a href="https://www.tiktok.com/@iyazer" target="_blank">
          <i class="bi bi-tiktok"></i>
        </a>
      </div>

      <div class="hero-text">
        <div class="hero-text-header">Iyazer Film production</div>
        <div class="hero-big-text">
          Iyazer <br /> Film <br /> production
        </div>
        <div class="hero-text-body">
          IYAZER Film production is one of the best film production in the adama
          city
        </div>
        <Link to="/contact" class="hero-btn">
          contact us <i class="bi bi-arrow-up-right"></i>
        </Link>
      </div>
      <img class="hero-img" src={heroimage} alt="" />
    </header>
  );
};

export default Hero;
