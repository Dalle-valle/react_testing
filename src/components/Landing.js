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
    <div>
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
    </div>
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
