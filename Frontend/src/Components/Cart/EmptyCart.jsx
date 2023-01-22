import React from 'react';
import {Box, Image, Text} from "@chakra-ui/react";
import Cart from "./empty.gif"

const EmptyCart = () => {
  return (
        <Box>
            <Image  pt={'60px'} margin={'auto'} src={Cart}></Image>
            <Text borderBottom={'0.5px solid lightgray'} color={'#939393'} textAlign={'center'} fontSize={'16px'} pb={'15px'} pt={'10px'}>You don't have any Product in your Cart.</Text>
        </Box>
  )
}

export default EmptyCart