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
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log("r changees");
    return () => console.log("return from r changes");
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}
