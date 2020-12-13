import React from "react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import { useForm } from "react-hook-form";

export default function Checkout(props) {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  const testing = watch("card-number");

  return (
    <section className="checkout">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Credit card information</h2>

        <Input label="Name on Card" floatingLabel={true} required={true} className="cardname" name="card-name" ref={register} />
        <Input label="Card Number" floatingLabel={true} required={true} className="cardnumber" name="card-number" type="number" ref={register} />
        <div className="flex-it">
          <Input label="Expiry" floatingLabel={true} required={true} className="expiry" type="number" name="expiry" ref={register} />
          <Input label="CVV" floatingLabel={true} required={true} className="cvv" type="number" name="cvv-" ref={register} />
        </div>

        <Button variant="raised" className="button-1" type="submit" name="submit" ref={register}>
          Proceed
        </Button>
      </form>
    </section>
  );
}
