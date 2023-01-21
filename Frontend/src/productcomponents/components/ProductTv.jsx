import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"

import { getShirt } from '../Redux/action';

import "./produc.css"
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';



export default function ProductTv() {

  const shirt=useSelector(store=>store.shirt)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()
  const[searchParams]=useSearchParams()
  console.log(shirt)
 

  useEffect(()=>{
     if(location||shirt.length===0){
      const sort=searchParams.get("sort")
      const getTVparams={
            params:{
              discount:searchParams.getAll("discount"),
              sort:sort &&"price",
              order:sort
            }
      }
      dispatch(getShirt(getTVparams))
     }
  },[dispatch,shirt.length,location])

    

  
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