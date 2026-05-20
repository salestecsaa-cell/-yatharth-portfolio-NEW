import { useEffect, useState } from "react";
import Scene from "./Scene";

const CharacterModel = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById("work");
      
      if (workSection) {
        const workRect = workSection.getBoundingClientRect();
        // Hide character when Work section is in view
        // Show character when Work section is above viewport
        const shouldHide = workRect.top < window.innerHeight && workRect.bottom > 0;
        setIsVisible(!shouldHide);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return <Scene />;
};

export default CharacterModel;
