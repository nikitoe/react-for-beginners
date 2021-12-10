import styles from "./App.module.css";
import Button from "./Button";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev)=>prev + 1);
  console.log("I'm run all the time");
  useEffect(() => {
    console.log("CALL THE API....")
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!!</h1>
      <Button text={"Continue"}/>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me!!</button>
    </div>
  );
}

export default App;
