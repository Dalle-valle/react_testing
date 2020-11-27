import React from "react";

export default function Checkout(props) {
  return (
    <form className="formstyle">
      <label>
        Name on Card:
        <input type="text" name="name" required />
      </label>
      <br />
      <br />
      <label>
        Card Number:
        <input type="text" name="cardnumber" required />
      </label>
      <br />
      <br />
      <label>
        Expiry:
        <input type="number" name="expiry" required />
      </label>
      <br />
      <br />
      <label>
        CVV:
        <input type="number" name="cvv" required />
      </label>
      <br />
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
}
