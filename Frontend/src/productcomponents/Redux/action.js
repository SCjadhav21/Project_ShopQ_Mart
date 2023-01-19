import {
    GET_SHIRT_REQUEST,
    GET_SHIRT_SUCCESS,
    GET_SHIRT_ERROR} from "./actionType";
  
 import axios from "axios";






 const getShirtRequest=()=>{
    return {
          type:GET_SHIRT_REQUEST
    }
 }   

 
 const getShirtSuccess=(payload)=>{
    return {
          type:GET_SHIRT_SUCCESS,
          payload
    }
 }   

 
 const getShirtError=()=>{
    return {
         type:GET_SHIRT_ERROR
    }
 } 
 
     const getShirt=()=>(dispatch)=>{
              dispatch(getShirtRequest())
                    return axios.get("https://mock-server-app-pzg9.onrender.com/clothing").then((res)=>{
                    dispatch(getShirtSuccess(res))
             console.log(res)
     }).catch((err)=>dispatch(getShirtError()))
 }
 

 export {getShirt}



 