import { FaUserCircle, FaRegHeart } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
// import {  } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import "./Homepage.css";
import {
  Box,
  Button,
  Flex,
  Input,
  Image,
  Text,
  Center,
  Tag,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Menu,
  Img,
} from "@chakra-ui/react";
import ShopQ from "../Resources/ShopQ.jpeg";
import { Link, Navigate } from "react-router-dom";
import {
  AddIcon,
  BellIcon,
  EditIcon,
  ExternalLinkIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";

import Navlist from "./Trial/Navlist";

import axios from "axios";

const Navbar = () => {
  const [data, setData] = useState("");
  const [add, setAdd] = useState(false);
  const [address, setAdress] = useState("");
  const [data2, setData2] = useState(false);
  const [goadmin, setGoadmin] = useState(false);
  const checkAuth = () => {
    axios(`https://splendid-bear-cap.cyclic.app/users/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (res.data.msg == "Not Authorised") {
          setData2(true);
        }
      })

      .catch((err) => console.error(err));
  };

  const AuthorisedOrNot = () => {
    let token = localStorage.getItem("token");
    if (!token) {
      alert("Please Login First");
    } else if (data2) {
      alert("You are Not Authorized");
    } else {
      setGoadmin(true);
    }
  };

  const getuserdata = () => {
    axios(`https://splendid-bear-cap.cyclic.app/users/personalDetail`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setData(res.data.data.name);
        setAdress(res.data.data.address.city);
      })
      .catch((err) => console.error(err));
  };

  const handleLogou = () => {};
  const handleLogin = () => {
    let token = localStorage.getItem("token");

    token ? getuserdata() : setData("Sign In");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setData("Sign In");
  };
  useEffect(() => {
    checkAuth();
    handleLogin();
  }, [add]);
  if (goadmin) {
    return <Navigate to="/adminpage" />;
  }
  return (
    <Box backgroundColor={"#ffffff"}>
      <Box display={"flex"} mt="1%" w={"100%"} mb="1%">
        <Box w={"25%"}>
          <Image src={ShopQ} w={"180px"} ml="50px" />
        </Box>

        <Center
          display={"flex"}
          border={"1px solid grey"}
          borderRadius={"10px"}
          w={"45%"}
          mt={"13px"}
        >
          <Input
            w={"85%"}
            style={{ border: "red", paddingLeft: "25px" }}
            placeholder="What is on your mind today?"
          />
          <Button
            w={"25%"}
            style={{
              border: "none",
              background:
                "linear-gradient(90deg, rgba(255,142,77,1) 6%, rgba(255,100,95,1) 61%)",
              borderRadius: "0px 9px 9px 0px",
              color: "white",
            }}
          >
            Search
          </Button>
        </Center>

        <Box ml={45}>
          <Flex mt={"10px"} gap={10}>
            <Link href="" ml={"20px"} textDecoration={"none"} color={"teal"}>
              <Center>
                <MdLocationOn fontSize={20} color={"#24a3b5"} />
              </Center>

              {/* <Image
                w={"30px"}
                h={"20px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaR-Pzqjuoro9Sg7bw-y7D7ldTWMAd304Ij1sk03YWrNvA5Y2Puo8h7jgk4BrIODMjJ0&usqp=CAU"
              /> */}
              <Text fontWeight={"500"} color={"#ff645f"}>
                {" "}
                {data !== "Sign In" ? address.toUpperCase() : ""}
              </Text>
            </Link>
            <Link>
              <Center mt={"7px"}>
                <BellIcon color={"#24a3b5"} fontSize={25} />
              </Center>
            </Link>
            <Link to="/cart">
              <Center mt={"7px"}>
                <HiShoppingCart color={"#24a3b5"} fontSize={25} />
              </Center>

              {/* <Button border={"none"} backgroundColor={"transparent"}>
                <Image
                  w={"22px"}
                  h={"20px"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWILI-X5CIcJt1_73TP-c7j2bVHrMq94GDTh0DyAvYpGhkeNcD2WKPuGJdiZHc0iVmUE&usqp=CAU"
                  // src="https://www.shutterstock.com/shutterstock/photos/1569447439/display_1500/stock-vector-empty-color-shopping-cart-flat-modern-design-colored-vector-icon-isolated-on-white-background-web-1569447439.jpg"
                />
              </Button> */}
            </Link>
            <Link to={data == "Sign In" ? "/login" : ""}>
              <Center>
                <Menu>
                  <MenuButton
                    // handleLogout
                    onClick={data == "Sign In" ? handleLogin : handleLogou()}
                    border={"none"}
                    backgroundColor={"transparent"}
                    fontWeight={"500"}
                    as={IconButton}
                    aria-label="Options"
                    icon={
                      <Tag bg={"#ff645f"} color={"white"} h={10}>
                        {data !== "SIGN IN" ? data.toUpperCase() : "Sign In"}
                      </Tag>
                    }
                    variant="outline"
                  />
                  <MenuList p="0px">
                    <Box
                      borderRadius="5px 5px 0% 0%"
                      bgColor="#24A3B5"
                      h="65px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      gap={5}
                    >
                      <FaUserCircle fontSize="35px" color="#fff" />
                      {/* <Img
                        w="40px"
                        h="40px"
                        borderRadius="50%"
                        src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                        alt="error in url"
                      /> */}
                      <Text color="#fff" fontWeight="bold">
                        {data.toUpperCase()}
                      </Text>
                    </Box>
                    <MenuItem
                      onClick={() => handleLogout()}
                      fontSize="20px"
                      icon={<BiLogOut />}
                      // command="⌘T"
                    >
                      Logout
                    </MenuItem>
                    <MenuItem
                      onClick={AuthorisedOrNot}
                      icon={<RiAdminLine />}
                      command="⌘N"
                    >
                      Admin Page
                    </MenuItem>
                    <MenuItem icon={<FaRegHeart />} command="⌘⇧N">
                      WishList
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                      My Profie
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                      My Cart
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Center>
            </Link>
          </Flex>
        </Box>
      </Box>
      <Navlist />
      <Box className="navbarpanel">
        <Box id="navbar">
          <Link href="" className="navbutton">
            Time sales
          </Link>
          <Link href="" className="navbutton">
            Flue Care
          </Link>
          <Link href="" className="navbutton">
            Food & Beverage
          </Link>
          <Link href="" className="navbutton">
            Personal Hygiene
          </Link>
          <Link href="" className="navbutton">
            Home Cleaning
          </Link>
          <Link href="" className="navbutton">
            Nutrition & Suplements
          </Link>
          <Link href="" className="navbutton">
            Kitchen & Dining
          </Link>
          <Link href="" className="navbutton">
            {" "}
            Refurbished Mobiles
          </Link>
          <Link href="" className="navbutton">
            {" "}
            Mobile Accessories
          </Link>
        </Box>
      </Box>
      {/* <Product/> */}
      {/* <Box w={"50%"} maxW="3xl" mx="auto" px={{ base: "4", md: "8", lg: "12" }} py={{ base: "6", md: "8", lg: "12" }}>
          <Gallery images={images}/>
        </Box> */}

      {/* <UncontrolledExample/> */}
      {/* <Ads/>
       <Product/> */}
    </Box>
  );
};

export default Navbar;
