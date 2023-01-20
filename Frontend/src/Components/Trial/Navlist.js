import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Styles.css";
import { useNavigate } from "react-router-dom";
import { Image,Text } from "@chakra-ui/react";

const Navlist = () => {
  const navigate = useNavigate();
  return (
    <div className="navlist">
        <Image w={'90px'} h={'40px'} mt={'5px'} src={"https://images.shopclues.com/images/ui/madeinindia.png"}/>
      <ul>
        <li>
          MOBILES & MORE
          <ul className="dropdown">
            <li className="maintext">Smartphone</li>
            <li onClick={() => navigate("/")}>
              i kall
            </li>
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
            <li >
              Apples & Peers
            </li>
            <li>Avocado, Peach, Plum</li>
            <li>Banana,Melons & Coconut</li>
            <li>Dates</li>
            <li>Citrus, Mangoes & Graps</li>
            <li>Cherries, Berries</li>
            <li>Exotic Fruits</li>
            <li>Seasonal & Minor Fruits</li>
          </ul>
        </li>
        <li>
          WOMEN
          <ul className="dropdown">
            <li >Kitchenware</li>
            <li>Dining</li>
            <li onClick={() => navigate("/electronicProducts")}>Electricals</li>
            <li>Furniture</li>
            <li>Home Appliances</li>
            <li>Toys & Games</li>
            <li>Disposable</li>
            <li>Stationary</li>
            <li>Garden</li>
            <li>Pooja Needs</li>
          </ul>
        </li>
        <li>
          {/* <Link> */}
            HOME & KITCHEN
            <ul className="dropdown">
              <li>Mens</li>
              <li>Womens</li>
              <li>Boys</li>
              <li>Girls</li>
              <li>Junior Boys</li>
              <li>Infant</li>
            </ul>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link> */}
            APPLIANCES
            <ul className="dropdown">
              <li>Mobiles & Tablets</li>
              <li>TV & speakers</li>
              <li>Home Appliance</li>
              <li>Camera</li>
              <li>Kitchen Appliance</li>
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
            <li>Fine Jwellery </li>
            <li>Jwellery</li>
          </ul>
        </li>
        <li>
          GLOBAL SHOPPING
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
