import React, { useState, useEffect } from "react";
import { checkPrice } from "./rest";
import Beer from "./Beer";
import Checkout from "./Checkout";
import { post } from "./rest";
import Header from "./Header";
import Home from "./Home";
import Info from "./Info";
import Nav from "./Nav";
import Time from "./Time";
// import { useState } from "react";


export default function Main(props) {
  const [step, setStep] = useState(0);
  const [prices, setPrice] = useState([]);
  useEffect(() => {
    checkPrice(setPrice);
  }, []);

  function submit(e) {
    e.preventDefault();
    const payload = props.orders.filter((order) => order.amount > 0);
    console.log(payload);
    post(payload, console.log);
  }

  // new array that will contain no duplicates
  const cleanArr = [];

  // loop through each beer to find duplicates
  props.orders.forEach((obj) => {
    // check if duplicated
    //console.log(obj);
    if (cleanArr.some((beer) => beer.name === obj.name)) {
      // console.log("exists");
    } else {
      // else push all non duplicates to the clean array
      // console.log("doesnt exist");
      cleanArr.push(obj);
    }
  });

  return (
    <main className="dashboard">
      <Header data={props.data} changePage={props.changePage}/>
      <Nav changePage={props.changePage}/>

        {props.page === "home" ? (
        <Home data={props.data} beers={props.beers} changePage={props.changePage}/>
        ) : null}

      {props.page === "beer" ? (
      <Info data={props.data} beers={props.beers} changePage={props.changePage}/>
      ) : null}

{props.page === "buy" ? (
  <>
   <svg class="nav-svg svg-buy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95 140" x="0px" y="0px">
   <path d="M95,0v140c0-9.7-3.9-18.4-10.2-24.8C78.4,108.9,69.7,105,60,105H35C15.7,105,0,89.3,0,70
c0-9.7,3.9-18.4,10.2-24.8C16.6,38.9,25.3,35,35,35h25C79.3,35,95,19.3,95,0z"/>
  </svg>
      <form onSubmit={submit} className="form-main dash-grid">
      <section className={step === 0 ? "block buy-beer dash-comp" : "hidden buy-beer dash-comp"}>
        <div className="all-beers">
            <h1>Our beers</h1>
             <div className="buy-intro">
            <h2>Welcome to FooBar<br/>May we take your order?</h2>
            <p>Be aware of not all beers are on tap at all times, so the beers you see here are the beers we have on tap at the moment.</p>
            <p>All beers are served in 0.5L glasses</p>
            </div>
        {cleanArr.map((beer, index) => {
          return <Beer key={index} prices={prices} info={props.beers.filter(item=>item.name === beer.name)} changePage={props.changePage} name={beer.name} amount={beer.amount} onUpdate={props.orderChanged}/>;
        })}
        </div>
          </section>
          <section className="dash-comp closing">
      <Time data={props.data} />
      </section>
          <section className="order dash-comp">
            <div className="order-list-container">
          <h2>Your Order</h2>
        {cleanArr
          .filter((order) => order.amount > 0)
          .map((beer, index) => {
            return (
              <div className="order-list">
              <p className="bold" key={index}>
               {beer.amount} x 
              </p>
              <p>{beer.name}</p>
              </div>
            );
          })}
          </div>
          <button className="buttons" onClick={()=>setStep(1)}>Proceed</button>
          </section>
        <section className={step === 1 ? "block checkout-main dash-comp" : "hidden checkout-main dash-comp"}>
          <Checkout />
        </section>
      </form>
      </>
       ) : null}
    </main>
  );
}