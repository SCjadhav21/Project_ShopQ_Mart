import React from 'react'
import {
    
    Routes,
    Route,
  } from "react-router-dom";

import SingleProduct from '../components/SingleProduct';
import CombinePageRafrigetor from '../Refrigerator/CombinePageRafrigetor';
import SinglePageRator from '../Refrigerator/SinglePageRator';

import SinglePageLaptop from '../Laptop/SinglePageLaptop';
import CombineLap from '../Laptop/CombineLap';
import SinglepageMachine from '../WashingMachine/SinglepageMachine';
import CombineMachine from '../WashingMachine/CombineMachine';
import Homepage from '../../Components/Homepage';
import TVmain from '../components/TV';
import Login from '../../Authentication/login';
import Signup from '../../Authentication/signup';
import AdminPage from '../../Authentication/AdminPage';



const AllRouter = () => {
  
  return (
    <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/adminpage" element={<AdminPage/>} />
            <Route path="/tv" element={<TVmain/>} />
            <Route path="/tv/:id" element={<SingleProduct/>} />


            <Route path="/refrigerator" element={<CombinePageRafrigetor/>} />
            <Route path="/refrigerator/refrigerator/:id" element={<SinglePageRator/>} />


            <Route path="/laptop" element={<CombineLap/>} />
            <Route path="/laptop/laptop/:id" element={<SinglePageLaptop/>} />

            
            <Route path="/washing" element={<CombineMachine/>} />
            <Route path="/washing/washing/:id" element= 
             {<SinglepageMachine/>} />



    </Routes>
  )
}

export default AllRouter
