import React from "react";

export default function Checkamazing() {
  return (
    <section className="check-wrapper">
      <form className="checkout-1">
        <h2 className="information">Credit Card Information</h2>
        <input className="cardname" type="text" name="smartname" placeholder="&nbsp;" />
        <label htmlFor="smartname" className="label1">
          Smart Name
        </label>

        <input className="cardnumber" type="number" name="smartnumber" inputmode="numeric" placeholder="&nbsp;"></input>
        <label htmlFor="smartnumber" className="label2">
          Smart Number
        </label>

        <input className="expiry" type="number" name="expiry" placeholder="&nbsp;" />
        <label htmlFor="expiry" className="label3">
          Expiry
        </label>

        <input className="cvv" type="text" maxlength="3" name="security" placeholder="&nbsp;" />
        <label htmlFor="security" className="label4">
          Cvv
        </label>

        <button className="submit-button" type="button">
          Place Order
        </button>
      </form>
    </section>
  );
}