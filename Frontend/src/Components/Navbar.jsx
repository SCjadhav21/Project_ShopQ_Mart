import React, { useState } from 'react'
import "./Homepage.css";
import {Box, Button, Link,Input,Image, Text} from "@chakra-ui/react"
import ShopQ from '../Resources/ShopQ.jpeg'
import { Icon, createIcon,BellIcon,WarningIcon } from '@chakra-ui/icons'
import Navlist from "./Trial/Navlist"
import { useEffect } from 'react';
import axios from 'axios';
// import Product from './Product/Product';
// import UncontrolledExample from './Banner/Banner';
// import {images} from "./components/_data"
// import {Gallery} from "./components/Gallery"
// import Product from './Product/Product';
// import Ads from './Advertisement/Ads';

const Navbar = () => {
  const [userData, setUserData] = useState([]);
  const [data,setData]=useState("")



  // const getuserdata = () => {
  //   axios(`http://localhost:4500/users/`, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })
  //     .then((res) => setUserData(res.data.data))
  //     .catch((err) => console.error(err));
  // };


  
      
  
   
  const handleLogin =()=>{
     
    let token=localStorage.getItem('token')
       token?setData("Logout"):setData("Sign In")
    }
    
    const handleLogout=()=>{
    localStorage.removeItem('token')
    handleLogin()
  }
    useEffect(()=>{

      handleLogin()

    },[])
  

    return (
    <Box backgroundColor={'rgb(239,247,250)'}>
        <Box display={'flex'} mt="1%" w={'100%'} mb="1%">
            <Box w={'25%'}><Image src={ShopQ} w={'180px'} ml="50px" /></Box>
            <Box display={'flex'} border={'1px solid grey'} borderRadius={'10px'} w={'48%'}  mt={"13px"}>
                <Input  w={'85%'} style={{border:'red',paddingLeft:'25px'}} placeholder='What is on your mind today?'/>
                <Button w={'15%'} style={{border:'none',background:'linear-gradient(90deg, rgba(255,142,77,1) 6%, rgba(255,100,95,1) 61%)',borderRadius:'0px 9px 9px 0px',color:'white'}}>Search</Button>
            </Box>
            <Box display={'flex'} w="20%"  margin="auto">
                <Link display={'flex'} href='' ml={'20px'} textDecoration={'none'} color={'teal'}>
                <Text mt={'12px'} fontSize={'13px'} fontWeight={"500"}>Location</Text>
                <Image w={'35px'} h={'30px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaR-Pzqjuoro9Sg7bw-y7D7ldTWMAd304Ij1sk03YWrNvA5Y2Puo8h7jgk4BrIODMjJ0&usqp=CAU"/>
                </Link>
                <Link>
                <Button border={'none'} backgroundColor='transparent' ><BellIcon color={'teal'} w={'40px'} h={'25px'}/></Button>
                </Link>
                <Link>
                <Button border={'none'} backgroundColor={'transparent'}>
                  <Image  w={'22px'} h={'20px'}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWILI-X5CIcJt1_73TP-c7j2bVHrMq94GDTh0DyAvYpGhkeNcD2WKPuGJdiZHc0iVmUE&usqp=CAU'/>
                </Button>
                </Link>
                <Link>
                <Button border={'none'} backgroundColor={'transparent'} fontWeight={"500"}>{data}</Button>
                </Link>
            </Box>
        </Box>
        <Navlist/>
      <Box className='navbarpanel'>
     
        <Box id='navbar' >
            <Link href='' className="navbutton">Time sales</Link>
            <Link href='' className="navbutton">Flue Care</Link>
            <Link href='' className="navbutton">Food & Beverage</Link>
            <Link href='' className="navbutton">Personal Hygiene</Link>
            <Link href='' className="navbutton">Home Cleaning</Link>
            <Link href='' className="navbutton">Nutrition & Suplements</Link>
            <Link href='' className="navbutton">Kitchen & Dining</Link>
            <Link href='' className="navbutton"> Refurbished Mobiles</Link>
            <Link href='' className="navbutton"> Mobile Accessories</Link>
        </Box>
        </Box>
        {/* <Product/> */}
        {/* <Box w={"50%"} maxW="3xl" mx="auto" px={{ base: "4", md: "8", lg: "12" }} py={{ base: "6", md: "8", lg: "12" }}>
          <Gallery images={images}/>
        </Box> */}

        {/* <UncontrolledExample/> */}
       {/* <Ads/>
       <Product/> */}
    </Box>
  )
}

export default Navbar