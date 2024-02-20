import React from "react";
import logo from "./logo.svg";
import "./App.css";

import useCounter from "./hooks/useCounter";

const App = () => {
  const { counterValue, loading, updateCounterValue } = useCounter();

  const onCounterUpdate = async () => {
    const newCounterValue = counterValue + 1;

    updateCounterValue(newCounterValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Counter Value: {loading ? "Loading..." : counterValue}</p>

        <button onClick={onCounterUpdate} disabled={loading}>
          Increment Counter
        </button>
      </header>
    </div>
  );
};

export default App;
