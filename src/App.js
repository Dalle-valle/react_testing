import React, { useEffect, useState } from "react";
import { checkInfo, checkBeers } from "./components/rest";
import Main from "./components/Main";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [beers, setBeers] = useState({});

  useEffect(() => {
    checkInfo(setData);
    checkBeers(setBeers);
  }, []);

  return (
    <div className="App">
      {data.bar && beers[0] && <Main data={data} beers={beers} />}
      {!data.bar && <Loader />}
    </div>
  );
}

export default App;
