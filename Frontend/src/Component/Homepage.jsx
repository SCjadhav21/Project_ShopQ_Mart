import React from 'react'
import "./Homepage.css";
import {Box, Button, Link,Input,Image, Text} from "@chakra-ui/react"
import Logo from './Logo.jpeg'
import { Icon, createIcon,BellIcon,WarningIcon } from '@chakra-ui/icons'

const Homepage = () => {
  return (
    <Box>
        <Box display={'flex'} mt="1%" w={'100%'}>
            <Box w={'25%'}><Image src={Logo} w={'150px'}/></Box>
            <Box display={'flex'} border={'1px solid grey'} borderRadius={'10px'} w={'50%'} h={'40'} >
                <Input ml={'3%'}  w={'80%'} style={{border:'red',paddingLeft:'25px'}} placeholder='What is on your mind today?'/>
                <Button w={'17%'} style={{border:'none',background:'transparent',backgroundColor:'rgb(255,103,93)',borderRadius:'0px 9px 9px 0px'}}>Search</Button>
            </Box>
            <Box display={'flex'}>
                <Link display={'flex'} href='' ml={'20px'} textDecoration={'none'} color={'teal'}>
                <Text mt={'12px'} fontSize={'13px'}>Location</Text>
                <Image w={'40%'} h={'30%'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaR-Pzqjuoro9Sg7bw-y7D7ldTWMAd304Ij1sk03YWrNvA5Y2Puo8h7jgk4BrIODMjJ0&usqp=CAU"/>
                </Link>
                <Link>
                <BellIcon color={'teal'} w={'50px'}/>
                </Link>
            </Box>
        </Box>
      <Box className='navbarpanel'>
     <Box id='navbar' >
        <Link href=''   className="navbutton">Time sales</Link>
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
    </Box>
  )
}

export default Homepage