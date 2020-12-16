import React from "react";

export default function Nav(props) {
  const mediaQueryLaptop = window.matchMedia("(min-width: 1000px)");

  if (mediaQueryLaptop.matches) {
    //fetching svg
    fetch("nav.svg")
      .then((response) => response.text())
      .then((svgData) => {
        document.querySelector(".nav-svg-container-1").innerHTML = svgData;
      });

    return (
      <nav>
        <img src="foobarlogo.png" className="logo" alt="logo" />
        <div className="nav-svg-container-1"></div>
        <ul>
          <li onClick={() => props.changePage("home")}>
            <img src="homeicon.png" className="nav-icon" alt="home icon" />
          </li>
          <li onClick={() => props.changePage("beer")}>
            <img src="icons-03.png" className="nav-icon" alt="nav icon" />
          </li>
          <li onClick={() => props.changePage("buy")}>
            <img src="cart2-04.png" className="nav-icon" alt="cart icon" />
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul>
          <li>
            <img src="homeicon.png" className="nav-icon" alt="home icon" />
          </li>
          <li>
            <img src="icons-03.png" className="nav-icon" alt="nav icon" />
          </li>
          <li>
            <img src="cart2-04.png" className="nav-icon" alt="cart icon" />
          </li>
        </ul>
      </nav>
    );
  }
}
