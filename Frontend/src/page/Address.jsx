import React from 'react';
import logo from '../Resources/ShopQ.jpeg'
import {
    Box,
    Button,
    Image,
    Input,
    Text,  
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Center,
  } from "@chakra-ui/react";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Radio,RadioGroup } from '@chakra-ui/react'
// import { getData } from '../Cart_REDUX/action';

const getData=({token})=>{
//  return axios.get("http://localhost:4500/users/personalDetail", { headers: {"Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2NiZjRiZjdhZDM5MzFkZTMwZjJhNWEiLCJpYXQiOjE2NzQzNzgzMDB9.3lq8j8abAD4woWDBCU_T1Vk0A7Eq0j9nbwaVSSogIws" }} )
return axios('http://localhost:4500/users/personalDetail', {
  method: "GET",
  headers: {
    "content-type": "application/json",
    Authorization: token,
  },
})
}

  
const Address = () => {
const [value, setValue]=useState("1")
  const [ data, setData]=useState()
  let token=localStorage.getItem('token')
useEffect(()=>{
  getData({token}).then((res)=>{
  setData(res.data.data)
  }).catch((err)=>{
    console.log(err)
  })
})
    
   
// console.log(data);
  

        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
      
        
      
    
    
  return (<>
    <Box h={'auto'} bg={'#eff7fa'}>     
    <Box display={'flex'} justifyContent={'space-between'} height={'80px'} bg={'#ffffff'}>
    <Image ml={'100px'} mt={'7px'} h={'70px'} w={'250px'} src={logo}></Image>
    <Box mt={'27px'} mr={'50px'} w={'550px'} fontFamily={'Roboto, Arial, Helvetica, sans-serif'} fontSize={'17px'} justifyContent={'space-around'} display={'flex'}  >
        <Text display={'flex'}><Text mt={'-5px'} borderRadius={'50%'} w={'34px'} h={'34px'} p={'3px'} border={'3px solid #41afbf'} textAlign={'center'} color={'#41afbf'} mr={'5px'}>1</Text>Select Address</Text>
        <Text display={'flex'} color={'#c5c3c3'}><Text mt={'-5px'} borderRadius={'50%'} w={'34px'} h={'34px'} p={'3px'} border={'3px solid'} textAlign={'center'}  mr={'5px'}>2</Text>Review Cart</Text>
        <Text display={'flex'} color={'#c5c3c3'}><Text mt={'-5px'} borderRadius={'50%'} w={'34px'} h={'34px'} p={'3px'} border={'3px solid'} textAlign={'center'}  mr={'5px'}>3</Text>Select Payment</Text>
    </Box>
    </Box>
    {/* Navbar Part */}
    {/* Address PAge */}
    <Box  height={"auto"}  w={"90%"} margin={'auto'} mt={"30px"} bg={'#ffffff'}>
        <Box display={'flex'} justifyContent={'space-between'}>
        <Text textAlign={'left'} lineHeight={'50px'} borderBottom={'0.5px solid lightgray'} ml={'30px'} pt={"20px"} color={'#363636'} fontWeight={'bold'} fontSize={"17px"} fontFamily={'Roboto, Arial, Helvetica, sans-serif;'}> 1 Address to choose from</Text>
        <Button ref={btnRef} m={'auto 0px'} bg={'#ffffff'} color='teal' onClick={onOpen}>
              New Address
            </Button>
            <Drawer
            size={'md'}
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Add New Address</DrawerHeader>
      
                <DrawerBody>
                  <Input placeholder='Pincode' />
                </DrawerBody>
                
                 <DrawerBody>
                  <Input placeholder='City' />
                </DrawerBody>
                
                 <DrawerBody>
                  <Input placeholder='State' />
                </DrawerBody>
                
                 <DrawerBody>
                  <Input placeholder='Name' />
                </DrawerBody>
                
                 <DrawerBody>
                  <Input placeholder='Phone Number' />
                </DrawerBody>
                
                 <DrawerBody>
                  <Input placeholder='House/Plot No' />
                </DrawerBody>
                
                 <DrawerBody>
                  <Input placeholder='Street/Locality/Area/Landmark' />
                </DrawerBody>
                
                 <DrawerBody>
                  <Input placeholder='GSTIN' />
                </DrawerBody>
      
                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
        </Box>
      {/* <Box border={'5px solid blue'}   width={'260px'} p={3} h={'auto'}>
       
        <Text m={"20px 0px 10px 15px"} fontWeight={'bold'} fontSize={"19px"}>Payment Option</Text>
        <RadioGroup onChange={setValue} value={value}>
     <Flex>  
       <Radio size='lg' mr={5} colorScheme='orange' value="2" onClick={()=>setValue("2")} >
        </Radio> <Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} fontWeight={value=="2"?"bold":""} fontSize={"16px"}>Online Wallet</Text></Flex>  
        <Flex>  
       <Radio size='lg' mr={5} colorScheme='orange' value="3" onClick={()=>setValue("3")} >
        </Radio> <Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} fontWeight={value=="3"?"bold":""} fontSize={"16px"}>Debit Card</Text></Flex>
        <Flex>  
       <Radio size='lg' mr={5} colorScheme='orange' value="4" onClick={()=>setValue("4")} >
        </Radio> <Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} fontWeight={value=="4"?"bold":""} fontSize={"16px"}>Credit Card</Text></Flex>    
     <Flex><Radio size='lg' mr={5}value="5" onClick={()=>setValue("5")} colorScheme='orange'>
        </Radio><Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} fontWeight={value=="5"?"bold":""} >Cash On Delivery</Text></Flex> 
        </RadioGroup>
   

       
      </Box > */}
      <Box border={'1px solid #eb7f00'}  ml={10} width={'260px'}  h={'auto'}>
        <Flex justifyContent={'space-between'}>
        <Text m={"20px 0px 10px 15px"} fontWeight={'bold'} fontSize={"19px"}>HOME</Text>
        <Radio size='lg' mr={5} colorScheme='orange'>
        </Radio>
        </Flex>
        
   <Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} fontWeight={'bold'} fontSize={"16px"}>{data && data.name}</Text>
   <Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} >Mobile : {data && data.mobile}</Text>
   <Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} >Email  : {data && data.email}</Text>
   <Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} >Pincode  : {data && data.address.pincode}</Text>
   <Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} >City  : {data && data.address.city}</Text>
   <Text m={"5px 0px 0px 15px"} pb={6} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} >State  : {data && data.address.state}</Text>
       
      </Box>

      <Center>
      <Button color="#fff" bgGradient="linear(0deg,#ff934b 0%,#ff5e62 100%)" size="lg" fontSize="md" _hover={{"color":"#24a3b2", "bg":"#c0feff"}}>
      Proceed to Payment
    </Button>
      </Center>
      
    </Box>
    </Box>
    <Flex justifyContent={'flex-end'} mt={-30} mr={20}>
    <Box border={'5px solid teal'}  width={'260px'} p={3} h={'auto'}>
       
    <Text m={"20px 0px 10px 15px"} fontWeight={'bold'} fontSize={"19px"}>Payment Option</Text>
    <RadioGroup onChange={setValue} value={value}>
 <Flex>  
   <Radio size='lg' mr={5} colorScheme='orange' value="2" onClick={()=>setValue("2")} >
    </Radio> <Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} fontWeight={value=="2"?"bold":""} fontSize={"16px"}>Online Wallet</Text></Flex>  
    <Flex>  
   <Radio size='lg' mr={5} colorScheme='orange' value="3" onClick={()=>setValue("3")} >
    </Radio> <Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} fontWeight={value=="3"?"bold":""} fontSize={"16px"}>Debit Card</Text></Flex>
    <Flex>  
   <Radio size='lg' mr={5} colorScheme='orange' value="4" onClick={()=>setValue("4")} >
    </Radio> <Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} fontWeight={value=="4"?"bold":""} fontSize={"16px"}>Credit Card</Text></Flex>    
 <Flex><Radio size='lg' mr={5}value="5" onClick={()=>setValue("5")} colorScheme='orange'>
    </Radio><Text m={"5px 0px 0px 15px"} fontStyle={"Roboto, Arial, Helvetica, sans-serif"} fontWeight={value=="5"?"bold":""} >Cash On Delivery</Text></Flex> 
    </RadioGroup>
  </Box >
  </Flex>
  </>)
}

export default Address




