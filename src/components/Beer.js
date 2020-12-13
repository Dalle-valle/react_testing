import React from "react";

export default function Beer(props) {
  const beerName = "w";
  const beerDesc = "w";

  return (
    <div className="form-wrapper">
      <h2 className="beer-name">{props.name}</h2>
      <div className="buttons">
        <button type="button" onClick={(evt) => props.onUpdate(props.name, evt)} value={props.amount - 1}>
          -
        </button>
        <input className="btn-input" type="number" value={props.amount} onChange={(evt) => props.onUpdate(props.name, evt)} />
        <button type="button" onClick={(evt) => props.onUpdate(props.name, evt)} value={Number(props.amount) + 1}>
          +
        </button>
      </div>
    </div>
  );
}
