import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Info3() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
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
        <h1>Welcome To Buzy Brain Intellect Franchise</h1>
        <h3>Opportunity for High Returns and Flexible Working</h3>

        <p>
        Welcome to BuzyBrain Intellect with the opportunity to get benefited
  through high returns with ease of flexible working and most
  importantly working from the place of your choice. We have envisioned
  that aspirant entrepreneurs can control their future by fulfilling
  their dream of becoming the Business owners. Our insightful team would
  always be available to guide you about massive earning income and
  business source by keeping student’s future in mind. It will be a
  perfect choice for opting DBIT franchise, in order to generate high
  returns with relatively low investment compared to other franchises.
  It also offers Student Empowerment Courses at an affordable price
  across India. Training in creativity-related skills is the next era of
  opportunity in education. So, this could be your chance to get ahead
  in the growing demand of Children’s Mind Empowerment which is emerging
  as the biggest ever ‘Stress-Relief Program.’
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
