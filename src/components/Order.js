import React from "react";

import Beer from "./Beer";
import Checkout from "./Checkout";
import { post } from "./rest";
import Header from "./Header";
// import Landing from "./Landing";
import Home from "./Home";
import Info from "./Info";
import BuyBeer from "./BuyBeer";
import Nav from "./Nav";
import BuyDropdown from "./BuyDropdown";


export default function Order(props) {
  
  // new array that will contain no duplicates
  const cleanArr = [];

  // loop through each beer to find duplicates
  props.orders.forEach((obj) => {
    // check if duplicated
    if (cleanArr.some((beer) => beer.name === obj.name)) {
      // console.log("exists");
    } else {
      // else push all non duplicates to the clean array
      // console.log("doesnt exist");
      cleanArr.push(obj);
    }
  });

  return (
    <>
       {cleanArr.map((beer, index) => {
          return <Beer key={index} name={beer.name} amount={beer.amount} onUpdate={props.orderChanged} />;
        })}
        <h2>Order</h2>
        {cleanArr
          .filter((order) => order.amount > 0)
          .map((beer, index) => {
            return (
              <p className="order-text" key={index}>
                {beer.name} x {beer.amount}
              </p>
            );
          })} 
            </>
  );
}