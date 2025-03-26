import React, { useState, useEffect, useCallback, useMemo } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import FadeInSection from "./Components/FadeInSection/FadeInSection";
import BenefitsSection from "./Components/BenefitsSection/BenefitsSection";
import BusinessExpress from "./Components/BusinessExpress/BusinessExpress";
import ConsultationBanner from "./Components/ConsultationBanner/ConsultationBanner";
import BusinessLifecycle from "./Components/BusinessLifecycle/BusinessLifecycle";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import GovernmentAgencies from "./Components/GovernmentAgencies/GovernmentAgencies";
import Header from "./Components/Header/Header";
import LicenseCards from "./Components/LicenseCards/LicenseCards";
import Testimonials from "./Components/Testimonials/Testimonials";
import "./App.css"; // Ensure you have this CSS file for responsive styles

function App() {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);

  // Memoize the components array
  const components = useMemo(() => [
    <Header />,
    <LicenseCards />,
    <GovernmentAgencies />,
    <ConsultationBanner />,
    <BusinessLifecycle />,
    <Testimonials />,
    <BenefitsSection />,
    <BusinessExpress />,
    <ContactForm />,
    <Footer />,
  ], []);

  // Handle dot click to show the corresponding component
  const handleDotClick = (index) => {
    setActiveComponentIndex(index);
    const targetElement = document.getElementById(`component-${index}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Memoized scroll handler with useCallback to prevent re-creation on every render
  const handleScroll = useCallback(() => {
    components.forEach((_, index) => {
      const element = document.getElementById(`component-${index}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveComponentIndex(index);
        }
      }
    });
  }, [components]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="App">
      {/* Sidebar Dots */}
      <Sidebar
        sections={components}
        activeComponentIndex={activeComponentIndex}
        onDotClick={handleDotClick}
      />

      {/* Render the active component based on dot click */}
      <div className="component-container">
        {components.map((component, index) => (
          <div
            key={index}
            id={`component-${index}`}
            className={`fade-section ${activeComponentIndex === index ? "active" : ""}`}
          >
            <FadeInSection>{component}</FadeInSection>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;