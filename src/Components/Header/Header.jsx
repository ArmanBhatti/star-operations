import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant"; // Ensure this is the correct path

const Header = () => {
  return (
    <motion.div className="express-pro-container">
      {/* Logo Section */}
      <motion.div
        variants={fadeIn("up", 0.9)} // Use the fadeIn function here
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 1 }}
        className="logo"
      >
        <span>Star Operations & Maintenance Est.</span>
        <img src={logo} alt="Logo" />
      </motion.div>

      {/* Promo Section */}
      <motion.divdiv
        className="promo-section"
        initial={{ opacity: 0 }} // Initially, the whole promo section is invisible
        animate={{ opacity: 1 }} // Fade in to visible state
        transition={{ duration: 1.2 }} // Fade transition duration
      >
        {/* Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ x: -100, opacity: 0 }} // Start from left side, invisible
          animate={{ x: 0, opacity: 1 }} // Move to its original position and fade in
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.3, // Delay to create a sequential effect
          }}
        >
          <motion.a href="mailto:abdullah.bhatti_14@icloud.com">
            abdullah.bhatti_14@icloud.com
          </motion.a>
          <motion.a href="tel:+0581618133">+0581618133</motion.a>
        </motion.div>

        {/* Lowest */}
        <motion.div
          className="lowest"
          initial={{ opacity: 0, x: 50 }} // Start from right side, invisible
          animate={{ opacity: 1, x: 0 }} // Move to original position and fade in
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.5, // Delay this element to create stagger effect
          }}
        >
          <h1>We Design</h1>
        </motion.div>

        {/* Price */}
        <motion.div
          className="price"
          initial={{ opacity: 0, x: -50 }} // Start from left side, invisible
          animate={{ opacity: 1, x: 0 }} // Move to original position and fade in
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.6, // Delay this element as well for stagger
          }}
        >
          <h1>We construct</h1>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          className="gurantee"
          initial={{ opacity: 0, x: 50 }} // Start from right side, invisible
          animate={{ opacity: 1, x: 0 }} // Move to original position and fade in
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 0.7, // Delay for staggered effect
          }}
        >
          <h1>We Build</h1>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 1 }} // Slight delay for text
          className="written"
        >
          <p>Business Needs Saudia Construction</p>
        </motion.div>

        {/* Price Info */}
        <motion.div
          className="price-info"
          initial={{ opacity: 0, y: 50 }} // Start from below, invisible
          animate={{ opacity: 1, y: 0 }} // Move to original position and fade in
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: 1.5, // Delay for price info animation
          }}
        >
          <span>Contact Us</span>
          <h2>For</h2>
          <p>Orders</p>
        </motion.div>
      </motion.divdiv>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 1,
          ease: "easeOut",
        }}
        className="form-section"
      >
        <h2>Best Service. Lowest Price.</h2>
        <p>
          Fill in your details below to receive a callback from our experts.
        </p>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Tell us more about the business you are looking to set up"
              rows="4"
              required
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            GET STARTED
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Header;
