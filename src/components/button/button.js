import { useEffect } from "react";
import React from "react";
import "./button.css";
const Button = ({
  buttonText,
  onClick,
  type = "primary",
  size = "medium",
  className,
  children,
}) => {
  // destructring the props object

  // component unmount
  useEffect(() => {
    return () => {
      // generally we do code cleanup here
      // removing unmecessary varibale , eventListener
      console.log("Unmount");
    };
  }, []);

  // if buttonText change does re-render happen ??
  return (
    <div>
      {/* Here i am adding event listner to button */}
      <button
        className={`button ${type} ${size}  ${className}`}
        onClick={onClick}
      >
        {buttonText ? buttonText : children}
      </button>
    </div>
  );
};

export default Button; // this exporting

// what is props ??
// what is the state ??
// diff b/w props and state  ??

// props = > generally use to pass data from parent to child
// state => generally use to manages within component data
// import "./button.css";
// const Button = (props) => {
//   // destructring the props object
// const { buttonText, onClick } = props;

//   return (
//     <div>
//       {/* Here i am adding event listner to button */}
//       <button onClick={onClick}>{buttonText1}</button>
//     </div>
//   );
// };

// does react re-render on updating props
