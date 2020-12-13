import React from "react";

export default function Checkamazing() {
  const spaceIt = " ";
  return (
    <form className="checkout-1">
      <label htmlFor="smartname">Smart Name</label>
      <input type="text" name="smartname" />
      <label htmlFor="smartnumber">Smart Number</label>
      <input type="number" name="smartnumber" placeholder></input>
      <div className="datewrapper">
        <label htmlFor="expiry">expiry</label>
        <input type="number" name="expiry" />
        <label htmlFor="security">Cvv</label>
        <input type="number" name="security" />
      </div>
      <button type="button">Place Order</button>
    </form>
  );
}
