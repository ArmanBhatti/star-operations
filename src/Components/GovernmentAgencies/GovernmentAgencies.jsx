import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./GovernmentAgencies.css";
import agency_1 from '../../Assets/government-of-dubai.png';
// import agency_2 from '../../Assets/united-arab-emirates-ministry-of-finanace.png';
import agency_3 from '../../Assets/federal-tax-authority.png';
import agency_4 from '../../Assets/dubai-police.png';
import agency_5 from '../../Assets/dubai-expo-2020.png';
import agency_6 from '../../Assets/dubai-health-authority.png';
import agency_7 from '../../Assets/emirates-identity-authority.png';
// import agency_8 from '../../Assets/ICP.png';

const GovernmentAgencies = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className="agencies-container" ref={sectionRef}>
      {/* Title Section with Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        We work closely with all
      </motion.h2>

      <motion.span
        className="highlight"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Construction Agencies
      </motion.span>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        We are constantly liaising with various government departments and stay
        up to date with the latest government requirements, processes, and
        timelines to set your company up for success.
      </motion.p>

      {/* Logo Section with Animation */}
      <div className="agencies-logos">
        {[ 
          // { src: agency_2, alt: "UAE Ministry of Finance" },
          { src: agency_7, alt: "Emirates Identity Authority" },
          { src: agency_6, alt: "Dubai Health Authority" },
          { src: agency_4, alt: "Dubai Police" },
          { src: agency_3, alt: "Federal Tax Authority" },
          { src: agency_5, alt: "Expo 2020" },
          { src: agency_1, alt: "Government of Dubai" },
          // { src: agency_8, alt: "Federal Authority for Identity & Citizenship" }
        ].map((agency, index) => (
          <motion.div
            key={index}
            className="logo-item"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={agency.src} alt={agency.alt} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GovernmentAgencies;
