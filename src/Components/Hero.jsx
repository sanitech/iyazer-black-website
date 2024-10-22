import React from "react";
import heroimage from "../Assets/images/forweb2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <header class="hero">
      <div class="social-media">
        <div
          class="follow"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={transition}
        >
          Follow
        </div>
        <motion.hr
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={transition}
        />
        <motion.a
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={transition}
          href="https://t.me/iyazer2016"
        >
          <i class="bi bi-telegram"></i>
        </motion.a>
        <motion.a
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={transition}
          href="https://www.youtube.com/@Arts-Tube"
          target="_blank"
        >
          <i class="bi bi-youtube"></i>
        </motion.a>
        <motion.a
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={transition}
          href="https://www.tiktok.com/@iyazer"
          target="_blank"
        >
          <i class="bi bi-tiktok"></i>
        </motion.a>
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
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          class="hero-btn"
        >
          <Link to="/contact">
            contact us <i class="bi bi-arrow-up-right"></i>
          </Link>
        </motion.div>
      </div>
      <motion.img
        initial={{ left: "50%" }}
        whileInView={{ left: "40%" }}
        transition={transition}
        class="hero-img"
        src={heroimage}
        alt=""
      />
    </header>
  );
};

export default Hero;
