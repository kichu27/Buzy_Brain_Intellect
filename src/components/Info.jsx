import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Info() {
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
      transition={{ duration: 1.5 }}
      className="maindivv"
    >
      <div className="subdiv1">
        <h1> Welcome to Buzybrain Intellect</h1>
        <p>
          Welcome to Buzybrain Intellect Private Limited – where transformation
          begins and potentials flourish! We are dedicated to ushering in a
          positive change in the lives of individuals, offering unparalleled
          opportunities for growth and learning across various domains. At
          Buzybrain Intellect, we believe in unlocking the full spectrum of
          human potential, encompassing mental, emotional, physical, spiritual,
          and financial dimensions. Our commitment to Excellence with Innovation
          sets us apart as we strive for superior outcomes through high-level
          instructions. <br />
          <br /> We are not just an organization , we are your partners in
          development, guiding you to harness your strengths and move forward
          with confidence. Our programs are meticulously designed to explore and
          enhance your cognitive abilities, providing you with the tools to
          navigate life's challenges with resilience and agility.
        </p>
      </div>

      <div className="subdiv2">
        <img src="src\components\i1.png" className="i2" alt="info" />
      </div>
    </motion.div>
  );
}
