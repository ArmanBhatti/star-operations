import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ConsultationBanner.css';
import consult1 from '../../Assets/consult1.png';
import consult2 from '../../Assets/consult2.png';

const ConsultationBanner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const scrollToContactForm = () => {
    document
      .getElementById("contact-form")
      .scrollIntoView({ behavior: "smooth" });
  };

  // Animations for expert info and images
  const expertVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const messageVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const buttonVariant = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="consultation-banner" ref={sectionRef}>
      <motion.div
        className="consultation-expert"
        variants={expertVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="expert-info">
          <h3>Abdullah Bhatti</h3>
          <p>Sales Team Leader</p>
        </div>
        <img 
          src={consult1}
          alt="Sales Team Leader"
          className="expert-image"
        />
      </motion.div>

      <motion.div
        className="consultation-message"
        variants={messageVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2>Book a FREE Consultation</h2>
        <p>With our Company Formation Experts</p>
        <motion.button
          className="callback-button"
          onClick={scrollToContactForm}
          variants={buttonVariant}
          whileHover="hover"
          whileTap="tap"
        >
          REQUEST A CALL BACK
        </motion.button>
      </motion.div>

      <motion.div
        className="consultation-expert"
        variants={expertVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 1 }}
      >
        <img 
          src={consult2}
          alt="Corporate Services Consultant"
          className="expert-image"
        />
        <div className="expert-info">
          <h3>Muhammad Haroon</h3>
          <p>General Manager</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ConsultationBanner;