import React, { useEffect, useState } from "react";
import "./input.css";

const Input = (props) => {
  const { placeHolder, onChange } = props;
  const [value, setValue] = useState("");
  const onHandle = (e) => {
    onChange(e);
    setValue(e.target.value);
  };
  useEffect(() => {
    // alert("Input COMPONENT");
    console.log("Input Component");
  }, []);
  return (
    <div>
      <input
        placeholder={placeHolder}
        onChange={onHandle}
        value={value}
        className="input"
      />
    </div>
  );
};

export default Input;
