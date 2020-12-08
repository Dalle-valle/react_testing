import React from "react";

export default function Beer(props) {
  return (
    <div>
      <h2 className="beer-holder">{props.name}</h2>
      <input type="number" value={props.amount} onChange={(evt) => props.onUpdate(props.name, evt)} />
    </div>
  );
}
