import "./dropdown.css";

const Dropdown = (props) => {
  const { options, selectedValue, dropdownHandler } = props;
  // what props this dropdown should accept
  return (
    <select className="dropdown" onChange={dropdownHandler}>
      {options.map((value) => {
        return (
          <option selected={selectedValue === value?.toLowerCase()}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
