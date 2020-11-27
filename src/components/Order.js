import React from "react";

export default function Order(props) {
  return (
    <form>
      <h2>Order beers</h2>
      <select name="beers" id="beers">
        <option value="1">+1-</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </form>
  );
}
