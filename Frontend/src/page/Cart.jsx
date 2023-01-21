import React from 'react';
import FullyCart from '../Components/Cart/FullyCart'
import EmptyCart from '../Components/Cart/EmptyCart';
import {
    Box,
    Image,
    Text  
  } from "@chakra-ui/react";
  import logo from '../Resources/ShopQ.jpeg'
  import axios from 'axios';
  import cart from '../Resources/empty.gif'
  import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getcartSuccess,getcartError,getcartRequest} from "../Cart_REDUX/action"
// import {getData} from '../Cart_REDUX/action'

  const getData=()=>{
   return axios.get('http://localhost:4500/cart', { headers: {"Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2NiOWNjNTVmZjQ4NzQ0ZWZmMzdjMzAiLCJpYXQiOjE2NzQyODgzNjZ9.AyPui0HUid4sDEoUyZ_qfNzPVxd-5QQc_Cpd4ZHptZQ" }} )
  

  }

const Cart = () => {
  const [data, setData]= useState(0)
 const cart=useSelector(store=>store.cart.data)

console.log(cart)

const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getcartRequest())
      getData().then((el)=>{
        setData(el.data)
        dispatch(getcartSuccess(el))
    
       
      }).catch((err)=>{
        dispatch(getcartError())
        console.log(err);})
    },[])

   
  return (
    <Box h={'650px'} bg={'#eff7fa'}>
        <Box height={'80px'} bg={'#ffffff'}>
        <Image ml={'100px'} mt={'7px'} h={'70px'} w={'250px'} src={logo}></Image>
        </Box>
      
        <Box  height={"auto"}  w={"90%"} margin={'auto'} mt={"30px"} bg={'#ffffff'}>
        <Text textAlign={'left'} lineHeight={'50px'} borderBottom={'0.5px solid lightgray'} ml={'30px'} pt={"20px"} color={'#363636'} fontWeight={'bold'} fontSize={"24px"} fontFamily={'Roboto, Arial, Helvetica, sans-serif;'}> My Cart</Text>
       
        {/* <Box>
            <Image  pt={'60px'} margin={'auto'} src={cart}></Image>
            <Text borderBottom={'0.5px solid lightgray'} color={'#939393'} textAlign={'center'} fontSize={'16px'} pb={'15px'} pt={'10px'}>You don't have any Product in your Cart.</Text>
        </Box> */}
         {/* dummyDa🌮  */}
      {/* <Box>
        <Text p={'20px'} textAlign={'center'} borderBottom={'0.5px solid lightgray'} fontSize={'15px'} color={'#777777'}>Congrats! You are eligible for Extra 10 Per Off on Prepaid orders with minimum cart value of Rs 299 and Maximum discount of Rs 100. Use coupon code RUPAY10. Limit one coupon at a time..</Text>
      </Box> */}
      {data?.length>0? <FullyCart/> : <EmptyCart />}

      




        </Box>
      



        
       
        
        
        </Box>
  )
}

export default Cart