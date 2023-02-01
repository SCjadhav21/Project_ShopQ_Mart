import React from 'react'
import useIterator from './Ads.type'
import { motion } from 'framer-motion';
import { Box,Flex,Button,Image,Hide } from '@chakra-ui/react';

const images = [
    {
      id: 1,
      path:
        "https://cdn.shopclues.com/images/banners/2023/Jan/21/HB1_Anniversary_Web_SYM_21Jan23.jpg",
      thumbnail:
        "https://cdn.shopclues.com/images/banners/2023/Jan/21/HB1_Anniversary_Web_SYM_21Jan23.jpg",
        description:"ShopClues Anniversary Sale"
    },
    {
      id: 2,
      path:
        "https://cdn.shopclues.com/images/banners/2023/Jan/21/HB2_Jacket_Web_SYM_21Jan23.jpg",
      thumbnail:
        "https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        description:"Mens Blue Jacket"
    },
    {
      id: 3,
      path:
        "https://cdn.shopclues.com/images/banners/2023/Jan/21/HB3_Blockbuster_Web_SYM_21Jan23.jpg",
      thumbnail:
        "https://c0.wallpaperflare.com/preview/481/575/757/himalayas-mountain-travel-nature.jpg",
        description:"Blockbuster Deals"
    },
    {
      id: 4,
      path: "https://cdn.shopclues.com/images/banners/2023/Jan/11/ShopcluesPCRefresh_Web_SYM_11Jan23.jpg",
      thumbnail: "https://live.staticflickr.com/3090/2418536788_4c95e26b86_b.jpg",
      description:"Intel"
    }
  ];

  const ImageContainer = motion(Box);


const Ads = () => {
    const { current,  setCurrent } = useIterator(
        images.length,
        1
      );
      
      const activeIndex = current - 1;

  return (
    <Box display={'flex'} margin="16px"  >
      
        <Flex
      
        direction="column"
        // overflow="hidden"
        // border={'3px solid green'}
        w={{ base: '100%', sm: '100%', md: '100%',lg:'80%' }}
     boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}
      >
        <Flex   position="relative" >
   
          <ImageContainer
            // initial="enter"
            // animate="center"
            // exit="exit"

            as="img"
            key={current}
            // width="100%"   
            src={images[activeIndex].path}
            alt="image"
          />

        </Flex>
        <Flex >
     
          {images.map((image, index) => {
            return (
              <Box
              w={'25%'}
              backgroundColor="white"
                key={image.id}
                // border="1px solid red"
                cursor="pointer"
                // ml="2rem"
                // rounded="4px"
                // size="25%"
                height="75px"
                as="button"
                border="none"
                // borderBottom="5px solid"
                _hover={{ borderBottom: "3px solid teal", color: " teal",fontWeight:'500' }}
              onMouseEnter={() => setCurrent(index + 1)}
              onMouseLeave={() => setCurrent(index + 1)}>
                {image.description}
              </Box>
            );
          })}
        
        </Flex>
      </Flex>
      <Hide below='lg'>
    <Box   m={'auto'} w={"15%"}  boxShadow={'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'} >
        <Box m={'auto'} h={'33%'} _hover={{ border: "1px solid teal", color: " teal" }}>
            {/* <Button  > */}
            <Image w={'100%'}    src='https://cdn.shopclues.com/images/banners/2022/dec/06/Platinum1_SYM_06Dec22.jpg'></Image>
            {/* </Button> */}
        </Box>
        <Box  border={''}  h={'33%'} _hover={{ border: "1px solid teal", color: " teal" }}>
            {/* <Button border={'none'} > */}
            <Image w={'100%'}   src='https://cdn.shopclues.com/images/banners/2022/dec/06/Platinum2_SYM_06Dec22.jpg'></Image>
            {/* </Button> */}
        </Box>
        <Box  border={''}  h={'33%'} _hover={{ border: "1px solid teal", color: " teal" }}>
            {/* <Button border={'none'} > */}
        <Image w={'100%'}  src='https://cdn.shopclues.com/images/banners/2022/dec/02/Platinum3_Esha_2ndDec22.jpg'></Image>
           {/* </Button> */}
        </Box>

    </Box>
    </Hide>
    </Box>
  )
}

export default Ads