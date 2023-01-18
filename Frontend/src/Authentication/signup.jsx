import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Img,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
const Signup = () => {
  const [show, setShow] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => setShow(!show);

  const handelSubmit = () => {
    console.log("handelSubmit");
  };
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <Box display="flex" border="2px solid red">
            <Box w="30%">
              <Box>
                <Img
                  display="inline-block"
                  width="55px"
                  height="55px"
                  margin-bottom="5px"
                  src="https://cdn-icons-png.flaticon.com/128/846/846171.png"
                ></Img>
                <Text
                  font-size="16px"
                  color="#757575"
                  font-weight="500"
                  margin="0"
                  lineHeight="22px"
                  padding="0"
                >
                  Loyalty Points
                </Text>
                <Text>Earn CluesBucks on prepaid orders</Text>
              </Box>
              <Box>
                <Img
                  display="inline-block"
                  width="55px"
                  height="55px"
                  margin-bottom="5px"
                  src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
                ></Img>
                <Text
                  font-size="16px"
                  color="#757575"
                  font-weight="500"
                  margin="0"
                  padding="0"
                  lineHeight="22px"
                >
                  Instant Checkout
                </Text>
                <Text>Hassle-Free Payment Everytime</Text>
              </Box>
              <Box>
                <Img
                  display="inline-block"
                  width="55px"
                  height="55px"
                  margin-bottom="5px"
                  src="https://cdn-icons-png.flaticon.com/512/281/281648.png"
                ></Img>
                <Text
                  font-size="16px"
                  color="#757575"
                  font-weight="500"
                  margin="0"
                  padding="0"
                  lineHeight="22px"
                >
                  Exclusive Offers
                </Text>
                <Text>For special offers & value deals</Text>
              </Box>
            </Box>
            <Box w="70%">
              <ModalHeader display="flex" gap="10%">
                <Text color="#24a3b5" padding="0 8px">
                  login
                </Text>
                <Text color="#24a3b5" padding="0 8px">
                  signup
                </Text>
              </ModalHeader>
              <ModalCloseButton />
              <Box>
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
                  <Input isRequired type="text" placeholder="Enter Name" />
                  <FormLabel
                    borderBottom="1px solid #ddd"
                    width="100%"
                    fontSize="14px"
                    padding="6px 0px"
                    color="#212121"
                  >
                    Mobile
                  </FormLabel>
                  <Input isRequired type="number" placeholder="Enter Mobile" />
                  <FormLabel
                    borderBottom="1px solid #ddd"
                    width="100%"
                    fontSize="14px"
                    padding="6px 0px"
                    color="#212121"
                  >
                    Email
                  </FormLabel>

                  <Input isRequired type="email" placeholder="Enter Email" />

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
