import React from 'react'
import {
    
    Routes,
    Route,
  } from "react-router-dom";
import Shirt from '../components/TV';
import SingleProduct from '../components/SingleProduct';
import CombinePageRafrigetor from '../Refrigerator/CombinePageRafrigetor';
import SinglePageRator from '../Refrigerator/SinglePageRator';

import SinglePageLaptop from '../Laptop/SinglePageLaptop';
import CombineLap from '../Laptop/CombineLap';
import CombineWashing from '../WashingMachine/CombineWashing';
import SingleWashingmachine from '../WashingMachine/SingleWashingmachine';


const AllRouter = () => {
  return (
    <Routes>
            <Route path="/" element={<Shirt/>} />
            <Route path="/:id" element={<SingleProduct/>} />


            <Route path="/refrigerator" element={<CombinePageRafrigetor/>} />
            <Route path="/refrigerator/refrigerator/:id" element={<SinglePageRator/>} />


            <Route path="/laptop" element={<CombineLap/>} />
            <Route path="/laptop/laptop/:id" element={<SinglePageLaptop/>} />

            
            <Route path="/washing" element={<CombineWashing/>} />
            <Route path="/washing/washing/:id" element= 
             {<SingleWashingmachine/>} />



    </Routes>
  )
}

export default AllRouter
