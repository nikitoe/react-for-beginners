import styles from "./App.module.css";
import Button from "./Button";
import {useState, useEffect} from "react";

function Hello () {
  useEffect(() => {
    console.log("created :)");
    
    // 'Cleanup Function'이라고 하고, 해당 component가 destroy될 때 뭔가 할 수 있도록 해줌
    return () => console.log("destroyed :(")
  
  }, []);
  return <h1>Hello</h1>
};

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClickCounter = () => setValue((prev)=>prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClickShowing = () => setShowing((prev) => !prev);

  // useEffect는 코드를 언제 실행할지 선택하는것이다.
  // dependency가 비어 있으므로 한번만 호출, 다음 부터는 호출 하지 않음
  useEffect(() => {
    console.log("I run only once.")
  }, []);

  // 'keyword'가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것
  useEffect(() => {
    console.log("i run when 'keyword' changes")
  }, [keyword]);

  // 'counter'가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것
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
        <button onClick={onClickCounter}>Click me!!</button>
      </div>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClickShowing}>{showing ? "Hide" : "Showing"}</button>
      </div>
    </div>
  );
}

export default App;
