import React from "react";
import logo from "../Assets/images/logo2.png";
import { Link } from "react-router-dom";
import { galleryData } from "../Data";

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="company-section">
          <div class="logo">
            <img src={logo} alt="" />
            <div class="company-text">
              Iyazer Film Production teaches future filmmakers through
              practical, hands-on learning. Our experienced directors guide
              students in developing creative skills and real-world filmmaking
              knowledge.
            </div>
          </div>
        </div>

        <div class="our-gallery">
          <div class="footer-section-title">Our Gallery</div>
          <Link to={"/gallery"} class="small-gallery">
            {galleryData.slice(0, 6).map((item, index) => (
              <div className="gallery">
                <img src={item.image} alt="" />
              </div>
            ))}
          </Link>
        </div>
        <div class="footer-social-media-section">
          <div class="footer-section-title">follow me</div>
          <div class="footer-secondary-text">Connect me with social media</div>
          <div class="footer-social-media">
            <a href="https://www.tiktok.com/@iyazer" target="_blank">
              <i class="bi bi-tiktok"></i>
            </a>
            <a href="https://t.me/iyazer2016" target="_blank">
              <i class="bi bi-telegram"></i>
            </a>
            <a href="">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@Arts-Tube" target="_blank">
              <i class="bi bi-youtube"></i>
            </a>
          </div>
        </div>
        <div class="contact-us-section">
          <div class="footer-section-title">contact us</div>
          <div class="contact-us-info">
            <a href="" class="footer-secondary-text">
              <i class="bi bi-geo-alt"></i>
              <span>Adama mebrat hayle mench biro 5-19</span>
            </a>
            <a href="tel:+25198660360" class="footer-secondary-text">
              <i class="bi bi-telephone"></i>
              <span> 0970747513 / 098660360 </span>
            </a>
            <a href="" class="footer-secondary-text">
              <i class="bi bi-envelope"></i>
              <span>iyazer@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <hr class="divider" />
      <div class="footer-info">
        <a href="https://ixtechsoloutions.com" target="_blank">
          &copy; 2024 ix-technology All Rights Reserved.
        </a>
        <div class="dev-social-media">
          <a href="">
            <i class="bi bi-telegram"></i>
          </a>
          <a href="">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
