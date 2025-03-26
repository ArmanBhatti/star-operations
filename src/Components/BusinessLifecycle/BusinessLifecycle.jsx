import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./BusinessLifecycle.css";

const BusinessLifecycle = () => {
  const steps = [
    { id: 1, label: "Determine the Scope of Maintenance Services", icon: "🔧" },
    { id: 2, label: "Choose Business Jurisdiction (Freezone, Mainland, Offshore)", icon: "📍" },
    { id: 3, label: "Register Your Business Name", icon: "✔️" },
    { id: 4, label: "Obtain Necessary Government Approvals and Licenses", icon: "🏗️" },
    { id: 5, label: "Hire Skilled Labor and Technicians", icon: "👷‍♂️" },
    { id: 6, label: "Purchase Tools and Equipment", icon: "🛠️" },
    { id: 7, label: "Set Up a Business Bank Account", icon: "🏦" },
    { id: 8, label: "Launch and Market Your Services", icon: "🚀" },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 2000); // Cycle through steps every 2 seconds
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <motion.div
      ref={sectionRef}
      className="business-lifecycle"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className={`step-container ${activeStep === index ? "active" : ""}`}
          style={{
            gridRow: Math.floor(index / 4) + 1, // This ensures a 2-row layout
            gridColumn: (index % 4) + 1,
          }}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 150,
            damping: 25,
            delay: index * 0.4, // Delay staggered animation for each step
          }}
        >
          <motion.div
            className="step-circle"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              delay: index * 0.4,
            }}
          >
            <span className="step-icon">{step.icon}</span>
          </motion.div>
          <p className="step-label">
            Step {step.id}: {step.label}
          </p>

          {/* Connectors between steps */}
          {index < steps.length - 1 && (
            <motion.div
              className={`connector ${activeStep === index ? "highlight" : ""}`}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 150,
                damping: 25,
                delay: index * 0.4 + 0.5, // Delay connector animation
              }}
            ></motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BusinessLifecycle;
