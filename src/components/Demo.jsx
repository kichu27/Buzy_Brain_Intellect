import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "/styles/wh.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Workshopcomponent(props) {
  const titleRef = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const imgRef = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const theoryRef = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const keypointsRef = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const benefitsRef = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const outroRef = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adjust as needed
      },
    },
  };

  return (
    <div className="dm">
      <Header />
      <div className="dm1">
        <motion.div
          className="title"
          ref={titleRef.ref}
          initial="hidden"
          animate={titleRef.inView ? "visible" : "hidden"}
          variants={animationVariants}
        >
          <h1> {props.title} </h1>
        </motion.div>
        <motion.div
          className="imgbg"
          ref={imgRef.ref}
          initial="hidden"
          animate={imgRef.inView ? "visible" : "hidden"}
          variants={animationVariants}
        >
          <img src={`src/components/images/${props.i}`} className="img" />
        </motion.div>
        <motion.div
          className="theory"
          ref={theoryRef.ref}
          initial="hidden"
          animate={theoryRef.inView ? "visible" : "hidden"}
          variants={staggerVariants}
        >
          <motion.div variants={animationVariants} className="theory1">
            <p>{props.para1}</p>
          </motion.div>
          <motion.div variants={animationVariants} className="theory1">
            <p>{props.para2}</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="keypoints"
          ref={keypointsRef.ref}
          initial="hidden"
          animate={keypointsRef.inView ? "visible" : "hidden"}
          variants={staggerVariants}
        >
          <div className="kptitle">
            <h1> KEY TENETS OF {props.title}</h1>
          </div>
          <motion.div className="kppoints">
            {props.data.map((data) => (
              <motion.div
                className="outp"
                key={data.title}
                variants={animationVariants}
              >
                <div className="imgp">
                  <img
                    src={`src/components/images/${props.i}`}
                    className="keyimg"
                    alt={data.title}
                  />
                </div>
                <div className="textp">
                  <div className="textp1">
                    <p>{data.title}</p>
                  </div>
                  <div className="textp2">
                    <p>{data.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {props.benefits && (
          <motion.div
            className="keypoints"
            ref={benefitsRef.ref}
            initial="hidden"
            animate={benefitsRef.inView ? "visible" : "hidden"}
            variants={staggerVariants}
          >
            <div className="kptitle">
              <h1>BENEFITS OF {props.title}</h1>
            </div>
            <motion.div className="kppoints">
              {props.benefits.map((data) => (
                <motion.div
                  className="outp"
                  key={data.title}
                  variants={animationVariants}
                >
                  <div className="imgp">
                    <img
                      src={`src/components/images/${props.i}`}
                      className="keyimg"
                      alt={data.title}
                    />
                  </div>
                  <div className="textp">
                    <div className="textp1">
                      <p>{data.title}</p>
                    </div>
                    <div className="textp2">
                      <p>{data.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        <motion.div
          className="outro"
          ref={outroRef.ref}
          initial="hidden"
          animate={outroRef.inView ? "visible" : "hidden"}
          variants={animationVariants}
        >
          <p>{props.outro}</p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
