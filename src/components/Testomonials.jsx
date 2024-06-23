import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles/test.css";

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when at least 50% of the component is in view
  });

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="maindivvv"
    >
      <div className="subdiv111">
        <h1>OUR TESTIMONIALS</h1>
        <img src="src\components\star.png" className="star" alt="star" />
      </div>

      <div className="subdiv3">
        <div className="subbox">
          <div className="sbcon">
            <p>
              My child completed the course successfully at BuzyBrain Intellect.
              Their creative training for empowering children has proven to be
              true! My child has improved a lot not only in academics but also
              in his extracurricular activities after this course. Thank you,
              BuzyBrain.
            </p>
          </div>
          <div className="sbdes">
            <p>Rupees Govekar</p>
            <p>Businessman</p>
          </div>
        </div>

        <div className="subbox">
          <div className="sbcon">
            <p>
              My child completed the course successfully at BuzyBrain Intellect.
              Their creative training for empowering children has proven to be
              true! My child has improved a lot not only in academics but also
              in his extracurricular activities after this course. Thank you,
              BuzyBrain.
            </p>
          </div>
          <div className="sbdes">
            <p>Kanchan Swami</p>
            <p>Student</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
