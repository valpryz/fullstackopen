import Person from "./Person";
// import services from "../services/service";

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
