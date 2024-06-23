import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "/styles/valclient.css";

export default function ValClient() {
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
      className="maindi"
    >
      <div className="sd1">
        <h2> OUR VALUEABLE CLIENTS </h2>
      </div>

      <div className="sd2">
        <div className="sd">
          {" "}
          <img
            src="src\components\tejas2.jpg"
            className="imgg"
            alt="client"
          />{" "}
        </div>
        <div className="sd">
          {" "}
          <img src="src\components\tejas4.png" className="imgg" alt="client" />
        </div>
        <div className="sd">
          {" "}
          <img src="src\components\tejas3.png" className="imgg" alt="client" />
        </div>
      </div>
    </motion.div>
  );
}
