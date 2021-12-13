import styles from "./App.module.css";
import Button from "./Button";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev)=>prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // useEffect는 한 번만 호출 시킨다.
  useEffect(() => {
    console.log("I run only once.")
  }, []);

  // 'keyword'가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것
  useEffect(() => {
    console.log("i run when 'keyword' changes")
  }, [keyword]);

  useEffect(() => {
    console.log("i run when 'counter' changes")
  },[counter]);

  useEffect(() => {
    console.log("i run when keyword & counter changes")
  },[keyword, counter]);

  return (
    <div>
      <div>
        <h1 className={styles.title}>Welcome Back!!</h1>
        <Button text={"Continue"}/>
      </div>
      <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
        <h1 className={styles.title}>{counter}</h1>
        <button onClick={onClick}>Click me!!</button>
      </div>
    </div>
  );
}

export default App;
