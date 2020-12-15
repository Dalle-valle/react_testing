import React, { useEffect, useState } from "react";
import { checkInfo, checkBeers } from "./components/rest";
import Main from "./components/Main";
import Loader from "./components/Loader";
import "./App.css";
import "./Daniel.css";

function App() {
  const [data, setData] = useState({});
  const [beers, setBeers] = useState({});
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    checkInfo(gotData);
    checkBeers(setBeers);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      checkInfo(setData);
      checkBeers(setBeers);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function gotData(data) {
    // console.log(data);
    setData(data);
    const nextOrders = data.taps.map((tap) => {
      return {
        name: tap.beer,
        amount: 0,
      };
    });
    setOrders(nextOrders);
  }
  function orderChanged(name, evt) {
    // console.log(name, evt.target.value);
    const nextOrders = orders.map((order) => {
      if (order.name === name) {
        // console.log(name);
        order.amount = evt.target.value;
      }
      return order;
    });
    setOrders(nextOrders);
  }

  return (
    <div className="App">
      {data.bar && beers[0] && <Main orders={orders} beers={beers} orderChanged={orderChanged} data={data} />}
      {!data.bar && <Loader />}
    </div>
  );
}

export default App;
