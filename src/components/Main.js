import React from "react";
import Panel from "muicss/lib/react/panel";
import Button from "muicss/lib/react/button";
import Beer from "./Beer";
import Checkout from "./Checkout";
import Order from "./Order";
import { post } from "./rest";
import Landing from "./Landing";
import Header from "./Header";

export default function Main(props) {
  console.log(props);

  const closing = props.data.bar.closingTime;

  function submit(e) {
    e.preventDefault();
    const payload = props.orders.filter((order) => order.amount > 0);
    console.log(payload);
    post(payload, console.log);
  }

  // new array that will contain no duplicates
  const cleanArr = [];

  // loop through each beer to find duplicates
  props.orders.forEach((obj) => {
    // check if duplicated
    if (cleanArr.some((beer) => beer.name === obj.name)) {
      console.log("findes");
    } else {
      // else push all non duplicates to the clean array
      console.log("findes ikke");
      cleanArr.push(obj);
    }
  });

  return (
    <main className="main-panel">
      <Header />
      <Landing />
      <h2 className="intro-heading">
        Welcome to Foobar <br />
        May we take your order?
      </h2>

      <form className="form" onSubmit={submit}>
        {cleanArr.map((beer, index) => {
          return <Beer key={index} name={beer.name} amount={beer.amount} onUpdate={props.orderChanged} />;
        })}
        <h2>Current Order</h2>
        {cleanArr
          .filter((order) => order.amount > 0)
          .map((beer, index) => {
            return (
              <p className="order-text" key={index}>
                {beer.name} x {beer.amount}
              </p>
            );
          })}
        <Order />
      </form>
    </main>
  );
}
