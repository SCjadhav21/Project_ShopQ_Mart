import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import FiltterRefri from "./FiltterRefri";
import Refrigerator from "./Refrigerator";

const CombinePageRafrigetor = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <FiltterRefri />
        <Refrigerator />
      </div>
      <Footer />
    </>
  );
};

export default CombinePageRafrigetor;
