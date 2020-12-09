import React from "react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";

export default function Checkout(props) {
  return (
    <section className="checkout">
      <h2>Credit card information</h2>

      <Input label="Name on Card" floatingLabel={true} required={true} className="cardname" />
      <Input label="Card Number" floatingLabel={true} required={true} className="cardnumber" />
      <Input label="Expiry" floatingLabel={true} required={true} className="expiry" />
      <Input label="CVV" floatingLabel={true} required={true} className="cvv" />
    </section>
  );
}
