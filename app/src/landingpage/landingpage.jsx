import React from "react";
import Navbar from "../components/navbar/navbar";
import Header from "./header/header";
// import Body from "./body/body";
import Footer from "../components/footer/footer";

import "../App.css"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      {/* <Body /> */}
      <Footer/>
    </>
  );
};

export default LandingPage;
