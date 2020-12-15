import React from "react";

import Beer from "./Beer";
import Checkout from "./Checkout";
import Order from "./Order";
import { post } from "./rest";
import Header from "./Header";
import Landing from "./Landing";
import Nav from "./Nav";

export default function Main(props) {
  function submit(e) {
    e.preventDefault();
    const payload = props.orders.filter((order) => order.amount > 0);
    console.log(payload);
    post(payload, console.log);
  }

  return (
    <main className="dashboard">
      <Header data={props.data} />
      <Nav />
      <Landing data={props.data} beers={props.beers} className="" />
      <form onSubmit={submit}>
        {props.orders.map((beer) => {
          return <Beer name={beer.name} amount={beer.amount} onUpdate={props.orderChanged} />;
        })}
        <Checkout className="checkout-1" />
      </form>
    </main>
  );
}
