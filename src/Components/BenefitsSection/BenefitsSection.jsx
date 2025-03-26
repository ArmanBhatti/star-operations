// BenefitsSection.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './BenefitsSection.css';
import logo_1 from '../../Assets/image-1.png';
import logo_2 from '../../Assets/image-2.png';
import logo_3 from '../../Assets/image-3.png';
import logo_4 from '../../Assets/image-4.png';
import logo_5 from '../../Assets/image-5.png';
import logo_6 from '../../Assets/image-6.png';

const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const benefits = [
    { image: logo_1, text: 'Pay 0% personal and income tax, maintain 100% ownership' },
    { image: logo_2, text: 'Easy to apply dependent visas and sponsor your family' },
    { image: logo_3, text: "Ranked World's 2nd Safest City and 4th Best Place To Live And Work" },
    { image: logo_4, text: 'State-of-the-art healthcare and infrastructure' },
    { image: logo_5, text: 'Live in a vibrant international community' },
    { image: logo_6, text: 'Strategically located with easy access to major markets in Asia, Africa, and Europe' },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="benefits-section"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Benefits of trading in <span>construction materials in Saudi Arabia</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Saudi Arabia's booming construction industry offers unparalleled opportunities for trading in construction materials. 
        As one of the fastest-growing economies in the region, its constant demand for high-quality materials opens doors for suppliers and traders. 
        With excellent infrastructure, global connectivity, and tax-free policies, establishing your construction material business in Saudi Arabia 
        is a smart investment with significant growth potential.
      </motion.p>

      {/* Benefits Grid */}
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="benefit-item"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={benefit.image}
              alt="Benefit illustration"
              className="benefit-image"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <p>{benefit.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BenefitsSection;
