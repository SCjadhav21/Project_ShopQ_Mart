import { Badge, Box, HStack, Icon, Image, Stack, Text, useColorModeValue as mode, } from '@chakra-ui/react';
import * as React from 'react';
import { HiCheckCircle } from 'react-icons/hi';
export const CartProductMeta = (props) => {
    const { isBestSeller, image, title, variants, isInStock } = props;
    return (<Stack direction="row" spacing={{ base: '3', md: '5' }} width="full">
      <Box width="24" height="24" rounded="lg" borderWidth="1px" overflow="hidden">
        <Image fit="cover" src={image} alt={title} draggable="false" loading="lazy" width="full" height="full"/>
      </Box>
      <Box pt="2">
        <Stack fontSize="sm" align="flex-start">
          <Text fontWeight="semibold" lineHeight="1" noOfLines={1}>
            {title}
          </Text>
          {variants && (<Text color={mode('gray.600', 'gray.400')} lineHeight="1">
              {variants.map((item) => item.value).join(', ')}
            </Text>)}
          {isBestSeller && (<Badge variant="solid" colorScheme="orange" fontSize="x-small">
              #1 Best seller
            </Badge>)}
          {isInStock && (<HStack spacing="1" color={mode('green.600', 'green.400')}>
              <Icon as={HiCheckCircle} fontSize="md"/>
              <p>In stock</p>
            </HStack>)}
        </Stack>
      </Box>
    </Stack>);
};
