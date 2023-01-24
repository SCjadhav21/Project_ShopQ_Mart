import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Homepage from "../Components/Homepage";
import { CloseIcon } from "@chakra-ui/icons";
const Signup = () => {
  const toast = useToast();
  const [data, setData] = useState({
    name: "",
    mobile: "",
    password: "",
    email: "",
    address: {
      pincode: "",
      city: "",
      state: "",
    },
  });
  const [show, setShow] = React.useState(false);
  const [home, setHome] = React.useState(false);
  const [navigate, setNavigate] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    let { value, name } = e.target;

    if (name == "pincode" || name == "city" || name == "state") {
      if (name == "pincode") {
        value = +value;
      }
      setData({ ...data, address: { ...data.address, [name]: value } });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (
      data.name &&
      data.password &&
      data.email &&
      data.mobile &&
      data.address
    ) {
      if (data.password.length < 6) {
        alert("password is too stort");
      } else if (data.mobile.length != 10) {
        alert("mobile number length should be 10");
      } else {
        axios("https://splendid-bear-cap.cyclic.app/users/register", {
          method: "POST",
          data: data,
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => {
            if (res.data.msg == "user Registered") {
              toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
              setNavigate(true);
            } else {
              toast({
                title: "Acount has been Already Regestered.",
                description: "Please Login to account or Create with new Email",
                status: "error",
                duration: 3000,

                isClosable: true,
              });
            }
          })
          .catch((err) => {
            let message = err.message;
            toast({
              title: { message },
              description: err.description,
              status: "error",
              duration: 3000,

              isClosable: true,
            });
          });
      }
    } else {
      toast({
        title: "Please fill all the fields",

        status: "error",
        duration: 3000,

        isClosable: true,
      });
    }
  };

  useEffect(() => {
    onOpen();
  }, []);
  if (home) {
    return <Navigate to="/" />;
  }
  if (navigate) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Homepage />
      <Modal
        mt="50px"
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <Box w={["", "", "100vh"]} bgColor="#fff" p="10px" display="flex">
            <Show above="md">
              {" "}
              <Box
                w="30%"
                margin="0"
                padding="95px 20px 0px 20px"
                textAlign="center"
                bgColor="#FBFBFB"
                // bgGradient="linear(0deg,#ff934a 0%,#ff5e62 100%)"
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
              <ModalHeader
                p="0px 20px 0px 20px"
                display="flex"
                gap="10%"
                justifyContent="space-between"
              >
                <Box display="flex" gap="10%" w="80%">
                  {" "}
                  <Text color="#24a3b5" padding="0 8px ">
                    <Link to="/login">Login</Link>
                  </Text>
                  <Text
                    borderBottom="2px solid #24a3b5"
                    color="#24a3b5"
                    padding="0 8px 8px"
                  >
                    <Link to="signup">Sign Up</Link>
                  </Text>
                </Box>
                <Box fontSize={15} fontWeight="bold">
                  <Button
                    bgColor="#fff"
                    border="1px solid #E8F0FE"
                    onClick={() => setHome(true)}
                  >
                    {" "}
                    <CloseIcon />
                  </Button>
                </Box>
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
                    City
                  </FormLabel>
                  <Input
                    name="city"
                    onChange={handleChange}
                    value={data.address.city}
                    isRequired
                    type="text"
                    placeholder="Enter City"
                  />
                  <FormLabel
                    borderBottom="1px solid #ddd"
                    width="100%"
                    fontSize="14px"
                    padding="6px 0px"
                    color="#212121"
                  >
                    pincode
                  </FormLabel>
                  <Input
                    name="pincode"
                    onChange={handleChange}
                    value={data.address.pincode}
                    isRequired
                    type="number"
                    placeholder="Enter pincode"
                  />
                  <FormLabel
                    borderBottom="1px solid #ddd"
                    width="100%"
                    fontSize="14px"
                    padding="6px 0px"
                    color="#212121"
                  >
                    State
                  </FormLabel>
                  <Input
                    name="state"
                    onChange={handleChange}
                    value={data.address.state}
                    isRequired
                    type="text"
                    placeholder="Enter State"
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
