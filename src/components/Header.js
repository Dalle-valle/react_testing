import React from "react";
<<<<<<< HEAD

export default function Header() {
  return (
    <div className="header-container">
      <img src="foobarlogo.svg" alt="logo" />
      <div className="closingtime">
        <h2>We are closing in</h2>
      </div>
      ;
    </div>
=======
import Time from "./Time";

export default function Header(props) {
  return (
    <header>
      <img src="foobarlogo.png" className="logo" alt="logo" />
      <section className="dash-comp closing-display"> 
      <Time data={props.data} />
      </section>
    </header>
>>>>>>> 252f21fc37ee9a8f6f85b44ba205be9b4906ae77
  );
}
