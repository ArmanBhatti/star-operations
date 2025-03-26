import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const FadeInSection = ({ children }) => {
  const controls = useAnimation(); // Framer Motion animation controller
  const ref = useRef(null); // Reference for the DOM element

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const element = ref.current; // Copy the ref to a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible"); // Start animation when in view
        }
      },
      { threshold: 0.3 } // 30% of the element should be visible to trigger
    );

    if (element) {
      observer.observe(element);
    }

    // Cleanup function: unobserve when the component unmounts
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [controls]);

  // Animation Variants
  const variants = {
    hidden: {
      opacity: 0,
      y: 50, // Start position (slightly below)
    },
    visible: {
      opacity: 1,
      y: 0, // End position (normal view)
      transition: {
        duration: 0.8, // Animation duration
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref} // Attach the ref to observe this div
      initial="hidden" // Initial state
      animate={controls} // Controlled by Intersection Observer
      variants={variants} // Animation variants
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
