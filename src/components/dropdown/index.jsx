import { useEffect, useState } from "react";
import "./dropdown.css";

const Dropdown = (props) => {
  const { options, selectedValue, dropdownHandler } = props;
  const [data, setData] = useState();
  // what props this dropdown should accept
  console.log(options, selectedValue);
  useEffect(() => {
    // alert("dropdown COMPONENT");
    console.log("dropdown COMPONENT");
  }, []);
  return (
    <select
      className="dropdown"
      onChange={dropdownHandler}
      value={selectedValue}
    >
      {options.map((value) => {
        return <option>{value}</option>;
      })}
    </select>
  );
};

export default Dropdown;

// we can call all react hooks only inside the React component or in another hooks
// React will not consider the function as component if
// that function does not return jsx (if it not called as component) or if it start with small letter it will consider as normal react element like <div>

// useState
// useEffect

// const callMe = () => {
//   const [state, setState] = useState();
// };

// const useMyHook = () => {
//   const [state, setState] = useState();
// };
