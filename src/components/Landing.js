<<<<<<< HEAD
import React, { useState } from "react";
// import Dropdown from "muicss/lib/react/dropdown";

export default function Landing() {
  const [isActive, setActive] = useState("false");
  const [isPlus, setPlus] = useState("+");
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handlePlusOne = () => {
    setPlus(!isPlus);
  };

  return (
    <section>
      <div className="welcome" onClick={handleToggle}>
        <section>
          <div className="welcome-container" onClick={handlePlusOne}>
            <h2>
              Welcome!
              <span className="plus-minus">{isPlus ? "+" : "-"}</span>
            </h2>
            <p className={isActive ? "test1" : "test2"}>
              Welcome to FooBar! We have a selection of premium beers for you to enjoy. Feel free to order your beers below and have a great evening!
            </p>
          </div>
        </section>
      </div>
      <section>
        <div className="served-today" onClick={handleToggle}>
          <h2>
            Served today <span className="plus-minus">{isPlus ? "+" : "-"}</span>
          </h2>
          <p className={isActive ? "test1" : "test2"}></p>
        </div>
      </section>
    </section>
  );
}

//    <Dropdown className="" label="WELCOME!">
// <p className="">
// Welcome to FooBar! We have a selection of premium beers for you to enjoy. Feel free to order your beers below and have a great evening!
// </p>
// </Dropdown>
// <Dropdown className="" label="Served today">
// <p>Blabla yeah yeah</p>
// </Dropdown>
// <Dropdown className="" label="Customers in line">
// <p>Blabla yeah yeah</p>
// </Dropdown>
// <Dropdown className="" label="Most popular beer">
// <p>Blabla yeah yeah</p>
// </Dropdown>
=======
import React from "react";
import Dropdown from "./Dropdown";
import Popular from "./Popular";
import Queue from "./Queue";
import Bartenders from "./Bartenders";
// import Serving from "./Serving";
import AllBeers from "./AllBeers";
import WelcomeDropdown from "./Welcome";
import Time from "./Time";

// import Dropdown from "muicss/lib/react/dropdown";


 

export default function Landing(props) {
  const mediaQueryLaptop = window.matchMedia("(min-width: 1000px)");

  if (mediaQueryLaptop.matches) {
    return (
      <>
      <div className="dash-container">
      <section className="dash-comp welcome hidden">
        <h1>Welcome to<br/><span>foobar!</span></h1>
        <p>Welcome to FooBar! We have a selection of premium beers for you to enjoy. Feel free to order your beers below and have a great evening!</p>
      </section>
      <section className="dash-comp popular">
      <h2>Most popular beers</h2>
      <Popular beers={props.beers} data={props.data} />
      </section>
      <section className="dash-comp bartenders hidden">
       <h2>The bartenders</h2>
       <Bartenders data={props.data} />
      </section>
      <section className="dash-comp closing-display closing">
      <Time data={props.data} />
      </section>
      <section className="dash-comp queue hidden">
      {/* <h2>Served today</h2>
        <p className="bold">XXX</p> */}
        <h2>The queue</h2>
        <Queue data={props.data}/>
      </section>
      <div className="dash-comp beer-info">
    <AllBeers beers={props.beers} />
    </div>
      </div>
    </>
    );
  } else {
  return (
    <>
    <div className="hidden">
      <WelcomeDropdown
        heading={"Welcome!"}
        paragraph={<p>Welcome to FooBar! We have a selection of premium beers for you to enjoy. Feel free to order your beers below and have a great evening!</p>}
      />
      <Dropdown heading={"served today"}/>
      {/* <Dropdown heading={"Currently serving"} paragraph={<Serving data={props.data} />} /> */}
      <Dropdown heading={"The queue"} paragraph={<Queue data={props.data} />} />
      <Dropdown heading={"Most popular beers"} paragraph={<Popular beers={props.beers} data={props.data} />} />
      <Dropdown heading={"The bartenders"} paragraph={<Bartenders data={props.data} />} />

      <section className="main-grid">
        <div className="big-button">
          <img src="cart2-04.png" className="big-icon" alt="cart icon" />
          <p>Buy beer</p>
        </div>
        <div className="big-button">
          <img src="icons-03.png" className="big-icon" alt="beer icon" />
          <p>Beer info</p>
        </div>
      </section>
      </div>
      <div className="dash-comp">
      <AllBeers beers={props.beers} />
      </div>
    </>
  );
  }
}
>>>>>>> 252f21fc37ee9a8f6f85b44ba205be9b4906ae77
