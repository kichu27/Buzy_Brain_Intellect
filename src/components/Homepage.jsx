import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Info from "./Info";
import Info1 from "./info1";
import Info3 from "./info3";
import ValClient from "./ValClient";
import Testomonials from "./Testomonials";
import Sub2 from "./Sub2";

import "./styles/headerstyles.css";
import "./styles/infostyles.css";


export default function Homepage() {
  return (
    <div className="maindiv2">
      <Header />
      <Sub2 />
      <Info />
      <Info1 />
      <Info3 />
      <Testomonials />
      <ValClient />
      <Footer />
    </div>
  );
}
