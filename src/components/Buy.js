import React from "react";
import Beer from "./Beer";
import { checkPrice } from "./rest";

export default function Buy(props) {
  const cleanArr = [];

  // loop through each beer to find duplicates
  props.orders.forEach((obj) => {
    // check if duplicated
    //console.log(obj);
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
        return (
          <Beer
            key={index}
            prices={props.prices}
            info={props.beers.filter((item) => item.name === beer.name)}
            changePage={props.changePage}
            name={beer.name}
            amount={beer.amount}
            onUpdate={props.orderChanged}
          />
        );
      })}

      <div className="order-list-container">
        <h2>Your Order</h2>
        {cleanArr
          .filter((order) => order.amount > 0)
          .map((beer, index) => {
            return (
              <div className="order-list">
                <p className="bold" key={index}>
                  {beer.amount} x
                </p>
                <p>{beer.name}</p>
              </div>
            );
          })}
      </div>
      {/* <button className="buttons" onClick={() => setStep(1)}>
        Proceed
      </button> */}
    </>
  );
}
