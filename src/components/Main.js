import React from "react";
import Panel from "muicss/lib/react/panel";
import Button from "muicss/lib/react/button";
import Beer from "./Beer";
import Checkout from "./Checkout";
import Order from "./Order";
import { post } from "./rest";

export default function Main(props) {
  console.log(props);

  const closing = props.data.bar.closingTime;

  function submit(e) {
    e.preventDefault();
    const payload = props.orders.filter((order) => order.amount > 0);
    console.log(payload);
    post(payload, console.log);
  }

  return (
    <Panel className="main-panel">
      <main className="dashboard">
        <p>{closing}</p>
        <form onSubmit={submit}>
          {props.orders.map((beer) => {
            return <Beer name={beer.name} amount={beer.amount} onUpdate={props.orderChanged} />;
          })}
          <Order />
        </form>
      </main>
    </Panel>
  );
}
