import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  MenuButton,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  Img,
  Box,
  SimpleGrid,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Popover,
  Input,
  FormLabel,
} from "@chakra-ui/react";

import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  HamburgerIcon,
  ChevronDownIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const AdminPage = () => {
  const [page, setPage] = useState("main");
  const [editKey, setEditKey] = useState("");
  const [editValue, setEditValue] = useState("");
  const [userData, setUserData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const getuserdata = () => {
    axios(`http://localhost:4500/users/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => setUserData(res.data.data))
      .catch((err) => console.error(err));
  };

  const handelClick = (value) => {
    getuserdata();
    setPage(value);
    onClose();
  };

  const handelUserEdit = (id) => {
    let edit = { [editKey]: editValue };

    axios(`http://localhost:4500/users/${id}`, {
      method: "PATCH",
      data: edit,
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        alert(res.data.alert);
        getuserdata();
      })
      .catch((err) => console.error(err));
  };

  const handelUserDelete = (id) => {
    axios(`http://localhost:4500/users/${id}`, {
      method: "DELETE",

      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        alert(res.data.alert);
        getuserdata();
      })
      .catch((err) => console.error(err));
  };
  return (
    <>
      <Box
        w="100%"
        border="2px solid #F7F7F7"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        display="flex"
        gap={5}
      >
        <Img
          w="100px"
          h="60px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLK1eb8FMEoD5ePIJx-i2OHToVzBWjL4H29Q&usqp=CAU"
        ></Img>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Text fontWeight="700" fontSize="24px" color="#3168E6">
            Admin
          </Text>
          <Text fontSize="16px" color="#888888">
            ShopQ_Mart
          </Text>
        </Box>
      </Box>
      <Button ref={btnRef} bgColor="#3EC" m="10px" w="200px" onClick={onOpen}>
        Options
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>View Details</DrawerHeader>

          <DrawerBody display="flex" flexDirection="column" gap={3}>
            <Menu>
              <MenuButton
                border="2px solid #5AB9C1"
                bgColor="#5AB9C1"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                color="red"
                fontSize="18px"
              >
                Users
              </MenuButton>
              <MenuList border="2px solid red" bgColor="#fff">
                <MenuItem icon={<AddIcon />}>Add Users</MenuItem>
                <MenuItem
                  onClick={() => handelClick("allUsers")}
                  icon={<EditIcon />}
                >
                  All Users
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                color="red"
                fontSize="18px"
                border="2px solid #5AB9C1"
                bgColor="#5AB9C1"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Orders
              </MenuButton>
              <MenuList border="2px solid red" bgColor="#fff">
                <MenuItem icon={<ViewIcon />}>View Orders</MenuItem>
                <MenuItem icon={<EditIcon />}>Delete Orders</MenuItem>
              </MenuList>
            </Menu>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
      {page == "allUsers" ? (
        <Box p="0px 20px">
          <SimpleGrid columns={[2, null, 3]} spacing="40px">
            {userData?.map((user, index) => {
              return (
                <Box
                  p="10px"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  key={index}
                >
                  <Text>name : {user.name}</Text>
                  <Text>mobile : {user.mobile}</Text>
                  <Text>email : {user.email}</Text>
                  <Popover>
                    <PopoverTrigger>
                      <Button>Edit</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handelUserEdit(user._id);
                          }}
                        >
                          <FormLabel>updation key</FormLabel>
                          <Input
                            type="text"
                            onChange={(e) => setEditKey(e.target.value)}
                            isRequired
                          />
                          <FormLabel>updated value</FormLabel>
                          <Input
                            type={editKey == "email" ? "email" : "text"}
                            onChange={(e) => setEditValue(e.target.value)}
                            isRequired
                          />
                          <Input
                            bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
                            w="50%"
                            mt="5px"
                            type="submit"
                          />
                        </form>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Button onClick={() => handelUserDelete(user._id)} ml="5px">
                    Remove
                  </Button>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminPage;
