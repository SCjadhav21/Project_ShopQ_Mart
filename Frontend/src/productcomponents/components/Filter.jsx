import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import "./produc.css"

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const initialCategory=searchParams.getAll("discount")

  // const initialSort = searchParams.getAll("sort");
  // const initialRating = searchParams.getAll("rating");

  const [discount, setDiscount] = useState([]);

  const [sort, setSort] = useState([]);

  const [brand, setBrand] = useState([]);
  const [rating, setRating] = useState([]);

  const HandleSort = (e) => {
    setSort(e.target.value);
  };

  const HandleRating = (e) => {
    setRating(e.target.value);
  };

  const handleFitterDiscount = (e) => {
    const newCategory = [...discount];

    if (newCategory.includes(e.target.value)) {
      // remove it
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }

    setDiscount(newCategory);
  };

  const handleFitterBrand = (e) => {
    const newBrand = [...brand];

    if (newBrand.includes(e.target.value)) {
      // remove it
      newBrand.splice(newBrand.indexOf(e.target.value), 1);
    } else {
      newBrand.push(e.target.value);
    }

    setBrand(newBrand);
  };

  

  useEffect(() => {
    let obj = {};
    obj.discount = discount;
    brand && (obj.brand = brand);
    sort && (obj.sort = sort);
    
   

    setSearchParams(obj);
  }, [discount, setSearchParams, sort, brand]);

  return (
    <div className="filtercss">
    
      <div>

      <div  className="inputbox">
      <h1 >FILTER COMPONENT</h1>
      </div>
      <br/>
      <hr/>


        {/*cal discount */}

        <div className="inputbox">
          <h1>Discount</h1>

          <div>
            <input
              type="checkbox"
              value="4%"
              checked={discount.includes("4%")}
              onChange={handleFitterDiscount}
            />
            <label> 4%</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="20%"
              checked={discount.includes("20%")}
              onChange={handleFitterDiscount}
            />
            <label> 20%</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="22%"
              checked={discount.includes("22%")}
              onChange={handleFitterDiscount}
            />
            <label> 22%</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="40%"
              checked={discount.includes("40%")}
              onChange={handleFitterDiscount}
            />
            <label> 40%</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="41%"
              checked={discount.includes("41%")}
              onChange={handleFitterDiscount}
            />
            <label> 41%</label>
          </div>
        </div>
        <br/>
      <hr/>

        {/* brand */}

        <div className="inputbox">
          <h1>Brand</h1>

          <div>
            <input
              type="checkbox"
              value="TCL"
              //checked={discount.includes("TCL")}
              onChange={handleFitterBrand}
            />
            <label> TCL</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="LG"
              //checked={discount.includes("LG")}
              onChange={handleFitterBrand}
            />
            <label> LG</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="Sony"
              //checked={discount.includes("Sony")}
              onChange={handleFitterBrand}
            />
            <label> Sony</label>
          </div>
        </div>
        <br/>
      <hr/>

        {/* rating */}

        {/* <div className="inputbox">
          <h1>Product Rating</h1>
          <div>
            <input type="checkbox" />
            <label> 3</label>
          </div>

          <div>
            <input type="checkbox" />
            <label> 5</label>
          </div>

          <div>
            <input type="checkbox" />
            <label> 4</label>
          </div>
        </div> */}

        <div onClick={HandleRating} className="inputbox">
      <h1>Rating</h1>
        <input
          type="radio"
          value="asc"
          name="sort"
          defaultChecked={sort === "asc"}
        />
        <label> 2 and above</label>
        <br />

        <input
          type="radio"
          value="desc"
          name="sort"
          defaultChecked={sort === "desc"}
        />
        <label>5 and below</label>
        <br />
      </div>


      </div>
      <br/>
      <hr/>
        

       
       
      <div onClick={HandleSort} className="inputbox">
      <h1>SORT COMPONENT</h1>
        <input
          type="radio"
          value="asc"
          name="sort"
          defaultChecked={sort === "asc"}
        />
        <label>Ascending</label>
        <br />

        <input
          type="radio"
          value="desc"
          name="sort"
          defaultChecked={sort === "desc"}
        />
        <label>Descending</label>
        <br />
      </div>


    </div>
  );
};

export default Filter;
