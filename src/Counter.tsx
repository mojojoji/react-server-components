import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter((count) => count + 1)}>
        Increment
      </button>
    </div>
  );
}
