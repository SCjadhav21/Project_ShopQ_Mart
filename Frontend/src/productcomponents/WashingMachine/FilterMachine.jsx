import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterMachine = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const initialCategory=searchParams.getAll("discount")

  const initialSort = searchParams.getAll("sort");

  const [discount, setDiscount] = useState([]);

  const [sort, setSort] = useState(initialSort[0] || "");

  const [brand, setBrand] = useState([]);

  const HandleSort = (e) => {
    setSort(e.target.value);
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
        <div className="inputbox">
          <h1>FILTER COMPONENT</h1>
        </div>
        <br />
        <hr />

        <div className="inputbox">
          <h1>Brand</h1>

          <div>
            <input
              type="checkbox"
              value="Godrej"
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
              value="Samsung"
              //checked={discount.includes("Sony")}
              onChange={handleFitterBrand}
            />
            <label> Samsung</label>
          </div>
        </div>
        <br/>
      <hr/>

        
        <div className="inputbox">
        <h1>Discount</h1>
          <div>
            <input
              type="checkbox"
              value="1%"
              checked={discount.includes("1%")}
              onChange={handleFitterDiscount}
            />
            <label> 1%</label>
          </div>
          <div>
            <input
              type="checkbox"
              value="8%"
              checked={discount.includes("8%")}
              onChange={handleFitterDiscount}
            />
            <label> 8%</label>
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
              value="10%"
              checked={discount.includes("10%")}
              onChange={handleFitterDiscount}
            />
            <label> 10%</label>
          </div>

          <div>
            <input
              type="checkbox"
              value="15%"
              checked={discount.includes("15%")}
              onChange={handleFitterDiscount}
            />
            <label> 15%</label>
          </div>
        </div>
        <br />
        <hr />

        <div  className="inputbox">
          <h1>Product Rating</h1>
          <div>
            <input type="checkbox" />
            <label> 3 & above</label>
          </div>

          <div>
            <input type="checkbox" />
            <label> 2 & above </label>
          </div>

          <div>
            <input type="checkbox" />
            <label> 1& above </label>
          </div>
        </div>
        <br />
        <hr />
      </div>

      
      <div onClick={HandleSort} className="inputbox" >
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

export default FilterMachine;
