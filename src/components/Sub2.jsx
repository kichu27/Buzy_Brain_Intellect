import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./styles/sub22.css";

export default function Sub2() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: "src/components/images/slider1.jpeg", text: "Welcome to Buzy-Brain Intellect" },
    { id: 2, image: "src/components/images/slider2.jpeg", text: "Helping Your Child Succeed" },
    { id: 3, image: "src/components/images/slider1.jpeg", text: "Exceptional Services for All" },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* <motion.div
              className="slide-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {slide.text}
            </motion.div> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
