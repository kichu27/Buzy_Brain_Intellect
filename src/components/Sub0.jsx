import React from "react";
import { motion } from "framer-motion";

import "/styles/sub00.css";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="maindiv1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="d1" variants={textVariants}>
        <h3>Who Are We </h3>
        <p>
          Intellect is here to provide positive change in the life of every
          individual with unparalleled opportunities to learn and grow in the
          respective fields by exploring their brain potential. We strongly
          believe that all our offered program adheres to the Excellence with
          Innovation as we are focused towards a superior outcome with
          high-level instructions since, we are here to help you develop the
          techniques which allow using your strength to move on with confidence.
          We strongly feel that irrespective of belief or faith, every
          individual across the globe deserves to identify their abilities and
          intelligence.
        </p>
      </motion.div>

      <motion.div className="d2" variants={textVariants}>
        <img
          src="src/components/img5.png"
          className="im"
          alt="Intellect Logo"
        />
      </motion.div>
    </motion.div>
  );
}
