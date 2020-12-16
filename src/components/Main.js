import React, { useState, useEffect } from "react";
import Beer from "./Beer";
import Checkout from "./Checkout";
import { post } from "./rest";
import Header from "./Header";
import Landing from "./Landing";
import Succes from "./Succes";
import Nav from "./Nav";

export default function Main(props) {
  const [step, setStep] = useState(0);
  const [cleanArr, setCleanArr] = useState([]);
  function submit(e) {
    e.preventDefault();
    const payload = props.orders.filter((order) => order.amount > 0);
    console.log(payload);
    post(payload, console.log);
  }
  useEffect(() => {
    cleanOrders();
  }, []);
  function cleanOrders() {
    let arr = [];
    // loop through each beer to find duplicates
    props.orders.forEach((obj) => {
      // check if duplicated
      if (arr.some((beer) => beer.name === obj.name)) {
        // console.log("exists");
      } else {
        // else push all non duplicates to the clean array
        // console.log("doesnt exist");
        arr.push(obj);
      }
    });
    console.log("haku", arr);
    setCleanArr(arr);
  }

  function continueSucces() {
    setStep(2);
  }
  return (
    <main className="dashboard">
      <div className="">
        <Header data={props.data} />
        {props.page === "home" ? (
          <Landing data={props.data} beers={props.beers} className={props.page === "home" ? ".nav-svg-container-1" : null} />
        ) : null}

        <Nav changePage={props.changePage} />
      </div>

      {props.page === "buy" ? (
        <form onSubmit={submit} className="orders-main">
          <section className={step === 0 ? "block" : "hidden"}>
            {cleanArr.map((beer, index) => {
              return <Beer key={index} name={beer.name} amount={beer.amount} onUpdate={props.orderChanged} />;
            })}
          </section>
          <div className="">
            <h2>Order</h2>
            <button type="button" className="proceed" onClick={() => setStep(1)}>
              Proceed
            </button>
            {cleanArr
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

          <section className={step === 1 ? "block checkout-main" : "hidden checkout-main"}>
            <Checkout continueSucces={continueSucces} />
          </section>
          <section className={step === 2 ? "block succes-main" : "hidden succes-main"}>
            <Succes cleanArr={cleanArr} />
          </section>
        </form>
      ) : null}
    </main>
  );
}
