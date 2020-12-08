import React from "react";

export default function Bartenders(props) {
  return (
    <section className="bartenders-display">
      {props.data.bartenders.map((person) => {
        return (
          <div>
            <img className="astronaut" src="https://freedesignfile.com/upload/2017/08/astronaut-icon-vector.png" alt="bartender" />
            <p>{person.name}</p>
          </div>
        );
      })}
    </section>
  );
}
