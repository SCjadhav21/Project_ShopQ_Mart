import { Box,Button,Center,Image,Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import loading from "../Resources/loading.gif";
import sucess from "../Resources/sucess.gif";
import logo from '../Resources/ShopQ.jpeg'

const Payment = () => {
    const [state, setState]=useState(false)
    setTimeout(()=>{     
        setState(true)
    },6000)
    
  return (
    <Box border={'1px solid red'} h={'700px'} bg={'#eff7fa'}>     
    <Box display={'flex'} justifyContent={'space-between'} height={'80px'} bg={'#ffffff'}>
    <Image ml={'100px'} mt={'7px'} h={'70px'} w={'250px'} src={logo}></Image>
    <Box mt={'27px'} mr={'50px'} w={'550px'} fontFamily={'Roboto, Arial, Helvetica, sans-serif'} fontSize={'17px'} justifyContent={'space-around'} display={'flex'}  >
        <Text display={'flex'} color={'#41afbf'}><Text mt={'-5px'} borderRadius={'50%'} w={'34px'} h={'34px'} p={'3px'} border={'3px solid '} bg={'#41afbf'} textAlign={'center'} color={'#ffffff'} mr={'5px'}>1</Text>Select Address</Text>
        <Text display={'flex'} color={'#41afbf'}><Text mt={'-5px'} borderRadius={'50%'} w={'34px'} h={'34px'} p={'3px'} border={'3px solid'} bg={'#41afbf'} textAlign={'center'} color={'#ffffff'} mr={'5px'}>2</Text>Review Cart</Text>
        <Text display={'flex'} ><Text mt={'-5px'} borderRadius={'50%'} w={'34px'} h={'34px'} p={'3px'} border={'3px solid #41afbf'} textAlign={'center'} color={'#41afbf'}  mr={'5px'}>3</Text>Select Payment</Text>
    </Box>
    </Box>
    <Box  height={"auto"}  w={"90%"} margin={'auto'} mt={"30px"} pb={10} bg={'#ffffff'}>
        <Center p="40px">
        {state?<><Image p={10} h={400} borderRadius={'60%'} border={'4px solid #41afbf'} w={450}  src={sucess}  /><Text color={"green"}
        fontFamily={"sans-serif"} ml="10px" fontSize={'18px'}>Congratulations .. Your order has been sucessfully Placed..</Text></>:<><Image p={10} h={400} w={700} src={loading}/><Text color={"red"} fontWeight="bold" fontSize={'20px'} >Please Wait... We are continously checking for Order</Text></>}
        </Center>
        <Center>
        <Button color="#fff" bgGradient="linear(0deg,#ff934b 0%,#ff5e62 100%)" size="lg" fontSize="md" _hover={{"color":"#24a3b2", "bg":"#c0feff"}}>
      Explore More..
    </Button>
        </Center>
      <Center>
      <Text fontSize={'18px'} >Please Rate your Experience</Text>
     
      </Center>
      <Center>
      <Text fontSize={'18px'} >To Shop More Please Go to Homepage</Text>
      </Center>
    </Box>
    </Box>
    // <div>
    //    { state?<div><img src={loading}/></div>:<div><img src={sucess}/></div>}
    // </div>
  )
}

export default Payment