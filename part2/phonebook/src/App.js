import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    const person = {
      name: newName,
      id: newName,
    };
    if (newName) {
      setPersons(persons.concat(person));
      setNewName("");
    }
  };

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((p) => (
          <p key={p.id}>{p.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
