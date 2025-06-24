import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>add</button>
    </div>
  );
}

export default App;
