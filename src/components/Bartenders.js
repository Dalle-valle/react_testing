import React from "react";

export default function Bartenders(props) {
  return (
    <div className="bartenders-container">
      {props.data.bartenders.map((person) => {
        return (
          <figure class="astronaut-container">
            <img className="astronaut" src="https://freedesignfile.com/upload/2017/08/astronaut-icon-vector.png" alt="bartender" />
            <figcaption>{person.name}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
