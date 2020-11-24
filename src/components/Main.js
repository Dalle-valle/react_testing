import React from "react";
import Panel from "muicss/lib/react/panel";
import Button from "muicss/lib/react/button";
import Beer from "./Beer";

export default function Main(props) {
  console.log(props);
  const closing = props.data.bar.closingTime;
  const beerArray = props.beers;

  return (
    <Panel>
      <main>
        <p>{closing}</p>
        {beerArray.map((beer) => {
          return <Beer name={beer.name} />;
        })}
      </main>
    </Panel>
  );
}
