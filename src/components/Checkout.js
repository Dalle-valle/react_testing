import React from "react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import { useForm } from "react-hook-form";

export default function Checkout(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <section className="checkout">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Credit card information</h2>

        <Input label="Name on Card" floatingLabel={true} required={true} className="cardname" ref={register} name="cardname" />
        <Input label="Card Number" floatingLabel={true} ref={register({ required: true })} className="cardnumber" name="cardnumber" />
        <div className="flex-it">
          <Input label="Expiry" floatingLabel={true} required={true} className="expiry" type="number" name="expiry" />
          <Input label="CVV" floatingLabel={true} required={true} className="cvv" type="number" name="cvv" />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <Button variant="raised" className="button-1" type="submit">
          Proceed
        </Button>
      </form>
    </section>
  );
}
