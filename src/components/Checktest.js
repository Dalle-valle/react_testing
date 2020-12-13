import React from "react";
import CreditCardInput from "react-credit-card-input";

export default function Checktest() {
  return (
    <div>
      <form>
        <label htmlFor="card-name">Card Name</label>
        <input name="card-name" />
      </form>
      <CreditCardInput
        className="wrapper"
        cardCVCInputRenderer={({ handleCardCVCChange, props }) => (
          <input className="cvv" {...props} onChange={handleCardCVCChange((e) => console.log("cvc change", e))} />
        )}
        cardExpiryInputRenderer={({ handleCardExpiryChange, props }) => (
          <input className="expiry" {...props} onChange={handleCardExpiryChange((e) => console.log("expiry change", e))} />
        )}
        cardNumberInputRenderer={({ handleCardNumberChange, props }) => (
          <input className="cardnumber" {...props} onChange={handleCardNumberChange((e) => console.log("number change", e))} />
        )}
      />
    </div>
  );
}
