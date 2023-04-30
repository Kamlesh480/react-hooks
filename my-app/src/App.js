import { useState, useEffect } from "react";

function useStatueApp() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("Blue");

  function decCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <>
      <button onClick={decCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incCount}>+</button>
    </>
  );
}

// export default useStatueApp;

export default function App() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
}
