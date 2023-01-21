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
  FormControl,
  FormHelperText,
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
  const [userAddData, setUserAddData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    address: {
      pincode: "",
      city: "",
      state: "",
    },
  });
  const [page, setPage] = useState("main");
  const [editKey, setEditKey] = useState("");
  const [editValue, setEditValue] = useState("");
  const [data, setData] = useState([]);
  const [userData, setuserData] = useState([]);
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
      .then((res) => setuserData(res.data.data))

      .catch((err) => console.error(err));
  };

  const getTvData = () => {
    axios(`http://localhost:4500/products/tv`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  const getRefrigeratorData = () => {
    axios(`http://localhost:4500/products/refrigerator`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };
  const getWashingmachineData = () => {
    axios(`http://localhost:4500/products/washingmachine`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  const getLaptopData = () => {
    axios(`http://localhost:4500/products/laptop`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  const handelClick = (value) => {
    if (value == "allUsers") {
      getuserdata();
    } else if (value == "AllTvProducts") {
      getTvData();
    } else if (value == "AllRefrigeratorProducts") {
      getRefrigeratorData();
    } else if (value == "AllWashingmachineProducts") {
      getWashingmachineData();
    } else if (value == "AllLaptopProducts") {
      getLaptopData();
    }
    setPage(value);
    onClose();
  };

  const handelRefrigeratorEdit = (id) => {
    let edit = { [editKey]: editValue };

    axios(`http://localhost:4500/products/refigerator/${id}`, {
      method: "PATCH",
      data: edit,
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        alert(res.data);
        getRefrigeratorData();
      })
      .catch((err) => console.error(err));
  };
  const handelWashingmachineEdit = (id) => {
    let edit = { [editKey]: editValue };

    axios(`http://localhost:4500/products/washingmachine/${id}`, {
      method: "PATCH",
      data: edit,
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        alert(res.data);
        getWashingmachineData();
      })
      .catch((err) => console.error(err));
  };
  const handelLaptopEdit = (id) => {
    let edit = { [editKey]: editValue };

    axios(`http://localhost:4500/products/laptop/${id}`, {
      method: "PATCH",
      data: edit,
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        alert(res.data);
        getLaptopData();
      })
      .catch((err) => console.error(err));
  };
  const handelTvEdit = (id) => {
    let edit = { [editKey]: editValue };

    axios(`http://localhost:4500/products/tv/${id}`, {
      method: "PATCH",
      data: edit,
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        alert(res.data);
        getTvData();
      })
      .catch((err) => console.error(err));
  };

  const handelUserEdit = (id) => {
    let edit = { [editKey]: editValue };

    if (editKey == "mobile" && editValue.length !== 10) {
      alert("mobile length must be 10");
    } else {
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
    }
  };

  const handelTvDelete = (id) => {
    console.log(id);
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

  const handelUserAddChange = (e) => {
    let { name, value } = e.target;
    if (name == "pincode" || name == "city" || name == "state") {
      if (name == "pincode") {
        value = +value;
      }
      setUserAddData({
        ...userAddData,
        address: { ...userAddData.address, [name]: value },
      });
    } else {
      setUserAddData({ ...userAddData, [name]: value });
    }
  };

  const handelUserAddSubmit = (e) => {
    e.preventDefault();

    if (userAddData.password.length < 6) {
      alert("password must be at least 6 characters");
    } else if (userAddData.mobile.length !== 10) {
      alert("mobile must be 10 characters");
    } else {
      axios("http://localhost:4500/users/register", {
        method: "POST",
        data: userAddData,
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          alert(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
          alert(err.message);
        });
    }
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
                Tv Products
              </MenuButton>
              <MenuList border="2px solid red" bgColor="#fff">
                <MenuItem
                  onClick={() => handelClick("AddTvProduct")}
                  icon={<AddIcon />}
                >
                  Add Tv Products
                </MenuItem>
                <MenuItem
                  onClick={() => handelClick("AllTvProducts")}
                  icon={<EditIcon />}
                >
                  All TV's
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                border="2px solid #5AB9C1"
                bgColor="#5AB9C1"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                color="red"
                fontSize="18px"
              >
                Refrigerator Products
              </MenuButton>
              <MenuList border="2px solid red" bgColor="#fff">
                <MenuItem
                  onClick={() => handelClick("AddRefrigeratorProduct")}
                  icon={<AddIcon />}
                >
                  Add Refrigerators
                </MenuItem>
                <MenuItem
                  onClick={() => handelClick("AllRefrigeratorProducts")}
                  icon={<EditIcon />}
                >
                  All Refrigerator's
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                border="2px solid #5AB9C1"
                bgColor="#5AB9C1"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                color="red"
                fontSize="18px"
              >
                Laptops
              </MenuButton>
              <MenuList border="2px solid red" bgColor="#fff">
                <MenuItem
                  onClick={() => handelClick("AddLaptopProduct")}
                  icon={<AddIcon />}
                >
                  Add Laptop
                </MenuItem>
                <MenuItem
                  onClick={() => handelClick("AllLaptopProducts")}
                  icon={<EditIcon />}
                >
                  All Laptop's
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                border="2px solid #5AB9C1"
                bgColor="#5AB9C1"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                color="red"
                fontSize="18px"
              >
                Washingmachine
              </MenuButton>
              <MenuList border="2px solid red" bgColor="#fff">
                <MenuItem
                  onClick={() => handelClick("AddWashingmachineProduct")}
                  icon={<AddIcon />}
                >
                  Add Washingmachine
                </MenuItem>
                <MenuItem
                  onClick={() => handelClick("AllWashingmachineProducts")}
                  icon={<EditIcon />}
                >
                  All Washingmachine's
                </MenuItem>
              </MenuList>
            </Menu>
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
                <MenuItem
                  onClick={() => handelClick("addlUsers")}
                  icon={<AddIcon />}
                >
                  Add Users
                </MenuItem>
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

      {page == "AllTvProducts" ? (
        <Box p="0px 20px">
          <SimpleGrid columns={[1, 2, 3]} spacing="40px">
            {data?.map((tv, index) => {
              return (
                <Box
                  p="10px"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  key={index}
                >
                  <Img src={tv.image}></Img>
                  <Text>product_name : {tv.product_name}</Text>
                  <Text>brand : {tv.brand}</Text>
                  <Text>delivery : {tv.delivery}</Text>
                  <Text>discount : {tv.discount}</Text>
                  <Text>emi : {tv.emi}</Text>
                  <Text>image : {tv.image}</Text>
                  <Text>mrp : {tv.mrp}</Text>
                  <Text>items_left : {tv.items_left}</Text>
                  <Text>price : {tv.price}</Text>
                  <Text>prod_type : {tv.prod_type}</Text>

                  <Popover>
                    <PopoverTrigger>
                      <Button mt="8px">Edit</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handelTvEdit(tv._id);
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
                  <Button
                    mt="8px"
                    onClick={() => handelTvDelete(tv._id)}
                    ml="5px"
                  >
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

      {page == "AllRefrigeratorProducts" ? (
        <Box p="0px 20px">
          <SimpleGrid columns={[1, 2, 3]} spacing="40px">
            {data?.map((tv, index) => {
              return (
                <Box
                  p="10px"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  key={index}
                >
                  <Img src={tv.image}></Img>
                  <Text>product_name : {tv.product_name}</Text>
                  <Text>brand : {tv.brand}</Text>
                  <Text>delivery : {tv.delivery}</Text>
                  <Text>discount : {tv.discount}</Text>
                  <Text>emi : {tv.emi}</Text>
                  <Text>image : {tv.image}</Text>
                  <Text>mrp : {tv.mrp}</Text>
                  <Text>items_left : {tv.items_left}</Text>
                  <Text>price : {tv.price}</Text>
                  <Text>prod_type : {tv.prod_type}</Text>

                  <Popover>
                    <PopoverTrigger>
                      <Button mt="8px">Edit</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handelRefrigeratorEdit(tv._id);
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
                            type={editKey == "price" ? "price" : "text"}
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
                  <Button
                    mt="8px"
                    onClick={() => handelTvDelete(tv._id)}
                    ml="5px"
                  >
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

      {page == "AllWashingmachineProducts" ? (
        <Box p="0px 20px">
          <SimpleGrid columns={[1, 2, 3]} spacing="40px">
            {data?.map((tv, index) => {
              return (
                <Box
                  p="10px"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  key={index}
                >
                  <Img src={tv.image}></Img>
                  <Text>product_name : {tv.product_name}</Text>
                  <Text>brand : {tv.brand}</Text>
                  <Text>delivery : {tv.delivery}</Text>
                  <Text>discount : {tv.discount}</Text>
                  <Text>emi : {tv.emi}</Text>
                  <Text>image : {tv.image}</Text>
                  <Text>mrp : {tv.mrp}</Text>
                  <Text>items_left : {tv.items_left}</Text>
                  <Text>price : {tv.price}</Text>
                  <Text>prod_type : {tv.prod_type}</Text>

                  <Popover>
                    <PopoverTrigger>
                      <Button mt="8px">Edit</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();

                            handelWashingmachineEdit(tv._id);
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
                            type={editKey == "price" ? "price" : "text"}
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
                  <Button
                    mt="8px"
                    onClick={() => handelTvDelete(tv._id)}
                    ml="5px"
                  >
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
      {page == "AllLaptopProducts" ? (
        <Box p="0px 20px">
          <SimpleGrid columns={[1, 2, 3]} spacing="40px">
            {data?.map((tv, index) => {
              return (
                <Box
                  p="10px"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  key={index}
                >
                  <Img src={tv.image}></Img>
                  <Text>product_name : {tv.product_name}</Text>
                  <Text>brand : {tv.brand}</Text>
                  <Text>delivery : {tv.delivery}</Text>
                  <Text>discount : {tv.discount}</Text>
                  <Text>emi : {tv.emi}</Text>
                  <Text>image : {tv.image}</Text>
                  <Text>mrp : {tv.mrp}</Text>
                  <Text>items_left : {tv.items_left}</Text>
                  <Text>price : {tv.price}</Text>
                  <Text>prod_type : {tv.prod_type}</Text>

                  <Popover>
                    <PopoverTrigger>
                      <Button mt="8px">Edit</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();

                            handelLaptopEdit(tv._id);
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
                            type={editKey == "price" ? "price" : "text"}
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
                  <Button
                    mt="8px"
                    onClick={() => handelTvDelete(tv._id)}
                    ml="5px"
                  >
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
      {page == "allUsers" ? (
        <Box p="0px 20px">
          <SimpleGrid columns={[1, 2, 3]} spacing="40px">
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
                  <Text>city : {user.address.city}</Text>
                  <Text>pincode : {user.address.pincode}</Text>
                  <Text>state : {user.address.state}</Text>

                  <Popover>
                    <PopoverTrigger>
                      <Button mt="8px">Edit</Button>
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
                  <Button
                    mt="8px"
                    onClick={() => handelUserDelete(user._id)}
                    ml="5px"
                  >
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
      {page == "addlUsers" ? (
        <Box display="flex" justifyContent="center">
          <Box w={["100%", "70%", "50%"]} p="10%" border="2px solid red">
            <form onSubmit={handelUserAddSubmit}>
              <FormControl
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={userAddData.name}
                  onChange={handelUserAddChange}
                  isRequired
                  placeholder="enter full name"
                  type="text"
                />
                <FormLabel>Email address</FormLabel>
                <Input
                  name="email"
                  value={userAddData.email}
                  onChange={handelUserAddChange}
                  isRequired
                  placeholder="enter email"
                  type="email"
                />
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  value={userAddData.password}
                  onChange={handelUserAddChange}
                  isRequired
                  placeholder="enter password"
                  type="password"
                />
                <FormLabel>Mobile</FormLabel>
                <Input
                  name="mobile"
                  value={userAddData.mobile}
                  onChange={handelUserAddChange}
                  isRequired
                  type="number"
                  placeholder="enter mobile"
                />
                <FormLabel>City</FormLabel>
                <Input
                  name="city"
                  value={userAddData.address.city}
                  onChange={handelUserAddChange}
                  isRequired
                  placeholder="enter city"
                  type="text"
                />
                <FormLabel>State</FormLabel>
                <Input
                  name="state"
                  value={userAddData.address.state}
                  onChange={handelUserAddChange}
                  isRequired
                  placeholder="enter state"
                  type="text"
                />
                <FormLabel>Pincode</FormLabel>
                <Input
                  name="pincode"
                  value={userAddData.address.pincode}
                  onChange={handelUserAddChange}
                  isRequired
                  placeholder="enter pincode"
                  type="number"
                />

                <Input
                  alignSelf="center"
                  w="90%"
                  type="submit"
                  mt="10px"
                  borderRadius="20px"
                  bgGradient="linear(0deg,#ff934b 0%,#ff5e62 100%)"
                />
              </FormControl>
            </form>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminPage;
