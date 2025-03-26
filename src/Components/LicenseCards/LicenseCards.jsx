import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import './LicenseCards.css';

const LicenseCards = () => {

  // Animation variants for info boxes
  const infoBoxLeft = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, type: "spring", stiffness: 100 },
    },
  };

  const infoBoxRight = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="license-container">
      <div className="intro-section">
        <h2>
          There has never been a better time to get your Consruction Materials in the Saudia Arabia!
        </h2>
        <p>
        Al Bawani is a diversified group of Saudi companies. Established in 1991, the past three decades have seen our business grow from a modest civil-works firm into a fully ledged general contracting corporation with a sizable portfolio, strong financial position, and a significant presence in a broad range of industries. Indeed, our construction division is now among the five largest operators in the country. What’s more, our unwavering focus on excellence has earned us a <strong>Class-1 business ranking</strong> in Saudi Arabia..
        </p>
      </div>

      {/* Animated info section */}
      <div className="info-section">
        <motion.div
          className="info-box"
          variants={infoBoxLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of element is in view
        >
          <h3>Friendly Prices</h3>
          <p>
            The total cost for your free zone trade license and 2-year UAE
            residency visa is <strong>AED 11,999</strong>. At the time of the
            upfront payment, please provide a post-dated cheque for the
            remaining 50% which will be collected after 6 months.
          </p>
        </motion.div>

        <motion.div
          className="info-box"
          variants={infoBoxRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of element is in view
        >
          <h3>General Trading & E-Commerce</h3>
          <p>
            These are the most popular business activities our clients are
            looking for. And with this special offer, you can combine both on
            the SAME license at no additional cost. If you are planning to sell
            online or trade internationally, this package is for YOU.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LicenseCards;
