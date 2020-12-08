import React from "react";
import Dropdown from "./Dropdown";
import Popular from "./Popular";
import Queue from "./Queue";
import Time from "./Time";
import Bartenders from "./Bartenders";
import Serving from "./Serving";

// import Dropdown from "muicss/lib/react/dropdown";

export default function Landing(props) {
  return (
    <div>
      <Dropdown
        heading={"Welcome!"}
        paragraph={<p>Welcome to FooBar! We have a selection of premium beers for you to enjoy. Feel free to order your beers below and have a great evening!</p>}
      />
      <Dropdown
        heading={"Served today"}
        paragraph={<p>Welcome to FooBar! We have a selection of premium beers for you to enjoy. Feel free to order your beers below and have a great evening!</p>}
      />
      <Dropdown heading={"The queue"} paragraph={<Queue data={props.data} />} />
      <Dropdown heading={"Most popular beers"} paragraph={<Popular beers={props.beers} data={props.data} />} />
      <Dropdown
        heading={"Bartenders"}
        paragraph={<p>Welcome to FooBar! We have a selection of premium beers for you to enjoy. Feel free to order your beers below and have a great evening!</p>}
      />

      <section className="main-grid">
        <div className="big-button">
          <img src="cart2-04.png" className="big-icon" />
          <p>Buy beer</p>
        </div>
        <div className="big-button">
          <img src="icons-03.png" className="big-icon" />
          <p>Beer info</p>
        </div>
      </section>
    </div>
  );
}
