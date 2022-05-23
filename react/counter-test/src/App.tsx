import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export function getColorFromCount(num: number) {
  if (num % 2 === 0) {
    return "green";
  } else {
    return "darkred";
  }
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">Counter test</header>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{
          backgroundColor: getColorFromCount(count),
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default App;
