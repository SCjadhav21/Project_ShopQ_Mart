import React from 'react';
import logo from '../Resources/ShopQ.jpeg'
import {
    Box,
    Button,
    Image,
    Input,
    Text,  
    useDisclosure
  } from "@chakra-ui/react";
  import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

  
const Address = () => {

    
   

  

        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
      
        
      
    
    
  return (
    <Box border={'1px solid red'} h={'700px'} bg={'#eff7fa'}>
        
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
        <Text textAlign={'left'} lineHeight={'50px'} borderBottom={'0.5px solid lightgray'} ml={'30px'} pt={"20px"} color={'#363636'} fontWeight={'bold'} fontSize={"17px"} fontFamily={'Roboto, Arial, Helvetica, sans-serif;'}> 2 Address to choose from</Text>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
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
    
    </Box>
    </Box>
  
  )
}

export default Address




