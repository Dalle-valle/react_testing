import React, { useState } from "react";

export default function BeerDropdown(props) {
  const [isActive, setActive] = useState("false");
  const [isPlus, setPlus] = useState("+");
  const addIt = "+";
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handlePlusOne = () => {
    setPlus(!isPlus);
  };

  const thisBeer = props.prices.filter((beer) => beer.name === props.name);
  const beerPrice = thisBeer[0] ? thisBeer[0].price : "";
  // console.log(beerPrice);

  return (
    <div className="one-beer" onClick={handleToggle}>
      <div className="beer-container" onClick={handlePlusOne}>
        <h2>
          {props.name}
          <span className="plus-minus">{isPlus ? "+" : "-"}</span>
        </h2>
        <p>{props.cat}</p>
        <div class="beer-alc">
          <p>Alcohol {props.vol}% </p>
          <p className="beer-price">{beerPrice} DKK</p>
        </div>
        <div className={isActive ? "hidden" : "block"}>
          <h3 className="beer-title">Aroma</h3>
          <p>{props.aroma}</p>

          <h3 className="beer-title">Appearance</h3>
          <p>{props.appearance}</p>

          <h3 className="beer-title">Flavor</h3>
          <p>{props.flavor}</p>

          <h3 className="beer-title">Mouthfeel</h3>
          <p>{props.mouthfeel}</p>

          <h3 className="beer-title">Overall impression</h3>
          <p>{props.overall}</p>
        </div>
      </div>
    </div>
  );
}
