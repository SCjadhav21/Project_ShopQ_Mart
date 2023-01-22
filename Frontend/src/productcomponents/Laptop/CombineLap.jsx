import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import FilterLaptop from "./FilterLaptop";
import LaptopProduct from "./LaptopProduct";

const CombineLap = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <FilterLaptop />
        <LaptopProduct />
      </div>
      <Footer />
    </>
  );
};

export default CombineLap;
