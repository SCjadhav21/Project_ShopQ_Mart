import { Button, Flex, Link, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';
import { formatPrice } from './PriceTag';
const OrderSummaryItem = (props) => {
    const { label, value, children } = props;
    return (<Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>);
};
export const CartOrderSummary = () => (<Stack spacing="6" width="full" maxW="sm">
    <Stack spacing="6" bg={mode('gray.50', 'gray.700')} rounded="lg" padding="8">
      <Text fontSize="lg" fontWeight="bold">
        Order Summary
      </Text>

      <Stack spacing="4">
        <OrderSummaryItem label="Subtotal" value={formatPrice(597)}/>
        <OrderSummaryItem label="Shipping + Tax" value={formatPrice(20)}/>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between" fontWeight="semibold">
          <Text>Total</Text>
          <Text>{formatPrice(617)}</Text>
        </Flex>
      </Stack>
    </Stack>
    <Button color="#fff" bgGradient="linear(0deg,#ff934b 0%,#ff5e62 100%)" size="lg" fontSize="md">
      Checkout
    </Button>
  </Stack>);
