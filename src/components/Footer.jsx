import React from "react";
import "/styles/Footer.css"; // Import your footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <span className="logo_name">BuzyBrain Intellect</span>
          </div>
        </div>
        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Company</li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">Services</li>
            <li>
              <a href="/nlp">Neuro Linguistic Programming (NLP)</a>
            </li>
            <li>
              <a href="/memory-techniques">Memory Techniques</a>
            </li>
            <li>
              <a href="/personality-development">Personality Development</a>
            </li>
            <li>
              <a href="/workshops">Workshops</a>
            </li>
          </ul>

          <ul className="box">
            <li className="link_name">Courses</li>
            <li>
              <a href="/dbit">Dynamic Brain Integration Technique (DBIT)</a>
            </li>
            <li>
              <a href="/mid-brain-activation">Mid Brain Activation</a>
            </li>
            <li>
              <a href="/counseling">Counseling</a>
            </li>
            <li>
              <a href="/kmeb">Knowledge Mastery Enhancement Program (KMEP)</a>
            </li>
            <li>
              <a href="/ycep">Youth Career Enhancement Program (YCEP)</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2023
            <a href="/">BuzyBrain Intellect</a> All rights reserved{" "}
          </span>
          <span className="policy_terms">
            <a href="/">Privacy policy</a>
            <a href="/">Terms & conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
