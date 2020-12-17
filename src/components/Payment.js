export default function Payment() {
  return (
    <form>
      <h2 className="information">Credit Card Information</h2>

      <input className="cardname" type="text" name="smartname" placeholder="&nbsp;" required />
      <label htmlFor="smartname" className="label1">
        Smart Name
      </label>

      <input
        className="cardnumber"
        type="text"
        inputMode="numeric"
        name="smartnumber"
        minLength="16"
        maxLength="16"
        placeholder="&nbsp;"
        pattern="^[0-9]*$"
        required
      />
      <label htmlFor="smartnumber" className="label2">
        Smart Number
      </label>

      <input
        className="expiry"
        type="text"
        inputMode="numeric"
        name="expiry"
        minLength="4"
        maxLength="4"
        placeholder="&nbsp;"
        required
        pattern="^[0-9]*$"
      />
      <label htmlFor="expiry" className="label3">
        Expiry
      </label>

      <input
        className="cvv"
        type="text"
        inputMode="numeric"
        name="security"
        minLength="3"
        maxLength="3"
        placeholder="&nbsp;"
        required
        pattern="^[0-9]*$"
      />
      <label htmlFor="security" className="label4">
        Cvv
      </label>

      {/* <button className="submit-button" type="submit" onClick={() => setStep(2)}>
        Place Order
      </button> */}
    </form>
  );
}
