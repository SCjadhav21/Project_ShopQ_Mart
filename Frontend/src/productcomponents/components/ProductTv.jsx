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
 
 

  useEffect(()=>{
     if(location||shirt.length===0){
      const sort=searchParams.get("sort")
      let  company=searchParams.getAll("brand")
     
      
    
      const getTVparams={
         
         

            params:{
             
              discount:searchParams.getAll("discount"),
              brand:company[company.length-1],
            
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

         <div onClick={()=>navigate(`/${elem._id}`)} >
         <img src={elem.image}  alt="shirt" width="100%" />
       
         </div>
          
         <h1 className='productname'>{elem.product_name} </h1>
         <h1 className='productname'>{elem.brand}</h1>
         <h1  className='productname'>MRP:{elem.mrp} </h1>
         <h1 className='ratingcsss'>Discount:{elem.discount} </h1>
         <h1   className='productname'>Price:{elem.price} </h1>
         <h1 className='ratingcsss'>{"Rating :"}{elem.rating}</h1>
        
         
        

         </div>
      ))
     }
       
   </div>


  );
}