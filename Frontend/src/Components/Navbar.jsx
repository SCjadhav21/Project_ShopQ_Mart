import React, { useState } from "react";
import "./Homepage.css";
import { Box, Button, Flex, Input, Image, Text, Center, Tag } from "@chakra-ui/react";
import ShopQ from "../Resources/ShopQ.jpeg";
import { Link } from "react-router-dom";
import { BellIcon } from "@chakra-ui/icons";
import {MdLocationOn} from "react-icons/md"
import {HiShoppingCart} from "react-icons/hi"


import Navlist from "./Trial/Navlist";
import { useEffect } from "react";
import axios from "axios";
// import { Navigate } from "react-router-dom";
// import Product from './Product/Product';
// import UncontrolledExample from './Banner/Banner';
// import {images} from "./components/_data"
// import {Gallery} from "./components/Gallery"
// import Product from './Product/Product';
// import Ads from './Advertisement/Ads';

const Navbar = () => {
  const [data, setData] = useState("");
  const [address, setAdress] = useState("");

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

  const handleLogin = () => {
    let token = localStorage.getItem("token");
    // token ? setData("Logout") : setData("Sign In");
    token ? getuserdata() : setData("Sign In");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setData("Sign In");
  };
  useEffect(() => {
    handleLogin();
  }, []);

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
      
        {/* <Box display={"flex"} w="20%" margin="auto">
          <Link
            display={"flex"}
            href=""
            ml={"20px"}
            textDecoration={"none"}
            color={"teal"}
          >
            <Text mt={"12px"} fontSize={"13px"} fontWeight={"500"}>
              Location
            </Text>
            <Image
              w={"35px"}
              h={"30px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaR-Pzqjuoro9Sg7bw-y7D7ldTWMAd304Ij1sk03YWrNvA5Y2Puo8h7jgk4BrIODMjJ0&usqp=CAU"
            />
          </Link>
          <Link>
            <Button border={"none"} backgroundColor="transparent">
              <BellIcon color={"teal"} w={"40px"} h={"25px"} />
            </Button>
          </Link>
          <Link to="/cart">
            <Button border={"none"} backgroundColor={"transparent"}>
              <Image
                w={"22px"}
                h={"20px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWILI-X5CIcJt1_73TP-c7j2bVHrMq94GDTh0DyAvYpGhkeNcD2WKPuGJdiZHc0iVmUE&usqp=CAU"
              />
            </Button>
          </Link>
          <Link to={data == "Sign In" ? "/login" : ""}>
            <Button
              onClick={data == "Sign In" ? handleLogin : handleLogout}
              border={"none"}
              backgroundColor={"transparent"}
              fontWeight={"500"}
            >
              {data}
            </Button>
          </Link>
        </Box> */}
        <Box ml={45}  >
          <Flex mt={"10px"} gap={10}  >
            <Link href="" ml={"20px"} textDecoration={"none"} color={"teal"}>
              {/* <Text mt={'12px'} fontSize={'13px'} fontWeight={"500"}>Location</Text> */}
              <Center>
              <MdLocationOn fontSize={20} color={"#24a3b5"} />
              </Center>
                
              {/* <Image
                w={"30px"}
                h={"20px"}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaR-Pzqjuoro9Sg7bw-y7D7ldTWMAd304Ij1sk03YWrNvA5Y2Puo8h7jgk4BrIODMjJ0&usqp=CAU"
              /> */}
              <Text fontWeight={'500'} color={'#ff645f'}> {data !== "Sign In" ? address.toUpperCase() : ""}</Text>
             
            </Link>
            <Link>
              <Center mt={"7px"}>
              <BellIcon color={"#24a3b5"} fontSize={25} />
              </Center>
             
          
            </Link>
            <Link to="/cart">
              <Center mt={"7px"}>
              <HiShoppingCart color={"#24a3b5"}   fontSize={25}/>
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
              <Button
                onClick={data == "Sign In" ? handleLogin : handleLogout}
                border={"none"}
                backgroundColor={"transparent"}
                fontWeight={"500"}
              >
                <Center>
                <Tag bg={"#ff645f"} color={"white"} h={10}>
                {data.toUpperCase()}
                </Tag>
                </Center>
                
               
              </Button>
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
