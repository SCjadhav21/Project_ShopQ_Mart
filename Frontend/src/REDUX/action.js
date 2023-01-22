import {
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_ERROR} from "./actionTypes";
  
 import axios from "axios";






 const getcartRequest=()=>{
    return {
          type:GET_CART_REQUEST
    }
 }   

 
 const getcartSuccess=(payload)=>{
    // console.log("action",payload)
    return {
          type:GET_CART_SUCCESS,
          payload
    }
 }   

 
 const getcartError=()=>{
    return {
         type:GET_CART_ERROR
    }
 } 
 
 const getData=()=>(dispatch)=>{
    dispatch(getcartRequest())
    return axios.get('http://localhost:4500/cart', { headers: {"Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2NiOWNjNTVmZjQ4NzQ0ZWZmMzdjMzAiLCJpYXQiOjE2NzQyODgzNjZ9.AyPui0HUid4sDEoUyZ_qfNzPVxd-5QQc_Cpd4ZHptZQ" }} )
   
      
      dispatch(getcartSuccess())
  
     
    .catch((err)=>{
      dispatch(getcartError())
      console.log(err);})
   }
//      const getData=()=>(dispatch)=>{
//               dispatch(getcartRequest())
//                     return axios.get("http://localhost:4500/cart",{ headers: {"Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2NiOWNjNTVmZjQ4NzQ0ZWZmMzdjMzAiLCJpYXQiOjE2NzQyODgzNjZ9.AyPui0HUid4sDEoUyZ_qfNzPVxd-5QQc_Cpd4ZHptZQ" }}  ).then((res)=>{
//                              console.log(res.data)
//                     dispatch(getcartSuccess(res.data))
                    
//                 //    console.log("res",res )
//      }).catch((err)=>dispatch(getcartError()))
//  }
 

 export {getData,getcartSuccess,getcartError,getcartRequest}




 