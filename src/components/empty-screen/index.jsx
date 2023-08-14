import { useEffect } from "react";

const EmptyScreen = (props) => {
  const { description, title } = props;

  useEffect(() => {
    // alert("Empty component COMPONENT");
    console.log("empty component");
  }, []);
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default EmptyScreen;
