import Person from "./Person";

const Persons = ({ personsList, handleRemove }) => {
  return (
    <div>
      {personsList.map((person) => (
        <Person
          man={person}
          key={person.name}
          handleClick={() => handleRemove(person.id, person.name)}
        />
      ))}
    </div>
  );
};

export default Persons;
