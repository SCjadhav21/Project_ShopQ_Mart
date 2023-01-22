

import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'




import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  
  export default function SinglepageMachine() {

    
    const[data,setData]=useState([])

    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:4500/products/washingmachine/${id}`).then((res)=>{
            setData(res.data)
           
        })
    },[])
 
    


    return (
      <Container maxW={'7xl'}>
          
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                data.image
              }
              fit={'center'}
              align={'center'}
              w={'auto'}
              h={{ base: '100%', sm: '300px', lg: '300px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={400}
                fontSize={{ base: '1xl', sm: '2xl', lg: '3xl' }}>
                  {data.product_name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                {data.price}
                
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
 
                </Text>
                <Text fontSize={'lg'}>
     
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                 
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                  
                    <ListItem>MRP</ListItem>
                    <ListItem>Discount</ListItem>{' '}
                    <ListItem>Price</ListItem>
                    <ListItem>Product-Type</ListItem>
                  
                  </List>
                  <List spacing={2}>
                  <ListItem>{data.mrp || 703212}</ListItem>
              
                    <ListItem>{data.discount||"25%"}</ListItem>

                    <ListItem>{data.price}</ListItem>
                    <ListItem>{data.prod_type}</ListItem>
                   
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Brand:
                    </Text>{' '}
                      {data.brand}

                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Height:
                    </Text>{' '}
                    150cm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      materia:
                    </Text>{' '}
                     plastic
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Sold-By:
                    </Text>{' '}
                    {data.sold_by_location}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      color:
                    </Text>{' '}
                     Red
                  </ListItem>

                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Product-Id:
                    </Text>{' '}
                     {data.product_id}
                  </ListItem>
                 
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }
