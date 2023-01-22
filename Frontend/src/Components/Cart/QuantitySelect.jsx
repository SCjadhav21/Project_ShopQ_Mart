import {
  Flex,
  FormLabel,
  Select,
  useColorModeValue as mode,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import * as React from "react";
import { useDispatch } from "react-redux";
import {
  getcartError,
  getcartRequest,
  getcartSuccess,
} from "../../REDUX/action";

const Update = (id, e) => {
  const payload = { quantity: `${e}` };
  console.log(e);
  return axios.patch(
    `https://splendid-bear-cap.cyclic.app/cart/${id}`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }
  );
};
const getData = () => {
  return axios.get("https://splendid-bear-cap.cyclic.app/cart", {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
};
export const QuantitySelect = (props) => {
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(1);
  const handleUpdate = (props, e) => {
    Update(props.id, e);
    setCount(e);
    handleGet();
  };
  const handleGet = () => {
    dispatch(getcartRequest());
    getData()
      .then((el) => {
        dispatch(getcartSuccess(el.data));
      })
      .catch((err) => {
        dispatch(getcartError());
        console.log(err);
      });
  };
  return (
    <Flex align="center">
      <FormLabel
        fontSize={{ base: "sm", md: "md" }}
        htmlFor={props.id}
        mb="0"
        color={mode("gray.600", "gray.400")}
      >
        Qty
      </FormLabel>
      <Select
        onChange={(e) => {
          handleUpdate(props, e.target.value);
        }}
        size="sm"
        rounded="md"
        aria-label="Select quantity"
        focusBorderColor={useColorModeValue("blue.500", "blue.200")}
        {...props}
      >
        <option>{count}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Select>
    </Flex>
  );
};
