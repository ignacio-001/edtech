import React from "react";

const Menu = ({ item, handleChange }) => {
  return (
    <>
      <div>
        <button onClick={() => handleChange(item, 1)}>+</button>
        {item.title}
        <button onClick={() => handleChange(item, -1)}>-</button>
        {item.amount}
        <span>  </span>
        {item.tprice}
      </div>
    </>
  );
};

export default Menu;
