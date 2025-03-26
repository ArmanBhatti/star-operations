import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Animation settings for different elements
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 1 } },
  };

  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 1, staggerChildren: 0.3 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } },
  };

  return (
    <div className="testimonials-container" ref={sectionRef}>
      <div className="content-wrapper">
        <motion.div
          className="header"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2>
            Your Trusted <span>Business Setup Consultant</span>
          </motion.h2>
          <motion.p variants={textVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          Star Operations & Maintenance Est. makes it easier, faster and affordable for you to start your dream business. As one of the
            leading company formation specialists in the UAE, we work with aspiring entrepreneurs, startups, SMEs, and
            international corporations, enabling them to set up and do business in the UAE smoothly and effectively.
          </motion.p>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.li variants={listItemVariants}>Lowest cost guarantee</motion.li>
            <motion.li variants={listItemVariants}>100% transparency and unbiased advice</motion.li>
            <motion.li variants={listItemVariants}>Dedicated Success Manager</motion.li>
            <motion.li variants={listItemVariants}>We serve you in 10+ languages</motion.li>
            <motion.li variants={listItemVariants}>Top experts in the region</motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
