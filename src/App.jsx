import React, { useState, useEffect } from "react";
import "./App.css"; 

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <p className="count-display">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;