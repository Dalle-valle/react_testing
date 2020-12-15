import React from "react";
import Time from "./Time";

export default function Header(props) {
  return (
    <header>
      <img src="foobarlogo.png" className="logo" alt="logo" />
      <section className="dash-comp closing-display"> 
      <Time data={props.data} />
      </section>
    </header>
  );
}
