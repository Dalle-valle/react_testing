import React from "react";

export default function Succes(props) {
  return (
    <section className="step3">
      <div className="wrap-it">
        <img src="succes.png" alt="succes" />
        <h2>PAYMENT SUCCESFUL!</h2>
        <div className="orderings">
          {props.cleanArr
            .filter((order) => order.amount > 0)
            .map((beer, index) => {
              return (
                <>
                  <p className="order-text" key={index}>
                    {beer.name} x {beer.amount}
                  </p>
                </>
              );
            })}
        </div>
        <button type="button" className="back-button">
          BACK
        </button>
      </div>
    </section>
  );
}
