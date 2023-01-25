import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import "./machine.css"

const  getData= (sortdata)=>{
  
  return axios.get(`https://splendid-bear-cap.cyclic.app/products/washingmachine`,sortdata)

}

const WasgingMachine = () => {

  const navigate=useNavigate()

  const[data,setData]=useState([])

  const[searchParams]=useSearchParams()
   const location=useLocation()

 
  const sort=searchParams.get("sort")
  useEffect(()=>{
    let  company=searchParams.getAll("brand")
    const getTVparams={
          params:{
            brand:company[company.length-1],
            discount:searchParams.getAll("discount"),
            sort:sort &&"price",
            order:sort
          }
    }
  
  
    getData(getTVparams).then((res)=>{
      setData(res.data)
     
    })
    
   
       
  },[sort,location,searchParams])



  return (
   
    <div className='ProductCss'>
     {
        data.length>0 && data.map((elem)=>(
         <div key={elem._id} className="onlycartcss">

         <div onClick={()=>navigate(`/washingmachine/${elem._id}`)}>
         <img src={elem.image}  alt="shirt" />
       
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
  )
}

export default WasgingMachine



