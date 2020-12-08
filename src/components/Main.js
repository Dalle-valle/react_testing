import React from "react";

import Beer from "./Beer";

import Order from "./Order";
import { post } from "./rest";
import Header from "./Header";
import Landing from "./Landing";
import MobileNav from "./MobileNav";

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
      <Landing data={props.data} beers={props.beers} />
      <form onSubmit={submit} className="hidden">
        {props.orders.map((beer) => {
          return <Beer name={beer.name} amount={beer.amount} onUpdate={props.orderChanged} />;
        })}
        <Order />
      </form>
      <MobileNav />
    </main>
  );
}
