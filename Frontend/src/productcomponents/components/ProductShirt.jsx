import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useState } from 'react';
import { getShirt } from '../Redux/action';


export default function ProductShirt() {

  const shirt=useSelector(store=>store.shirt)
  const dispatch=useDispatch()
  console.log(shirt)

  useEffect(()=>{
     if(shirt.length===0){
      dispatch(getShirt())
     }
  },[dispatch,shirt.length])




  return (
   <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",width:"90%",gap:"10px"}}>
     {
      shirt.length>0 && shirt.map((elem)=>(
        <div style={{border:"1px solid green",width:"100%",padding:"10px"}}>
       
        <img src={elem.image}  alt="shirt"/>

        <p>{elem.title}</p>
        <h1>{"$"}{elem.price} </h1>
        <h1 style={{color:"orange"}}>{"★★★★★"}</h1>
        <p>Free Shipping</p>

        </div>
      ))
     }

   </div>
  );
}