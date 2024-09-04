import { useState } from "react";

// const setcount1 = () => {
//   let count = 0;
//   return (val) => {
//     count += val;
//     return count;
//   };
// };

const counters = () => {
  const [count, setCount] = useState(0);
  const onCountChange = () => {
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1
    setCount(count + 1); // 0 + 1

    console.log("Count: ", count);

    // setCount((prevState) =>prevState + 1); // 0 + 1
    // setCount((prevState) => prevState + 1); // 1 + 1
    // setCount((prevState) => prevState + 1); // 2 + 1
    // setCount((prevState) => prevState + 1); // 3 + 1
    // setCount((prevState) => prevState + 1); // 4 + 1
    // setCount((prevState) => prevState + 1); // 5 + 1

    setCount((prevState) => {
      console.log("1: ", prevState);
      return prevState + 1;
    });

    setCount((prevState) => {
      console.log("2: ", prevState);
      return prevState + 1;
    });

    setCount((prevState) => {
      console.log("3: ", prevState);
      return prevState + 1;
    });

    setCount((prevState) => {
      console.log("4: ", prevState);
      return prevState + 1;
    });
  };
  console.log("Re-Rendering: ", count);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={onCountChange}>Increment</button>
    </div>
  );
};
export default counters;
