import React from "react";

export default function Checkamazing() {
  return (
    <form className="checkout-1">
      <h2 className="information">Credit Card Information</h2>

      <label htmlFor="smartname" className="label1">
        Smart Name
      </label>
      <input className="cardname" type="text" name="smartname" placeholder="&nbsp;" />
      <label htmlFor="smartnumber" className="label2">
        Smart Number
      </label>
      <input className="cardnumber" type="number" name="smartnumber" placeholder="&nbsp;"></input>
      <label htmlFor="expiry" className="label3">
        Expiry
      </label>
      <input className="expiry" type="number" name="expiry" placeholder="DD/MM/YY;" />
      <label htmlFor="security" className="label4">
        Cvv
      </label>
      <input className="cvv" type="number" name="security" placeholder="&nbsp;" />
      <button className="submit-button" type="button">
        Place Order
      </button>
    </form>
  );
}
