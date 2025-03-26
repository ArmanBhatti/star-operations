import React from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion and useInView
import "./BusinessSetup.css";
import zoneimg from '../../Assets/Freezone_card.png';
import mainimg from '../../Assets/Mainland_card.png';
import offshoreimg from '../../Assets/Offshore_card.png'

const cardVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    rotate: -15,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      yoyo: Infinity, // Adds repeated hover effect
    },
  },
};

const BusinessSetup = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Function to scroll to the contact form
  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="business-setup-wrapper" ref={sectionRef}>
      <div
        className="header"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <h1>Professional and Affordable</h1>
        <h2>
          <span>Business Setup in Dubai & UAE</span>
        </h2>
        <p>
          Get more for less. We specialise in free zone, mainland, and offshore
          company formation in the UAE.
        </p>
      </div>
      <div className="cards">
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileInView="whileInView"
          whileHover="hover"
        >
          <img src={zoneimg} alt="Freezone" />
          <h3>FREEZONE</h3>
          <p>Choose from over 50+ jurisdictions.</p>
          <button onClick={scrollToContactForm}>Enquire Now</button>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileInView="whileInView"
          whileHover="hover"
        >
          <img src={mainimg} alt="Mainland" />
          <h3>MAINLAND</h3>
          <p>Operate anywhere in the Saudia.</p>
          <button onClick={scrollToContactForm}>Enquire Now</button>
        </motion.div>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="initial"
          whileInView="whileInView"
          whileHover="hover"
        >
          <img src={offshoreimg} alt="Offshore" />
          <h3>OFFSHORE</h3>
          <p>Incorporate in 5 working days.</p>
          <button onClick={scrollToContactForm}>Enquire Now</button>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessSetup;