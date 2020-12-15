import React from "react";

export default function Beer(props) {
<<<<<<< HEAD
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
=======
  return (
    <div>
      <h2 className="beer-holder">{props.name}</h2>
      <input type="number" value={props.amount} onChange={(evt) => props.onUpdate(props.name, evt)} />
>>>>>>> 252f21fc37ee9a8f6f85b44ba205be9b4906ae77
    </div>
  );
}
