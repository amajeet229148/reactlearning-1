import React from "react";
import "./input.css";

const Input = (props) => {
  const { placeHolder, onChange, value } = props;
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
