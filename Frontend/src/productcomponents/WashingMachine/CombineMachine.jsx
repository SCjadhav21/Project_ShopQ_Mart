import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar";
import FilterMachine from "./FilterMachine";
import WasgingMachine from "./WasgingMachine";

const CombineMachine = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", gap: "5px" }}>
        <FilterMachine />
        <WasgingMachine />
      </div>
      <Footer />
    </>
  );
};

export default CombineMachine;
