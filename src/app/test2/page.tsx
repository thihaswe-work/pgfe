"use client";
import React, { useMemo, useState } from "react";

const Counter = React.memo(({ count }: { count: number }) => {
  console.log("Counter component rendered!");
  return <h2>Count: {count}</h2>;
});
Counter.displayName = "Counter component";
// const Counter = ({ count }: { count: number }) => {
//   console.log("Counter component rendered!");
//   return <h2>Count: {count}</h2>;
// };

function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState("");
  // const memoizedCounter = useMemo(() => <Counter count={count} />, [count]);

  return (
    <div>
      {/* {memoizedCounter}
       */}
      <Counter count={count} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        className="bg-red-500"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
