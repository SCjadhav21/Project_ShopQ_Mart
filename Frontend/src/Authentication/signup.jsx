import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Img,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Show,
} from "@chakra-ui/react";
import { useEffect } from "react";
const Signup = () => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    password: "",
    email: "",
  });
  const [show, setShow] = React.useState(false);
  const [navigate, setNavigate] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setData({ ...data, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (data.name && data.password && data.email && data.mobile) {
      if (data.password.length < 6) {
        alert("password is too stort");
      } else if (data.mobile.length != 10) {
        alert("mobile number length should be 10");
      } else {
        axios("http://localhost:4500/users/register", {
          method: "POST",
          data: data,
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => {
            console.log(res);
            alert(res.data.msg);
            if (res.data == "user Registered") {
              setNavigate(true);
            }
          })
          .catch((err) => {
            console.log(err);
            alert(err.message);
          });
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  useEffect(() => {
    onOpen();
  }, []);

  if (navigate) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Box w={["", "", "100vh"]} bgColor="#fff" p="10px" display="flex">
            <Show above="md">
              {" "}
              <Box
                w="30%"
                margin="0"
                padding="95px 20px 0px 20px"
                textAlign="center"
                bgColor="#FBFBFB"
              >
                <Box
                  display="inline-block"
                  width="100%"
                  marginBottom="35px"
                  padding="0"
                >
                  <Img
                    display="inline-block"
                    width="45px"
                    height="45px"
                    margin-bottom="5px"
                    src="https://cdn-icons-png.flaticon.com/128/846/846171.png"
                  ></Img>
                  <Text
                    fontSize="16px"
                    color="#757575"
                    fontWeight="500"
                    margin="0"
                    lineHeight="22px"
                    padding="0"
                  >
                    Loyalty Points
                  </Text>
                  <Text
                    margin="5px 0 0 0"
                    padding="0"
                    fontSize="12px"
                    color="#a8a8a8"
                    lineHeight="20px"
                  >
                    Earn CluesBucks on prepaid orders
                  </Text>
                </Box>
                <Box
                  display="inline-block"
                  width="100%"
                  marginBottom="35px"
                  padding="0"
                >
                  <Img
                    display="inline-block"
                    width="45px"
                    height="45px"
                    margin-bottom="5px"
                    src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
                  ></Img>
                  <Text
                    font-size="16px"
                    color="#757575"
                    fontWeight="500"
                    margin="0"
                    padding="0"
                    lineHeight="22px"
                  >
                    Instant Checkout
                  </Text>
                  <Text
                    margin="5px 0 0 0"
                    padding="0"
                    fontSize="12px"
                    color="#a8a8a8"
                    lineHeight="20px"
                  >
                    Hassle-Free Payment Everytime
                  </Text>
                </Box>
                <Box
                  display="inline-block"
                  width="100%"
                  marginBottom="35px"
                  padding="0"
                >
                  <Img
                    display="inline-block"
                    width="45px"
                    height="45px"
                    margin-bottom="5px"
                    src="https://cdn-icons-png.flaticon.com/512/281/281648.png"
                  ></Img>
                  <Text
                    font-size="16px"
                    color="#757575"
                    fontWeight="500"
                    margin="0"
                    padding="0"
                    lineHeight="22px"
                  >
                    Exclusive Offers
                  </Text>
                  <Text
                    margin="5px 0 0 0"
                    padding="0"
                    fontSize="12px"
                    color="#a8a8a8"
                    lineHeight="20px"
                  >
                    For special offers & value deals
                  </Text>
                </Box>
              </Box>
            </Show>
            <Box w={["100%", "100%", "70%"]}>
              <ModalHeader p="0px 20px 0px 20px" display="flex" gap="10%">
                <Text color="#24a3b5" padding="0 8px ">
                  login
                </Text>
                <Text
                  borderBottom="2px solid #24a3b5"
                  color="#24a3b5"
                  padding="0 8px 8px"
                >
                  signup
                </Text>
              </ModalHeader>

              <Box p="20px 20px 0px 20px">
                <form onSubmit={handelSubmit} isRequired>
                  <FormLabel
                    borderBottom="1px solid #ddd"
                    width="100%"
                    fontSize="14px"
                    padding="6px 0px"
                    color="#212121"
                  >
                    Full name
                  </FormLabel>
                  <Input
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    isRequired
                    type="text"
                    placeholder="Enter Name"
                  />
                  <FormLabel
                    borderBottom="1px solid #ddd"
                    width="100%"
                    fontSize="14px"
                    padding="6px 0px"
                    color="#212121"
                  >
                    Mobile
                  </FormLabel>
                  <Input
                    name="mobile"
                    onChange={handleChange}
                    value={data.mobile}
                    isRequired
                    type="number"
                    placeholder="Enter Mobile"
                  />
                  <FormLabel
                    borderBottom="1px solid #ddd"
                    width="100%"
                    fontSize="14px"
                    padding="6px 0px"
                    color="#212121"
                  >
                    Email
                  </FormLabel>

                  <Input
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                    isRequired
                    type="email"
                    placeholder="Enter Email"
                  />

                  <FormLabel
                    borderBottom="1px solid #ddd"
                    width="100%"
                    fontSize="14px"
                    padding="6px 0px"
                    color="#212121"
                  >
                    Password
                  </FormLabel>
                  <InputGroup size="md">
                    <Input
                      name="password"
                      onChange={handleChange}
                      value={data.password}
                      isRequired
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <Input
                    textAlign="center "
                    fontSize="16px"
                    fontWeight="500"
                    borderRadius="3px"
                    backgroundClip="padding-box"
                    border="none"
                    outline="none"
                    width="100%"
                    padding="auto 20px"
                    display="inline-block"
                    whiteSpace="nowrap"
                    bgGradient="linear(0deg,#ff934b 0%,#ff5e62 100%)"
                    w="50%"
                    type="submit"
                    placeContent="Register"
                    color="#fff"
                    m="10px 0px"
                  />
                </form>
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
