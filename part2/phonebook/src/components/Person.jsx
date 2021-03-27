const Person = ({ man, handleClick }) => {
  return (
    <p>
      {man.name} {man.number}
      <button onClick={handleClick}>delete</button>
    </p>
  );
};

export default Person;
