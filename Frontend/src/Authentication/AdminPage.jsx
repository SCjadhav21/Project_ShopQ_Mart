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
  useToast,
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
import ShopQ from "../Resources/ShopQ.jpeg";
import { Link } from "react-router-dom";

const AdminPage = () => {
  // userIntialState
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
  // tvProductsInitialState
  const [productsAddData, setProductsAddData] = useState({
    product_name: "",
    product_id: "",
    brand: "",
    image: "",
    price: "",
    mrp: "",
    discount: "",
    prod_type: "",
    rating: "",
    product_desc: "",
    product_specs: {
      key_features: {
        brand: "",
      },
      tv_specifications: {
        ptype: "",
        display_size: "",
        screen_size_range: "",
        functionality: "",
      },
      general_feature: {
        display_resolution: "",
      },
      connectivity: {
        usb_port: "",
        hdmi_ports: "",
      },
      electronic_warranty: {
        warranty_available: "",
        duration: "",
      },
    },
    cod: "",
    shipping: "",
    delivery: "",
    items_left: "",
    sold_by_location: "",
    sold_by: "",
    emi: "",
  });
  // refrigeratorInitalization
  const [refrigeratorAddData, setRefrigeratorAddData] = useState({
    product_name: "",
    product_id: "",
    brand: "",
    image: "",
    price: "",
    mrp: "",
    discount: "",
    prod_type: "",
    rating: "",
    product_desc: "",
    product_specs: {
      key_features: {
        brand: "",
      },
      refrigerator_specification: {
        gross_capacity: "",
        gross_capacity_range: "",
        door_type: "",
        technology: "",
      },
      refrigerator_features: {
        shelf_material: "",
        no_of_shelves: "",
      },
      product_warranty: {
        main_unit: "",
        compressor: "",
      },
      power: {
        energy_rating: "",
      },
      convenience_features: {
        door_lock: "",
      },
      electronic_warranty: {
        warranty_available: "",
        duration: "",
      },
    },
    cod: "",
    shipping: "",
    delivery: "",
    items_left: "",
    sold_by_location: "",
    sold_by: "",
    emi: "",
  });
  const toast = useToast();
  const [page, setPage] = useState("main");
  const [editKey, setEditKey] = useState("");
  const [editValue, setEditValue] = useState("");
  const [data, setData] = useState([]);
  const [userData, setuserData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // check  authorizetion

  // All get methods

  const getuserdata = () => {
    axios(`https://splendid-bear-cap.cyclic.app/users/`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => setuserData(res.data.data))

      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };

  const getTvData = () => {
    axios(`https://splendid-bear-cap.cyclic.app/products/tv`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => setData(res.data))
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };

  const getRefrigeratorData = () => {
    axios(`https://splendid-bear-cap.cyclic.app/products/refrigerator`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => setData(res.data))
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  const getWashingmachineData = () => {
    axios(`https://splendid-bear-cap.cyclic.app/products/washingmachine`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => setData(res.data))
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };

  const getLaptopData = () => {
    axios(`https://splendid-bear-cap.cyclic.app/products/laptop`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => setData(res.data))
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };

  const getOrders = () => {
    axios(`https://splendid-bear-cap.cyclic.app/cart/allitems`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => setData(res.data))
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  // All handel page change methods

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
    } else if (value == "allOrders") {
      getOrders();
    }

    setPage(value);
    onClose();
  };

  //  All Edite Methods
  const handelRefrigeratorEdit = (id) => {
    let edit = { [editKey]: editValue };

    axios(`https://splendid-bear-cap.cyclic.app/products/refigerator/${id}`, {
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
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  const handelWashingmachineEdit = (id) => {
    let edit = { [editKey]: editValue };

    axios(
      `https://splendid-bear-cap.cyclic.app/products/washingmachine/${id}`,
      {
        method: "PATCH",
        data: edit,
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => {
        alert(res.data);
        getWashingmachineData();
      })
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  const handelLaptopEdit = (id) => {
    let edit = { [editKey]: editValue };

    axios(`https://splendid-bear-cap.cyclic.app/products/laptop/${id}`, {
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
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  const handelTvEdit = (id) => {
    let edit = { [editKey]: editValue };

    axios(`https://splendid-bear-cap.cyclic.app/products/tv/${id}`, {
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
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };

  const handelUserEdit = (id) => {
    let edit = { [editKey]: editValue };

    if (editKey == "mobile" && editValue.length !== 10) {
      alert("mobile length must be 10");
    } else {
      axios(`https://splendid-bear-cap.cyclic.app/users/${id}`, {
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
        .catch((err) =>
          toast({
            title: "Error Occured",
            description: `${err.message}`,
            status: "error",
            duration: 3000,
            isClosable: true,
          })
        );
    }
  };

  // All Delete functions
  const handelTvDelete = (id) => {
    axios(`https://splendid-bear-cap.cyclic.app/products/tv/${id}`, {
      method: "DELETE",

      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        toast({
          title: "TV Deleted Successfully",
          description: `You've Removed TV with id ${id} from Database.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        getuserdata();
      })
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  const handelLaptopDelete = (id) => {
    axios(`https://splendid-bear-cap.cyclic.app/products/laptop/${id}`, {
      method: "DELETE",

      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        toast({
          title: "Laptop Deleted Successfully",
          description: `You've Removed laptop with id ${id} from Database.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        getuserdata();
      })
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  const handelRefrigeratorDelete = (id) => {
    axios(`https://splendid-bear-cap.cyclic.app/products/refigerator/${id}`, {
      method: "DELETE",

      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        toast({
          title: "Refrigerator Deleted Successfully",
          description: `You've Removed Refrigerator with id ${id} from Database.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        getRefrigeratorData();
      })
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  const handelWashingmachineDelete = (id) => {
    axios(
      `https://splendid-bear-cap.cyclic.app/products/washingmachine/${id}`,
      {
        method: "DELETE",

        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => {
        toast({
          title: "Washingmachine Deleted Successfully",
          description: `You've Removed Washingmachine with id ${id} from Database.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        getuserdata();
      })
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  const handelUserDelete = (id) => {
    axios(`https://splendid-bear-cap.cyclic.app/users/${id}`, {
      method: "DELETE",

      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        toast({
          title: "User Deleted Successfully",
          description: `You've Removed user with id ${id} from Database.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        getuserdata();
      })
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  const handelCartItemDelete = (id) => {
    axios(`https://splendid-bear-cap.cyclic.app/cart/${id}`, {
      method: "DELETE",

      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        toast({
          title: "Cart Deleted Successfully",
          description: `You've Deleted cart with id ${id}.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        getOrders();
      })
      .catch((err) =>
        toast({
          title: "Error Occured ",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };

  // All ChangeData functions

  const handelTvAddChange = (e) => {
    let { name, value, type } = e.target;
    if (type == "number") {
      value = +value;
    }
    if (
      name == "brand" ||
      name == "ptype" ||
      name == "display_size" ||
      name == "usb_port" ||
      name == "hdmi_ports" ||
      name == "warranty_available" ||
      name == "duration" ||
      name == "screen_size_range" ||
      name == "functionality" ||
      name == "display_resolution"
    ) {
      if (name == "brand") {
        setProductsAddData({
          ...productsAddData,
          product_specs: {
            ...productsAddData.product_specs,
            key_features: {
              ...productsAddData.product_specs.key_features,
              [name]: value,
            },
          },
        });
      } else if (name == "usb_port" || name == "hdmi_ports") {
        setProductsAddData({
          ...productsAddData,
          product_specs: {
            ...productsAddData.product_specs,
            connectivity: {
              ...productsAddData.product_specs.connectivity,
              [name]: value,
            },
          },
        });
      } else if (
        name == "ptype" ||
        name == "display_size" ||
        name == "screen_size_range" ||
        name == "functionality"
      ) {
        setProductsAddData({
          ...productsAddData,
          product_specs: {
            ...productsAddData.product_specs,
            tv_specifications: {
              ...productsAddData.product_specs.tv_specifications,
              [name]: value,
            },
          },
        });
      } else if (name == "display_resolution") {
        setProductsAddData({
          ...productsAddData,
          product_specs: {
            ...productsAddData.product_specs,
            general_feature: {
              ...productsAddData.product_specs.general_feature,
              [name]: value,
            },
          },
        });
      } else if (name == "warranty_available" || name == "duration") {
        setProductsAddData({
          ...productsAddData,
          product_specs: {
            ...productsAddData.product_specs,
            electronic_warranty: {
              ...productsAddData.product_specs.electronic_warranty,
              [name]: value,
            },
          },
        });
      }
    } else {
      if (name == "mainbrand") {
        name = "brand";
      }
      setProductsAddData({ ...productsAddData, [name]: value });
    }
  };
  const handelRefrigeratorAddChange = (e) => {
    let { name, value, type } = e.target;
    if (type == "number") {
      value = +value;
    }
    if (
      name == "brand" ||
      name == "gross_capacity" ||
      name == "gross_capacity_range" ||
      name == "door_type" ||
      name == "technology" ||
      name == "shelf_material" ||
      name == "no_of_shelves" ||
      name == "warranty_available" ||
      name == "duration" ||
      name == "main_unit" ||
      name == "compressor" ||
      name == "door_lock" ||
      name == "energy_rating"
    ) {
      if (name == "brand") {
        setRefrigeratorAddData({
          ...refrigeratorAddData,
          product_specs: {
            ...refrigeratorAddData.product_specs,
            key_features: {
              ...refrigeratorAddData.product_specs.key_features,
              [name]: value,
            },
          },
        });
      } else if (name == "shelf_material" || name == "no_of_shelves") {
        setRefrigeratorAddData({
          ...refrigeratorAddData,
          product_specs: {
            ...refrigeratorAddData.product_specs,
            refrigerator_features: {
              ...refrigeratorAddData.product_specs.refrigerator_features,
              [name]: value,
            },
          },
        });
      } else if (name == "warranty_available" || name == "duration") {
        setRefrigeratorAddData({
          ...refrigeratorAddData,
          product_specs: {
            ...refrigeratorAddData.product_specs,
            electronic_warranty: {
              ...refrigeratorAddData.product_specs.electronic_warranty,
              [name]: value,
            },
          },
        });
      } else if (
        name == "gross_capacity" ||
        name == "door_type" ||
        name == "gross_capacity_range" ||
        name == "technology"
      ) {
        setRefrigeratorAddData({
          ...refrigeratorAddData,
          product_specs: {
            ...refrigeratorAddData.product_specs,
            refrigerator_specification: {
              ...refrigeratorAddData.product_specs.refrigerator_specification,
              [name]: value,
            },
          },
        });
      } else if (name == "door_lock") {
        setRefrigeratorAddData({
          ...refrigeratorAddData,
          product_specs: {
            ...refrigeratorAddData.product_specs,
            convenience_features: {
              ...refrigeratorAddData.product_specs.convenience_features,
              [name]: value,
            },
          },
        });
      } else if (name == "energy_rating") {
        setRefrigeratorAddData({
          ...refrigeratorAddData,
          product_specs: {
            ...refrigeratorAddData.product_specs,
            power: {
              ...refrigeratorAddData.product_specs.power,
              [name]: value,
            },
          },
        });
      } else if (name == "main_unit" || name == "compressor") {
        setRefrigeratorAddData({
          ...refrigeratorAddData,
          product_specs: {
            ...refrigeratorAddData.product_specs,
            product_warranty: {
              ...refrigeratorAddData.product_specs.product_warranty,
              [name]: value,
            },
          },
        });
      }
    } else {
      if (name == "mainbrand") {
        name = "brand";
      }
      setRefrigeratorAddData({ ...refrigeratorAddData, [name]: value });
    }
  };
  const handelUserAddChange = (e) => {
    let { name, value, type } = e.target;
    if (type == "number") {
      value = +value;
    }
    if (name == "pincode" || name == "city" || name == "state") {
      setUserAddData({
        ...userAddData,
        address: { ...userAddData.address, [name]: value },
      });
    } else {
      setUserAddData({ ...userAddData, [name]: value });
    }
  };

  // All Adding functions

  const handelTvAddSubmit = (e) => {
    e.preventDefault();
    // console.log(productsAddData);

    axios("https://splendid-bear-cap.cyclic.app/products/tv", {
      method: "POST",
      data: productsAddData,
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        toast({
          title: "Product Added Successfully",
          description: `${res.data}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  const handelRefrigeratorAddSubmit = (e) => {
    e.preventDefault();

    axios("https://splendid-bear-cap.cyclic.app/products/refrigerator", {
      method: "POST",
      data: refrigeratorAddData,
      headers: {
        "content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        toast({
          title: "Product Added Successfully",
          description: `${res.data}`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) =>
        toast({
          title: "Error Occured",
          description: `${err.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      );
  };
  const handelUserAddSubmit = (e) => {
    e.preventDefault();

    if (userAddData.password.length < 6) {
      alert("password must be at least 6 characters");
    } else if (userAddData.mobile.length !== 10) {
      alert("mobile must be 10 characters");
    } else {
      axios("https://splendid-bear-cap.cyclic.app/users/register", {
        method: "POST",
        data: userAddData,
        headers: {
          "content-type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          toast({
            title: "Product Added Successfully",
            description: `${res.data.msg}`,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((err) =>
          toast({
            title: "Error Occured",
            description: `${err.message}`,
            status: "error",
            duration: 3000,
            isClosable: true,
          })
        );
    }
  };

  return (
    <>
      <Box
        w="100%"
        border="2px solid #F7F7F7"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        display="flex"
        justifyContent="space-between"
        pr="30px"
        gap={5}
      >
        <Box display="flex" gap={5}>
          <Img
            w="100px"
            h="60px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLK1eb8FMEoD5ePIJx-i2OHToVzBWjL4H29Q&usqp=CAU"
          ></Img>
          <Box alignItems="center" display="flex" flexDirection="column">
            <Text
              onClick={() => setPage("main")}
              fontWeight="700"
              fontSize="24px"
              color="#3168E6"
            >
              Admin
            </Text>
            <Text fontSize="16px" color="#888888">
              ShopQ_Mart
            </Text>
          </Box>
        </Box>
        <Box>
          <Link to="/">
            <Img w="200px" src={ShopQ} />
          </Link>
        </Box>
      </Box>
      <Box display={"flex"} gap={10}>
        <Button ref={btnRef} bgColor="#3EC" m="10px" w="200px" onClick={onOpen}>
          Options
        </Button>
        <Button bgColor="#3EC" m="10px" w="200px" onClick={onOpen}>
          <Link to="/">Back Home</Link>
        </Button>
      </Box>
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
                <MenuItem
                  onClick={() => handelClick("allOrders")}
                  icon={<ViewIcon />}
                >
                  View Orders
                </MenuItem>
                <MenuItem
                  onClick={() => handelClick("deleteOrders")}
                  icon={<EditIcon />}
                >
                  Delete Orders
                </MenuItem>
              </MenuList>
            </Menu>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
      {page == "main" ? (
        <Box h="100vh" display="flex" mt="100px" justifyContent="center">
          <Img
            w="50vh"
            h="50vh"
            src="https://thumbs.dreamstime.com/b/admin-icon-trendy-design-style-isolated-white-background-vector-simple-modern-flat-symbol-web-site-mobile-logo-app-135742404.jpg"
          ></Img>
        </Box>
      ) : (
        ""
      )}

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
            {data?.map((refrigerator, index) => {
              return (
                <Box
                  p="10px"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  key={index}
                >
                  <Img src={refrigerator.image}></Img>
                  <Text>product_name : {refrigerator.product_name}</Text>
                  <Text>brand : {refrigerator.brand}</Text>
                  <Text>delivery : {refrigerator.delivery}</Text>
                  <Text>discount : {refrigerator.discount}</Text>
                  <Text>emi : {refrigerator.emi}</Text>
                  <Text>image : {refrigerator.image}</Text>
                  <Text>mrp : {refrigerator.mrp}</Text>
                  <Text>items_left : {refrigerator.items_left}</Text>
                  <Text>price : {refrigerator.price}</Text>
                  <Text>prod_type : {refrigerator.prod_type}</Text>

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
                            handelRefrigeratorEdit(refrigerator._id);
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
                            type={editKey == "price" ? "number" : "text"}
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
                    onClick={() => handelRefrigeratorDelete(refrigerator._id)}
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
            {data?.map((washingmachine, index) => {
              return (
                <Box
                  p="10px"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  key={index}
                >
                  <Img src={washingmachine.image}></Img>
                  <Text>product_name : {washingmachine.product_name}</Text>
                  <Text>brand : {washingmachine.brand}</Text>
                  <Text>delivery : {washingmachine.delivery}</Text>
                  <Text>discount : {washingmachine.discount}</Text>
                  <Text>emi : {washingmachine.emi}</Text>
                  <Text>image : {washingmachine.image}</Text>
                  <Text>mrp : {washingmachine.mrp}</Text>
                  <Text>items_left : {washingmachine.items_left}</Text>
                  <Text>price : {washingmachine.price}</Text>
                  <Text>prod_type : {washingmachine.prod_type}</Text>

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

                            handelWashingmachineEdit(washingmachine._id);
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
                            type={editKey == "price" ? "number" : "text"}
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
                    onClick={() =>
                      handelWashingmachineDelete(washingmachine._id)
                    }
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
            {data?.map((laptop, index) => {
              return (
                <Box
                  p="10px"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  key={index}
                >
                  <Img src={laptop.image}></Img>
                  <Text>product_name : {laptop.product_name}</Text>
                  <Text>brand : {laptop.brand}</Text>
                  <Text>delivery : {laptop.delivery}</Text>
                  <Text>discount : {laptop.discount}</Text>
                  <Text>emi : {laptop.emi}</Text>
                  <Text>image : {laptop.image}</Text>
                  <Text>mrp : {laptop.mrp}</Text>
                  <Text>items_left : {laptop.items_left}</Text>
                  <Text>price : {laptop.price}</Text>
                  <Text>prod_type : {laptop.prod_type}</Text>

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

                            handelLaptopEdit(laptop._id);
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
                            type={editKey == "price" ? "number" : "text"}
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
                    onClick={() => handelLaptopDelete(laptop._id)}
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

      {page == "AddTvProduct" ? (
        <Box display="flex" justifyContent="center">
          <Box w={["100%", "70%", "50%"]} p="10%" border="2px solid red">
            <form onSubmit={handelTvAddSubmit}>
              <FormControl
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <FormLabel>product_name</FormLabel>
                <Input
                  name="product_name"
                  value={productsAddData.product_name}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter product_name"
                  type="text"
                />
                <FormLabel>product_id</FormLabel>
                <Input
                  name="product_id"
                  value={productsAddData.product_id}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter product_id"
                  type="number"
                />
                <FormLabel>mainbrand</FormLabel>
                <Input
                  name="mainbrand"
                  value={productsAddData.brand}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter brand"
                  type="text"
                />
                <FormLabel>image</FormLabel>
                <Input
                  name="image"
                  value={productsAddData.image}
                  onChange={handelTvAddChange}
                  isRequired
                  type="url"
                  placeholder="enter image"
                />
                <FormLabel>mrp</FormLabel>
                <Input
                  name="mrp"
                  value={productsAddData.mrp}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter mrp"
                  type="number"
                />
                <FormLabel>discount</FormLabel>
                <Input
                  name="discount"
                  value={productsAddData.discount}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter discount"
                  type="text"
                />
                <FormLabel>price</FormLabel>
                <Input
                  name="price"
                  value={productsAddData.price}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter price"
                  type="number"
                />
                <FormLabel>prod_type</FormLabel>
                <Input
                  name="prod_type"
                  value={productsAddData.prod_type}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter prod_type"
                  type="text"
                />
                <FormLabel>rating</FormLabel>
                <Input
                  name="rating"
                  value={productsAddData.rating}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter rating"
                  type="number"
                />
                <FormLabel>product_desc</FormLabel>
                <Input
                  name="product_desc"
                  value={productsAddData.product_desc}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter product_desc"
                  type="text"
                />
                <FormLabel>items_left</FormLabel>
                <Input
                  name="items_left"
                  value={productsAddData.items_left}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter items_left"
                  type="number"
                />
                <FormLabel>emi</FormLabel>
                <Input
                  name="emi"
                  value={productsAddData.emi}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter emi"
                  type="number"
                />
                <FormLabel>shipping</FormLabel>
                <Input
                  name="shipping"
                  value={productsAddData.shipping}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter shipping"
                  type="text"
                />
                <FormLabel>cod</FormLabel>
                <Input
                  name="cod"
                  value={productsAddData.cod}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter cod"
                  type="text"
                />
                <FormLabel>delivery</FormLabel>
                <Input
                  name="delivery"
                  value={productsAddData.delivery}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter delivery"
                  type="text"
                />
                <FormLabel>sold_by_location</FormLabel>
                <Input
                  name="sold_by_location"
                  value={productsAddData.sold_by_location}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter sold_by_location"
                  type="text"
                />
                <FormLabel>sold_by</FormLabel>
                <Input
                  name="sold_by"
                  value={productsAddData.sold_by}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter sold_by"
                  type="text"
                />
                <FormLabel>brand</FormLabel>
                <Input
                  name="brand"
                  value={productsAddData.product_specs.key_features.brand}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter brand"
                  type="text"
                />{" "}
                <FormLabel>ptype</FormLabel>
                <Input
                  name="ptype"
                  value={productsAddData.product_specs.tv_specifications.ptype}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter ptype"
                  type="text"
                />{" "}
                <FormLabel>screen_size_range</FormLabel>
                <Input
                  name="screen_size_range"
                  value={
                    productsAddData.product_specs.tv_specifications
                      .screen_size_range
                  }
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter screen_size_range"
                  type="text"
                />{" "}
                <FormLabel>display_size</FormLabel>
                <Input
                  name="display_size"
                  value={
                    productsAddData.product_specs.tv_specifications.display_size
                  }
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter display_size"
                  type="text"
                />{" "}
                <FormLabel>functionality</FormLabel>
                <Input
                  name="functionality"
                  value={
                    productsAddData.product_specs.tv_specifications
                      .functionality
                  }
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter functionality"
                  type="text"
                />{" "}
                <FormLabel>display_resolution</FormLabel>
                <Input
                  name="display_resolution"
                  value={
                    productsAddData.product_specs.general_feature
                      .display_resolution
                  }
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter display_resolution"
                  type="text"
                />{" "}
                <FormLabel>usb_port</FormLabel>
                <Input
                  name="usb_port"
                  value={productsAddData.product_specs.connectivity.usb_port}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter usb_port"
                  type="text"
                />
                <FormLabel>hdmi_ports</FormLabel>
                <Input
                  name="hdmi_ports"
                  value={productsAddData.product_specs.connectivity.hdmi_ports}
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter hdmi_ports"
                  type="text"
                />
                <FormLabel>warranty_available</FormLabel>
                <Input
                  name="warranty_available"
                  value={
                    productsAddData.product_specs.electronic_warranty
                      .warranty_available
                  }
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter warranty_available"
                  type="text"
                />
                <FormLabel>duration</FormLabel>
                <Input
                  name="duration"
                  value={
                    productsAddData.product_specs.electronic_warranty.duration
                  }
                  onChange={handelTvAddChange}
                  isRequired
                  placeholder="enter duration"
                  type="text"
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
      {page == "AddRefrigeratorProduct" ? (
        <Box display="flex" justifyContent="center">
          <Box w={["100%", "70%", "50%"]} p="10%" border="2px solid red">
            <form onSubmit={handelRefrigeratorAddSubmit}>
              <FormControl
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <FormLabel>product_name</FormLabel>
                <Input
                  name="product_name"
                  value={refrigeratorAddData.product_name}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter product_name"
                  type="text"
                />
                <FormLabel>product_id</FormLabel>
                <Input
                  name="product_id"
                  value={refrigeratorAddData.product_id}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter product_id"
                  type="number"
                />
                <FormLabel>mainbrand</FormLabel>
                <Input
                  name="mainbrand"
                  value={refrigeratorAddData.brand}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter brand"
                  type="text"
                />
                <FormLabel>image</FormLabel>
                <Input
                  name="image"
                  value={refrigeratorAddData.image}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  type="url"
                  placeholder="enter image"
                />
                <FormLabel>mrp</FormLabel>
                <Input
                  name="mrp"
                  value={refrigeratorAddData.mrp}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter mrp"
                  type="number"
                />
                <FormLabel>discount</FormLabel>
                <Input
                  name="discount"
                  value={refrigeratorAddData.discount}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter discount"
                  type="text"
                />
                <FormLabel>price</FormLabel>
                <Input
                  name="price"
                  value={refrigeratorAddData.price}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter price"
                  type="number"
                />
                <FormLabel>prod_type</FormLabel>
                <Input
                  name="prod_type"
                  value={refrigeratorAddData.prod_type}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter prod_type"
                  type="text"
                />
                <FormLabel>rating</FormLabel>
                <Input
                  name="rating"
                  value={refrigeratorAddData.rating}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter rating"
                  type="number"
                />
                <FormLabel>product_desc</FormLabel>
                <Input
                  name="product_desc"
                  value={refrigeratorAddData.product_desc}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter product_desc"
                  type="text"
                />
                <FormLabel>items_left</FormLabel>
                <Input
                  name="items_left"
                  value={refrigeratorAddData.items_left}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter items_left"
                  type="number"
                />
                <FormLabel>emi</FormLabel>
                <Input
                  name="emi"
                  value={refrigeratorAddData.emi}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter emi"
                  type="number"
                />
                <FormLabel>shipping</FormLabel>
                <Input
                  name="shipping"
                  value={refrigeratorAddData.shipping}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter shipping"
                  type="text"
                />
                <FormLabel>cod</FormLabel>
                <Input
                  name="cod"
                  value={refrigeratorAddData.cod}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter cod"
                  type="text"
                />
                <FormLabel>delivery</FormLabel>
                <Input
                  name="delivery"
                  value={refrigeratorAddData.delivery}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter delivery"
                  type="text"
                />
                <FormLabel>sold_by_location</FormLabel>
                <Input
                  name="sold_by_location"
                  value={refrigeratorAddData.sold_by_location}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter sold_by_location"
                  type="text"
                />
                <FormLabel>sold_by</FormLabel>
                <Input
                  name="sold_by"
                  value={refrigeratorAddData.sold_by}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter sold_by"
                  type="text"
                />
                <FormLabel>brand</FormLabel>
                <Input
                  name="brand"
                  value={refrigeratorAddData.product_specs.key_features.brand}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter brand"
                  type="text"
                />{" "}
                <FormLabel>technology</FormLabel>
                <Input
                  name="technology"
                  value={
                    refrigeratorAddData.product_specs.refrigerator_specification
                      .technology
                  }
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter technology"
                  type="text"
                />{" "}
                <FormLabel>door_type</FormLabel>
                <Input
                  name="door_type"
                  value={
                    refrigeratorAddData.product_specs.refrigerator_specification
                      .door_type
                  }
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter door_type"
                  type="text"
                />{" "}
                <FormLabel>gross_capacity_range</FormLabel>
                <Input
                  name="gross_capacity_range"
                  value={
                    refrigeratorAddData.product_specs.refrigerator_specification
                      .gross_capacity_range
                  }
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter gross_capacity_range"
                  type="text"
                />{" "}
                <FormLabel>gross_capacity</FormLabel>
                <Input
                  name="gross_capacity"
                  value={
                    refrigeratorAddData.product_specs.refrigerator_specification
                      .gross_capacity
                  }
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter gross_capacity"
                  type="text"
                />{" "}
                <FormLabel>shelf_material</FormLabel>
                <Input
                  name="shelf_material"
                  value={
                    refrigeratorAddData.product_specs.refrigerator_features
                      .shelf_material
                  }
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter shelf_material"
                  type="text"
                />{" "}
                <FormLabel>no_of_shelves</FormLabel>
                <Input
                  name="no_of_shelves"
                  value={
                    refrigeratorAddData.product_specs.refrigerator_features
                      .no_of_shelves
                  }
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter no_of_shelves"
                  type="text"
                />{" "}
                <FormLabel>main_unit</FormLabel>
                <Input
                  name="main_unit"
                  value={
                    refrigeratorAddData.product_specs.product_warranty.main_unit
                  }
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter main_unit"
                  type="text"
                />{" "}
                <FormLabel>compressor</FormLabel>
                <Input
                  name="compressor"
                  value={
                    refrigeratorAddData.product_specs.product_warranty
                      .compressor
                  }
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter compressor"
                  type="text"
                />{" "}
                <FormLabel>energy_rating</FormLabel>
                <Input
                  name="energy_rating"
                  value={refrigeratorAddData.product_specs.power.energy_rating}
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter energy_rating"
                  type="number"
                />
                <FormLabel>door_lock</FormLabel>
                <Input
                  name="door_lock"
                  value={
                    refrigeratorAddData.product_specs.convenience_features
                      .door_lock
                  }
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter door_lock"
                  type="text"
                />
                <FormLabel>warranty_available</FormLabel>
                <Input
                  name="warranty_available"
                  value={
                    refrigeratorAddData.product_specs.electronic_warranty
                      .warranty_available
                  }
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter warranty_available"
                  type="text"
                />
                <FormLabel>duration</FormLabel>
                <Input
                  name="duration"
                  value={
                    refrigeratorAddData.product_specs.electronic_warranty
                      .duration
                  }
                  onChange={handelRefrigeratorAddChange}
                  isRequired
                  placeholder="enter duration"
                  type="text"
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
      {page == "allOrders" ? (
        <Box p="0px 20px">
          <Box
            p="10px"
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            display="flex"
            flexDirection={["column", "column", "column", "row"]}
            justifyContent="space-evenly"
            justifyItems="center"
            alignItems="center"
            fontSize="20px"
            fontWeight="500"
            bgGradient="linear(to-r, green.100, pink.300)"
          >
            <Text>Index</Text>
            <Text>Product Image</Text>

            <Text>Product Price</Text>
            <Text> Total Quantity</Text>
            <Text>UserId</Text>

            <Text>Order Time</Text>

            <Text>Remove Product</Text>
          </Box>
          <SimpleGrid columns={1} spacing="40px">
            {data?.map((items, index) => {
              return (
                <Box
                  p="10px"
                  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  key={index}
                  display="flex"
                  flexDirection={["column", "column", "column", "row"]}
                  justifyContent="space-evenly"
                  justifyItems="center"
                  alignItems="center"
                >
                  <Text>{index + 1}</Text>
                  <Img src={items.image} />
                  <Text>{items.price}</Text>
                  <Text> {items.quantity}</Text>
                  <Text>{items.userId}</Text>

                  <Text>{items.updatedAt}</Text>

                  <Button
                    mt="8px"
                    onClick={() => handelCartItemDelete(items._id)}
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
    </>
  );
};

export default AdminPage;
