// this normal export

import React, { useEffect, useState } from "react"; // default export  ,normal export
import Button from "./components/button/button";
import Home from "./home/home";
import ProductContainer from "./produdctConatiner";
import "./App.css";
import Timer from "./class-component/Timer";
import ErrorBoundary from "./class-component/error-boundary";

// export function AppRoot() {
//   return <h2>Hey My First React Line</h2>;
// }

// this the default export

function AppRoot() {
  // let message = "Hey I am writing the code in react.🥸";

  // my message is state variable'

  useEffect(() => {
    // alert("App Component");
    console.log("App Component");
  }, []);

  const [color, setColor] = useState("red");
  let [message, setMessage] = useState("Hey I am writing the code in react.🥸");

  const clickMe = () => {
    // message = "Now I am learning the synthetic events"; will discuss this later
    setMessage("Now I am learning the synthetic events");
    console.log(message);
  };
  const selectHandler = (e) => {
    setColor(e.target.value);
    // dom manipulation heavry process we should avoid using this this makes your website lesss perfomatic
    // document.getElementById("main-container").style.background = e.target.value;
  };

  // re-rendering happen when virtual dom and real dom is different
  const style = { background: color };
  // const [buttonText, setButtonText] = useState("Submit");
  // text
  return (
    <div id="main-container" className="App">
      {/* <h2>{message}</h2>
      <h2>{message}</h2>
      <button onClick={clickMe}>Change Text</button>
      <select onChange={selectHandler}>
        <option value="white">Light</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
      </select> */}
      {/* <Home /> */}
      {/* <ProductContainer /> */}
      <ErrorBoundary>
        {/* <Timer/> */}
        <ProductContainer />
      </ErrorBoundary>
    </div>
  );
}

// you can return the custom component inside the jsx
// react jsx only  return one element not more than one element
// theme dropdown and change the color of background

export default AppRoot;

// what is difference b/w norml export and default export

// how to play with jsx

// how to add dynamic value inside the jsx or how to add varible inisde the jsx

// synthetic events

// react knows very well there multiple browsers in in world
// every browser can have different eventlistener
// thats why react have created its own event service which is supports all browser

// onClick => onclick , click , clickme

// if you use varibale i will not gonna to re-render the component
// 😭 => You can use the variable but with lil diffrenet way

// in react variable called (state) exist if state variable change than re-rendering will happen
// how to create that variable??
// functional components  and class Components
// we have one functon useState(genrellay called  react hooks)
// in react all the hooks start with use

// it is consider as a hook
// function useMe() {

// }

// function twoNumber() {
//   return [20, 30];
// }

// const [a, b] = twoNumber();
// console.log(a, b);
