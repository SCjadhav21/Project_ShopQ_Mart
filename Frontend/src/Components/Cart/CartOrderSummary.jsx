import {
  Button,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import axios from "axios";
import * as React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "./PriceTag";
import {
  getcartError,
  getcartRequest,
  getcartSuccess,
} from "../../REDUX/action";
import { useDispatch } from "react-redux";
const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};
const getData = () => {
  return axios.get("https://splendid-bear-cap.cyclic.app/cart", {
    headers: {
      "content-type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
};
export const CartOrderSummary = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.Cart.cart);

  const handleGet = () => {
    dispatch(getcartRequest());
    getData()
      .then((el) => {
        dispatch(getcartSuccess(el.data));
        // let n=el.length;
      })
      .catch((err) => {
        dispatch(getcartError());
        console.log(err);
      });
  };
  let sum = 0;
  cart.map((el) => {
    // console.log("orderSummery",el.quantity)
    sum += el.price * el.quantity;
  });
  React.useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <Stack spacing="6" width="full" maxW="sm">
        <Stack
          spacing="6"
          bg={mode("gray.50", "gray.700")}
          rounded="lg"
          padding="8"
        >
          <Text fontSize="lg" fontWeight="bold">
            Order Summary
          </Text>
          <Stack spacing="4">
            <OrderSummaryItem label="Subtotal" value={formatPrice(sum)} />
            <OrderSummaryItem
              label="Shipping + Tax"
              value={formatPrice((sum * 1) / 120)}
            />
            <OrderSummaryItem label="Coupon Code">
              <Link href="#" textDecor="underline">
                Add coupon code
              </Link>
            </OrderSummaryItem>
            <Flex justify="space-between" fontWeight="semibold">
              <Text>Total</Text>
              <Text>{formatPrice(sum + (sum * 1) / 120)}</Text>
            </Flex>
          </Stack>
        </Stack>
        <Button
          color="#fff"
          bgGradient="linear(0deg,#ff934b 0%,#ff5e62 100%)"
          size="lg"
          fontSize="md"
          _hover={{ color: "#24a3b2", bg: "#c0feff" }}
        >
          <Link href="/address"> Checkout</Link>
        </Button>
      </Stack>
    </>
  );
};
