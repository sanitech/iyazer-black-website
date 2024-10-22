import React from "react";
import serviceImage from "../Assets/images/service.jpg";
import serviceImg from "../Assets/images/aicon1.webp";
import { serviceData } from "../Data/Data";
import { motion, AnimatePresence } from "framer-motion";
const Services = () => {
  return (
    <section class="services" id="service">
      <div class="service-text-section">
        <div class="service-sub-text">service</div>
        <h1 class="service-header-text">Iyazer Services</h1>
        <div class="service-container">
          <AnimatePresence>
            {serviceData.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ x: "100%", opacity: 0 }}
                  whileInView={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 2, type: "spring" }}
                  className="service-card"
                >
                  <div class="service-img">
                    <img src={service.icon} alt="" />
                  </div>
                  <div class="service-text">
                    <h1 class="service-card-header transform-cap">
                      {service.title}
                    </h1>
                    <p class="service-card-body">{service.desc}</p>

                    <div class="hero-btn transform-cap">
                      view details <i class="bi bi-arrow-up-right"></i>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
      <div class="service-img-section">
        <img src={serviceImage} alt="" />
      </div>
    </section>
  );
};

export default Services;
