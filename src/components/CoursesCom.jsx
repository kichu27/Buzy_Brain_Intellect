import React from "react";
import { motion } from "framer-motion";

import "/styles/courses.css";
import Header from "./Header";
import Footer from "./Footer";

export default function CoursesCom(props) {
  return (
    <motion.div
      className="dm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />


      <motion.div
        className="cm1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        >
       
       
        <div className="c1">
          <h2> {props.coursename}</h2>
          <motion.div
            className="c2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
           >
            <motion.div
              className="c20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              >
              <p> {props.coursecontent}</p>
            </motion.div>
            <motion.div
              className="c21"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <img
                src={`src/components/images/${props.i}`}
                className="courseimg"
                alt={props.coursename}
              />
            </motion.div>
          </motion.div>
        </div>



        <motion.div
          className="c4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h1 id="h"> AFTER COMPLETION OF COURSE </h1>
          
          <motion.div className="c5">
            {props.data.map((data, index) => (
              <motion.div
                className="outp"
                key={data.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
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


      </motion.div>
      <Footer />
    </motion.div>
  );
}
