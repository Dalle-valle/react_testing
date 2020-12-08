import React from "react";
import Time from "./Time";

export default function Header(props) {
  return (
    <section class="main-grid">
      <img src="foobarlogo.png" className="logo" />
      <Time data={props.data} />
    </section>
  );
}
