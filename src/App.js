import "./App.css";
import { useCallback, useState } from "react";
import ChildeComp from "./components/ChildeComp";

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([1, 2, 3, 4]);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => {
      if (prev === 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };

  const onHandleUpdate = useCallback(() => {
    //update list
    setList((prev) => [...prev, Math.floor(Math.random() * 5)]);
    console.log("hello");
  }, []);

  // const user = { name: "John", age: "28" };

  console.log("parent component rendered");
  return (
    <div className="App">
      <div className="box">
        <div>
          <button onClick={incrementCount}>+</button>
        </div>
        <div>
          <button onClick={decrementCount}>-</button>
          <p>{count}</p>
        </div>

        <ChildeComp list={list} onHandleUpdate={onHandleUpdate} />
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
