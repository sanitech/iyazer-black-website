import React from "react";
import { motion } from "framer-motion";

const CAt = () => {
  return (
    <div className="cat-section">
      <motion.hr
        initial={{ width: 0 }} // Start with zero width
        whileInView={{ width: "100%" }} // Expand to full width
        transition={{ duration: 1, type: "spring", stiffness: 100 }} // Transition properties
        viewport={{ once: true }} // Only animate once when in view
        className="divider"
      />

      <motion.section
        initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }} // Move to original position and become visible
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }} // Transition properties
        viewport={{ once: true }} // Only animate once when in view
        className="cat"
      >
        <div className="cat-text-section">
          <motion.div
            initial={{ opacity: 0, x: -20 }} // Start slightly to the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Move to original position and become visible
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }} // Transition properties
            className="cat-header-sub-text"
          >
            get in touch
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} // Start slightly to the right and invisible
            whileInView={{ opacity: 1, x: 0 }} // Move to original position and become visible
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delay: 0.4,
            }} // Transition properties
            className="cat-motto"
          >
            Ready To Get Focused?
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }} // Start slightly to the left and invisible
            whileInView={{ opacity: 1, x: 0 }} // Move to original position and become visible
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              delay: 0.6,
            }} // Transition properties
            className="cat-key"
          >
            Let's Talk
          </motion.div>
        </div>

        <motion.a
          initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Move to original position and become visible
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            delay: 0.8,
          }} // Transition properties
          whileHover={{ scale: 1.05 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Scale down when tapped (for touch devices)
          className="cat-btn-section"
        >
          <div className="cat-btn">
            <i className="bi bi-arrow-up-right" />
          </div>
        </motion.a>
      </motion.section>
    </div>
  );
};

export default CAt;
