import React, { useEffect } from "react";
import "./input.css";

const Input = (props) => {
  const { placeHolder, onChange, value } = props;
  useEffect(() => {
    // alert("Input COMPONENT");
    console.log("Input Component");
  }, []);
  return (
    <div>
      <input
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
        className="input"
      />
    </div>
  );
};

export default Input;
