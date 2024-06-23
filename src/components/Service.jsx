import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles/wh.css";
import "./styles/s.css";

export default function Service(props) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const transition = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const itemTransition = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="dm">
      <Header />
      <motion.div
        className="ms1"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={transition}
      >
        <div className="ms10">
          <h1 id="mt">{props.title}</h1>
          <h4>{props.content}</h4>
          {props.content2 && (
            <div className="ms1">
              <div className="ms10">
                <motion.h6 variants={itemTransition}>
                  {props.content2}
                </motion.h6>
              </div>
            </div>
          )}
        </div>
        <div className="ms11">
          <motion.img
            src={`src/components/images/${props.i}`}
            className="simg"
            variants={itemTransition}
          />
        </div>
      </motion.div>

      <div className="ms2">
        <h1 id="mt">BENEFITS OF {props.title} </h1>

        <div className="ms20">
          {props.data.map((item, index) => (
            <motion.div
              className="ms200"
              key={index}
              variants={itemTransition}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              <div className="ms201">
                <motion.img
                  src={`src/components/images/${props.i}`}
                  className="simg1"
                  alt="Mindbrain"
                  variants={itemTransition}
                />
              </div>
              <div className="ms202">
                <motion.p id="bi" variants={itemTransition}>
                  {item.title}
                </motion.p>
                <motion.p variants={itemTransition}>
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="ms1">
        <div className="ms11">
          <motion.img
            src={`src/components/images/${props.i}`}
            className="simg"
            variants={itemTransition}
          />
        </div>
        <div className="ms10">
          <motion.h4 variants={itemTransition}>{props.outro}</motion.h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}
