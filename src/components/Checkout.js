import React from "react";
import { useForm } from "react-hook-form";

export default function Checkout({ continueSucces }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <section className="check-wrapper">
        <h2 className="information">Credit Card Information</h2>

        <input className="cardname" type="text" name="smartname" placeholder="&nbsp;" ref={register} />
        <label htmlFor="smartname" className="label1">
          Smart Name
        </label>

        <input
          className="cardnumber"
          required
          type="text"
          name="smartnumber"
          maxLength="16"
          inputmode="numeric"
          placeholder="&nbsp;"
          ref={register({ required: true, maxLength: 16 })}
        ></input>
        <label htmlFor="smartnumber" className="label2">
          Smart Number
        </label>

        <input
          className="expiry"
          type="text"
          required
          inputmode="numeric"
          name="expiry"
          maxLength="6"
          placeholder="&nbsp;"
          ref={register({ required: true, maxLength: 6 })}
        />
        <label htmlFor="expiry" className="label3">
          Expiry
        </label>

        <input
          className="cvv"
          type="text"
          required
          inputmode="numeric"
          name="security"
          maxLength="3"
          placeholder="&nbsp;"
          ref={register({ required: true, maxLength: 3 })}
        />
        <label htmlFor="security" className="label4">
          Cvv
        </label>

        <button className="submit-button" type="submit" onClick={continueSucces} onSubmit={handleSubmit(onSubmit)}>
          Place Order
        </button>
      </section>
    </>
  );
}
