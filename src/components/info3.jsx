import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Info3() {
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
      transition={{ duration: 1.5 }}
      className="maindivv"
    >
      <div className="subdiv1">
        <h1>For Franchise</h1>

        <p>
          At BuzyBrain Intellect Private Limited, our mission is to instigate a
          profound positive change in the social and economic fabric of urban as
          well as rural society. We are dedicated to providing quality Human
          Transformational Techniques to every individual, unlocking their
          potential and contributing to the holistic development of communities.
          With a vision for positive transformation, BuzyBrain stands as a
          beacon of empowerment, committed to shaping a brighter and more
          prosperous future for all. Join us on this journey of impact, growth,
          and meaningful change. BuzyBrain - Transforming Lives, Uplifting
          Communities. BuzyBrain Intellect Private Limited welcomes visionary
          and passionate individuals to embark on a rewarding business
          opportunity through our franchise model. As a franchise partner, you
          not only become a part of our mission for social impact but also open
          doors to substantial earnings, heightened popularity, and unparalleled
          satisfaction .
        </p>

        <h4>
          We present you not just a business opportunity but a pathway to high
          returns and flexible working that aligns with your dreams. Welcome to
          a world where you can be a business owner, control your future, and
          work from the comfort of your chosen location.
        </h4>
      </div>
      <div className="subdiv2">
        <img src="src\components\i4.png" className="i2" alt="info" />
      </div>
    </motion.div>
  );
}
