import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"

import { getShirt } from '../Redux/action';

import "./produc.css"
import { useNavigate } from 'react-router-dom';



export default function ProductTv() {

  const shirt=useSelector(store=>store.shirt)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  console.log(shirt)

  useEffect(()=>{
     if(shirt.length===0){
      dispatch(getShirt())
     }
  },[dispatch,shirt.length])

    

  
  return (

    
   <div className='ProductCss'>
     {
       shirt.length>0 && shirt.map((elem)=>(
         <div key={elem._id} className="onlycartcss">

         <div onClick={()=>navigate(`/${elem._id}`)}>
         <img src={elem.image}  alt="shirt" width="100%" height="250px"/>
       
         </div>
          
         <h1>{elem.product_name} </h1>
         <h1>{elem.brand}</h1>
         <h1>MRP:{elem.mrp} </h1>
         <h1 className='discountcss'>Discount:{elem.discount} </h1>
         <h1>Price:{elem.price} </h1>
         <h1 className='ratingcsss'>{"Rating :"}{elem.rating}</h1>
        
         
        

         </div>
      ))
     }
       
   </div>


  );
}