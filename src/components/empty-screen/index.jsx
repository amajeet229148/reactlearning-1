const EmptyScreen = (props) => {
  const { description, title } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default EmptyScreen;
