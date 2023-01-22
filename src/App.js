import "./App.css";
import { useState } from "react";
import ChildeComp from "./components/ChildeComp";
import { list } from "./constants/list";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
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
        <ChildeComp list={list} />
      </div>
    </div>
  );
}

export default App;

// const [animal, setAnimal] = useState("unknown");
// const [newList, setNewList] = useState(listNums);

// let newList = useMemo(()=>[...listNums],[]);

// const newList = useMemo(() => [animal,...listNums], [animal]);
//creating a new list - new referance even if the value is the same. now memo on childcomp not work so we need to use useCallback
// const addAnimalInput = () => {
//   setNewList((prev) => [animal, ...listNums]);
// };
// const addAnimalInput = useCallback(() => {
//   setNewList([animal, ...listNums]);
// }, [animal]);

// const user = { name: "John", age: "28" };

//  const onHandleUpdate = useCallback(() => {
//   //update list
//   setList((prev) => [...prev, Math.floor(Math.random() * 5)]);
//   console.log("hello");
// }, []);

//  <ChildeComp list={list} onHandleUpdate={onHandleUpdate} />
// const [list, setList] = useState([1]);

// const decrementCount = () => {
//   setCount((prev) => {
//     return prev === 0 ? 0 : prev - 1;
//   });
// };
