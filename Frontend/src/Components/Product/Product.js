import React from 'react'
import {Box,Text,Image} from '@chakra-ui/react'
import './Product.css'

const Product = () => {
  return (
    <Box>
        <Box mb={'100px'}>
        <Text color={'black'} fontWeight={'500'} ml={'20px'} fontSize={'20px'} >
                    Deals of the Day
        </Text>
            <Box display={'flex'} ml={'20px'} p={'15px'} borderRadius={'5px'} boxShadow={'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'} > 
              <Box className='individualproduct'>
                <Box>
                    <Image src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

                <Box className='individualproduct'>
                <Box>
                    <Image src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

                <Box className='individualproduct'>
                <Box>
                    <Image src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

                <Box className='individualproduct'>
                <Box>
                    <Image src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

                <Box className='individualproduct'>
                <Box>
                    <Image src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

                <Box className='individualproduct'>
                <Box>
                    <Image src='https://cdn.shopclues.com/images1/thumbnails/115246/200/200/152689876-115246212-1659944528.jpg'></Image>
                </Box>
                <Box>
                    <Text>Venerate Headphone Stand</Text>
                  <Box display={'flex'}>
                    <Text style={{fontWeight:'700',color:"black",marginRight:'5px' }}>$145</Text>
                    <Text style={{textDecoration:'line-through',color:"grey",marginRight:'5px' }}>$1999</Text>
                    <Text style={{color:'teal',fontWeight:'500',ml:'15px'}}>87% off</Text>
                  </Box>
                </Box>
                </Box>

             
            </Box>


        </Box>

    </Box>
  )
}

export default Product