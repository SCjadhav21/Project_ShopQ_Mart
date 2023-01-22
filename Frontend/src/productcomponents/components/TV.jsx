import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import Filter from "./Filter";
import ProductTv from "./ProductTv";

const TVmain = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div style={{ display: "flex", gap: "5px" }}>
        <Filter />
        <ProductTv />
      </div>
      <Footer />
    </>
  );
};

export default TVmain;
