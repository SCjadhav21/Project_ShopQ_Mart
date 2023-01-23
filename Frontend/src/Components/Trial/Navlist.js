import { Link, Navigate, NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { Image, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Navlist = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(false);
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
          setData(true);
        }
      })

      .catch((err) => console.error(err));
  };
  useEffect(() => {
    checkAuth();
  });
  const AuthorisedOrNot = () => {
    let token = localStorage.getItem("token");
    if (!token) {
      alert("Please Login First");
    } else if (data) {
      alert("You are Not Authorized");
    } else {
      setGoadmin(true);
    }
  };
  if (goadmin) {
    return <Navigate to="/adminpage" />;
  }
  return (
    <div className="navlist">
      <Image
        w={"90px"}
        h={"40px"}
        mt={"5px"}
        src={"https://images.shopclues.com/images/ui/madeinindia.png"}
      />
      <ul>
        <li>
          MOBILES & MORE
          <ul className="dropdown">
            <li className="maintext">Smartphone</li>
            <li onClick={() => navigate("/refrigerator")}>i kall</li>
            <li>MI</li>
            <li>Realme</li>
            <li>Samsung</li>
            <li onClick={() => navigate("/")}>vivo</li>
            <li>Apple</li>
            <li>Techno</li>
            <li onClick={() => navigate("/")}> Xiomi</li>
          </ul>
          {/* <ul className="dropdown">
            <li className="maintext">Smartphone</li>
            <li onClick={() => navigate("/")}>
              Fruits & Vegetables
            </li>
            <li>Dairy & Bakery</li>
            <li>Staples</li>
            <li>Snacks & Branded foods</li>
            <li onClick={() => navigate("/")}>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li onClick={() => navigate("/")}> Beauty</li>
          </ul> */}
        </li>
        <li>
          MEN
          <ul className="dropdown">
            <li>T-Shirt</li>
            <li>Shirt</li>
            <li>Jeans</li>
            <li>Cargos</li>
            <li>Trousers</li>
            <li>Track Pants</li>
            <li>Jacket</li>
            <li>Winter wear</li>
            <li>Inner Sleepwear</li>
          </ul>
        </li>
        <li>
          WOMEN
          <ul className="dropdown">
            <li>Saree</li>
            <li>Kurta</li>
            <li onClick={() => navigate("/electronicProducts")}>Lehnga</li>
            <li>Tops & Teas</li>
            <li>Skirts</li>
            <li>Bra</li>
            <li>Penties</li>
            <li>Lingerie sets</li>
            <li>Garden</li>
            <li>Shap wear</li>
          </ul>
        </li>
        <li>
          {/* <Link> */}
          HOME & KITCHEN
          <ul className="dropdown">
            <li>Dinner Set </li>
            <li>Cookware</li>
            <li>Container Sets</li>
            <li>Kitchen tools</li>
            <li>Lunch box</li>
            <li>Share Food</li>
          </ul>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link> */}
          APPLIANCES
          <ul className="dropdown">
            <li>Mobiles & Tablets</li>
            <li onClick={() => navigate("/tv")}>TV & speakers</li>
            <li onClick={() => navigate("/refrigerator")}>Refrigerator</li>
            <li onClick={() => navigate("/laptop")}>Laptop</li>
            <li onClick={() => navigate("/washingmachine")}>WashingMachine</li>
            <li>Smart Devices</li>
            <li>Phones</li>
            <li>Office Products</li>
            <li>Electronic Musical Instruments</li>
          </ul>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link> */}
          SPORTS & MORE
          <ul className="dropdown">
            <li>Make Up</li>
            <li>Skincare</li>
            <li>Personal Care</li>
            <li>Fragrances</li>
            <li>Mom & Baby</li>
            <li>Mens Grooming</li>
            <li>Wellness</li>
          </ul>
          {/* </Link> */}
        </li>
        <li>
          ESSENTIALS
          <ul className="dropdown">
            <li>Fine Jwellery </li>
            <li>Jwellery</li>
          </ul>
        </li>
        <li>
          OFFERS
          <ul className="dropdown">
            <li>All top OFFERS</li>
            <li>Jwellery</li>
            <li>Cloths</li>
            <li>Season Essentials</li>
          </ul>
        </li>
        <li onClick={AuthorisedOrNot}>
          ADMIN PAGE
          <ul className="dropdown">
            {/* <li>Fine Jwellery </li>
            <li>Jwellery</li> */}
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Navlist;
