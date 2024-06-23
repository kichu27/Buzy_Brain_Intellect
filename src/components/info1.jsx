import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Info1() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when at least 50% of the component is in view
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="maindivv"
    >
      <div className="subdiv2">
        <img src="src\components\ii3.webp" className="i2" alt="info" />
      </div>
      <div className="subdiv1">
        <h1>Why choose BuzyBrain?</h1>
        <h2>We believe Your Satisfaction is Our Success </h2>
        <p>
          At BuzyBrain Intellect Private Limited, we prioritize your child's
          future. Our customer-centric approach ensures your satisfaction,
          driving our success. With a team of certified professionals, we offer
          affordable Comprehensive Human Transformation techniques. From
          Neuro-Linguistic Programming to Brain Potentials through DBIT, we
          nurture your child's potential with care and expertise. Join us in
          shaping a path to success and fulfillment. Your child's growth is our
          mission, and your satisfaction is our success!
        </p>
        <h4>
          Your child's growth is our mission, and your satisfaction is our
          ultimate success!
        </h4>
      </div>
    </motion.div>
  );
}
