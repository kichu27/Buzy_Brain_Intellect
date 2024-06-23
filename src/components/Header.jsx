import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles/headerstyles.css";

export default function Header() {
  const [hoverState, setHoverState] = useState({
    services: false,
    courses: false,
    workshop: false,
  });

  const handleMouseEnter = (moduleName) => {
    setHoverState((prevState) => ({
      ...prevState,
      [moduleName]: true,
    }));
  };

  const handleMouseLeave = (moduleName) => {
    setHoverState((prevState) => ({
      ...prevState,
      [moduleName]: false,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="maindiv"
    >
      <div className="subdiv1">
        <img src="src\components\logo.png" alt="logo" className="logo" />
      </div>
      <div className="subdiv2">
        <div className="modulediv">
          <Link to="/">
            <p> Home </p>
          </Link>
          <div className="line"></div>
        </div>

        <div className="modulediv">
          <Link to="/About">
            <p> About </p>
          </Link>
          <div className="line"></div>

        </div>

        <div
          className="modulediv"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={() => handleMouseLeave("services")}
        >
          <p> Services </p>
          <div className="line"></div>

          {hoverState.services && (
            <div className="servicebox">
              <Link to="/dbit">
                <p>DBIT</p>
              </Link>
              <Link to="/nlp">
                <p>NLP</p>
              </Link>
              <Link to="/counseling">
                <p>Counseling</p>
              </Link>
              <Link to="/midbrain">
                <p>Mid Brain</p>
              </Link>
              <Link to="/personality-development">
                <p>Personality Development</p>
              </Link>
              <Link to="/memory-techniques">
                <p>Memory Techniques</p>
              </Link>
            </div>
          )}
        </div>

        <div
          className="modulediv"
          onMouseEnter={() => handleMouseEnter("courses")}
          onMouseLeave={() => handleMouseLeave("courses")}
        >
          <p> Courses </p>
          <div className="line"></div>

          {hoverState.courses && (
            <div className="coursebox">
              <Link to="/Step">
                {" "}
                <p>STEM</p>{" "}
              </Link>
              <Link to="/Kmep">
                {" "}
                <p>KMEP</p>{" "}
              </Link>
              <Link to="/Ycep">
                {" "}
                <p>YCEP</p>{" "}
              </Link>
            </div>
          )}
        </div>

        <div
          className="modulediv"
          onMouseEnter={() => handleMouseEnter("workshop")}
          onMouseLeave={() => handleMouseLeave("workshop")}
        >
          <p>Workshops </p>
          <div className="line"></div>

          {hoverState.workshop && (
            <div className="workbox">
              <Link to="/joyofparenting">
                {" "}
                <p>Joy of Parenting</p>{" "}
              </Link>
              <Link to="/Subconscious">
                {" "}
                <p>Subconscious Mind Power Program</p>{" "}
              </Link>
              <Link to="/Teachers">
                {" "}
                <p>Teachers Illuminating Program</p>{" "}
              </Link>
            </div>
          )}
        </div>

        <div className="modulediv">
          <Link to="/franchise">
            <p>Franchise</p>
          </Link>
          <div className="line"></div>

        </div>

        <div className="modulediv">
          <Link to="/contact">
            <p>Contact</p>
          </Link>
          <div className="line"></div>

        </div>
      </div>
    </motion.div>
  );
}
