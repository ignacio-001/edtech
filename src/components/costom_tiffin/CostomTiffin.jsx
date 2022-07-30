import React from "react";
import Menu from "./Menu";
import { useState ,useEffect} from "react";
import list from "../../data";
const CostomTiffin = () => {
  const [cart, setcart] = useState([
    {
      id: 1,
      title: "Roti",
      price: 5,
      tprice: 5,
      amount: 1,
    },
    {
      id: 2,
      title: "Vegetable",
      price: 20,
      tprice: 20,
      amount: 1,
    },
    {
      id: 3,
      title: "Rice",
      price: 10,
      tprice: 10,
      amount: 1,
    }
  ]);
  
  const [total, settotal] = useState(0);
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans +=  item.tprice));
    settotal(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr=cart ;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    arr[ind].tprice=arr[ind].price*arr[ind].amount;
     setcart([...arr]);
  };
  return (
    <>
      <nav />
      <div className="header_costom"></div>
      <div className="vendor">
        <div className="vendorpic">
          <img src="" alt="" />
        </div>
        <div className="tiffinoptions">
          {cart.map((item) => (
            <Menu handleChange={handleChange} item={item} />
          ))}
          <span>total ={total}</span>
        </div>
      </div>
    </>
  );
};

export default CostomTiffin;
