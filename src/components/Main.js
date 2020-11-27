import React from "react";
import Panel from "muicss/lib/react/panel";
import Button from "muicss/lib/react/button";
import Beer from "./Beer";
import Checkout from "./Checkout";
import Order from "./Order";

export default function Main(props) {
  console.log(props);
  const closing = props.data.bar.closingTime;
  const beerArray = props.beers;

  return (
    <Panel className="main-panel">
      <main className="dashboard">
        <p>{closing}</p>

        {beerArray.map((beer) => {
          return <Beer name={beer.name} />;
        })}
      </main>
      <Button />
      <Order />
      <Checkout />
      <Checkout />
      <Button color="primary">button</Button>
      <Checkout />
    </Panel>
  );
}
