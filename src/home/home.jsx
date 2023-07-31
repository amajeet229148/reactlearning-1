import { useEffect, useState } from "react"; //
// import { default as Button } from "../button/button";
import Button from "../components/button/button";

import "./home.css";
const Home = () => {
  // i want to show cancel button once submit buton click
  // if cancel button is click show submit button
  //   ??
  // if state change react re-render ?
  let [showSubmit, setShowSubmit] = useState(true);
  const [buttonText, setButtonText] = useState("Submit");
  const [count, setCount] = useState(0);
  let cancelButton = "Cancel";

  let submit = true;
  const onSubmit = () => {
    setShowSubmit(false);
    // showSubmit = false; // state is updating
    cancelButton = "Cancel1";
  };

  const onCancel = () => {
    setShowSubmit(true);
    submit = false;
    // showSubmit = true; // state is updating this will not changes ui
  };

  // I want to capture the re-rendering

  // useState and useEffect will be most used react hooks mostly compare to another 95%
  // useEffect  side effect calls
  // useEffect take two parameter first will callback function second will be array of dependency(optional)
  // the callback without dependecny you passed that function call everytime re-render happen
  useEffect(() => {
    console.log("i called eveytime any state change");
  });

  // i want to triggered some action only once using useEffect

  // this will call at the time mounting

  useEffect(() => {
    console.log("hey i called once");
    // when the page load i want to do some actions like getting data from server and showing
  }, []);

  useEffect(() => {
    console.log("i will call when showSubmit state is updated");

    // when the page load i want to do some actions like getting data from server and showing
  }, [showSubmit]);

  const changeText = () => {
    setButtonText("Hello");
  };

  useEffect(() => {
    console.log("run when submit varianle change");
  }, [submit]);
  return (
    <div className="container">
      {showSubmit ? (
        <Button buttonText={buttonText} onClick={onSubmit} type="tertiary" />
      ) : (
        <Button buttonText={cancelButton} onClick={onCancel} />
      )}
      <span>Render count: {count}</span>
      <Button
        className={"buttonText"}
        buttonText={"Change Text"}
        onClick={changeText}
        type="secondary"
      />
    </div>
  );
};

export default Home;

// how will you update parent state from child

// if whatever props we are getting from parent component is part of the state than , changing props re-render happen

// in development mode react render two time
