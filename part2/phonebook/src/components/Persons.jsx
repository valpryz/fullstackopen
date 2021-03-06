import Person from "./Person";

const Persons = ({ arr }) => {
  return (
    <div>
      {arr.map((p) => (
        <Person man={p} key={p.name} />
      ))}
    </div>
  );
};

export default Persons;
