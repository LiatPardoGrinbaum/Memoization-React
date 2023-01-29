import "./App.css";
import { useState } from "react";
import ChildComp from "./components/ChildComp";
import { numbers } from "./constants/numbers";

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(numbers);

  const user = { name: "John", age: "28" };

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  const onHandleUpdate = () => {
    //update list
    setList((prev) => [...prev, Math.floor(Math.random() * 5)]);
  };
  console.log("parent component rendered");
  return (
    <div className="App">
      <div className="box">
        <div>
          <button className="btn" onClick={incrementCount}>
            +
          </button>
        </div>
        <div>
          <p>Count: {count}</p>
        </div>
        <button onClick={onHandleUpdate} className="btn btnAdd">
          Add Number
        </button>
        <ChildComp list={list} user={user} onHandleUpdate={onHandleUpdate} />
      </div>
    </div>
  );
}
export default App;
