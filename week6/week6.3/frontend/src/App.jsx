import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Assignment2 from "./Assignment2";
import Assignment3 from "./Assignment3";
import Assignment4 from "./Assignment4";
import Assignment5 from "./Assignment5";

function App() {
  const [exchange1Data, setexchnage1Data] = useState({});
  const [exchange2Data, setexchnage2Data] = useState({});
  const [bankdata, setbankdata] = useState({});

  useEffect(() => {
    setexchnage1Data({
      return: 100,
    });
  }, []);
  useEffect(() => {
    setexchnage2Data({
      return: 100,
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setbankdata({
        income: 100,
      });
    }, 5000);
  }, []);
  const cryptoReturns = useMemo(() => {
    return exchange1Data.return + exchange2Data.return;
  }, [exchange1Data, exchange2Data]);

  
  const incometax = (cryptoReturns + bankdata.income) * 0.3;
  return (
    <>
    {/* <Assignment3/> */}
      {/* <div>hi there your income tax is {incometax}</div> */}
      {/* <Assignment4/> */}
      <Assignment5/>
    </>
  );
}

export default App;
