  import React, { useState, useEffect } from "react";
  import { motion } from "framer-motion";
  import "./BusinessExpress.css";
  import vatLogo from "../../Assets/vat.png";
  import financialLogo from "../../Assets/financial.png";
  import taxLogo from "../../Assets/tax.png";
  import strategyLogo from "../../Assets/strategy.png";
  import customerLogo from "../../Assets/customer.png";

  const sections = [
    {
      title: "IMPROVE YOUR",
      highlight: "DAY-TO-DAY OPERATIONS",
      description: "We offer a wide range of business support packages to help you efficiently manage your company’s needs.",
      logo: vatLogo,
      cardTitle: "Express VAT",
      cardDescription:
        "Our team will manage the tax registration process for your business and help ensure you remain fully compliant with the UAE’s tax regulations.",
    },
    {
      title: "OPTIMIZE YOUR",
      highlight: "FINANCIAL PROCESSES",
      description: "Our financial experts ensure your company stays on top of budgeting and cost management.",
      logo: financialLogo,
      cardTitle: "Financial Advisory",
      cardDescription:
        "We provide insights to help you make informed financial decisions for your business growth.",
    },
    {
      title: "STREAMLINE YOUR",
      highlight: "TAX COMPLIANCE",
      description: "We help you navigate complex tax regulations and ensure compliance with local laws.",
      logo: taxLogo,
      cardTitle: "Tax Compliance",
      cardDescription:
        "Stay up-to-date with the latest tax regulations and avoid penalties with our compliance services.",
    },
    {
      title: "ENHANCE YOUR",
      highlight: "BUSINESS STRATEGY",
      description: "Our team provides strategic advice to drive growth and improve performance.",
      logo: strategyLogo,
      cardTitle: "Strategic Planning",
      cardDescription:
        "Achieve your business goals with a clear and actionable strategic plan tailored to your needs.",
    },
    {
      title: "BOOST YOUR",
      highlight: "CUSTOMER EXPERIENCE",
      description: "We focus on enhancing customer satisfaction and building long-term relationships.",
      logo: customerLogo,
      cardTitle: "Customer Success",
      cardDescription:
        "Deliver exceptional service and create lasting relationships with our customer success strategies.",
    },
  ];

  const BusinessExpress = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
      }, 3000); // 3 seconds for changing sections

      return () => clearInterval(interval);
    }, []);

    const currentSection = sections[currentIndex];

    return (
      <div className="business-support-container">
        {/* Left Content Section */}
        <motion.div
          className="text-content"
          initial={{ opacity: 0, x: -100 }} // Start off-screen
          animate={{ opacity: 1, x: 0 }} // Fade in and slide to the original position
          transition={{ duration: 1 }}
        >
          <h2>
            {currentSection.title} <br />
            <span className="highlight">{currentSection.highlight}</span>
          </h2>
          <p>{currentSection.description}</p>
        </motion.div>

        {/* Right Card Section */}
        <motion.div
          className="support-card"
          initial={{ opacity: 0, scale: 0.8 }} // Start scaled down and invisible
          animate={{ opacity: 1, scale: 1 }} // Fade in and scale to original size
          transition={{ duration: 1, delay: 0.2 }} // Slight delay for the card
        >
          <div className="card-icon">
            <img src={currentSection.logo} alt={`${currentSection.cardTitle} Icon`} />
          </div>
          <h3>{currentSection.cardTitle}</h3>
          <p>{currentSection.cardDescription}</p>
        </motion.div>
      </div>
    );
  };

  export default BusinessExpress;
