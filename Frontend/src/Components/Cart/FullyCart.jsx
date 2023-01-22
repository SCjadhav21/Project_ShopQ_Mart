import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import * as React from "react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import EmptyCart from "./EmptyCart";
import { useSelector } from "react-redux";

const FullCart = () => {
  const cart = useSelector((store) => store.Cart.cart);

  return (
    <>
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack spacing={{ base: "8", md: "12" }}>
          <Stack spacing="8">
            {cart.map((item) => (
              <CartItem key={item._id} {...item} />
            ))}
          </Stack>
          <Flex width="full" flexDirection="row" justifyContent="flex-end">
            {/* {cart.length>0?<CartOrderSummary />:<EmptyCart />} */}
            {cart.length > 0 && <CartOrderSummary />}
          </Flex>
        </Stack>
      </Box>
      ;
    </>
  );
};
export default FullCart;
