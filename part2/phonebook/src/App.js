import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import services from "./services/service";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    services
      .getAll()
      .then((initialList) => {
        setPersons(initialList);
      })
      .catch((err) => new Error("incredible"));
  }, []);

  const addPerson = (e) => {
    e.preventDefault();

    if (newName && newNumber && !persons.some((e) => e.name === newName)) {
      const person = {
        name: newName,
        number: newNumber,
      };
      services
        .create(person)
        .then((newPerson) => {
          setPersons(persons.concat(newPerson));
          setNewName("");
          setNewNumber("");
        })
        .catch((err) => new Error("incredible"));
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const removePerson = (id, name) => {
    const result = window.confirm(`Delete ${name}`);
    if (result) {
      services.remove(id);
      const posts = persons.filter((person) => {
        return person.id !== id;
      });
      setPersons(posts);
    } else {
      return null;
    }
  };

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredSearch = persons.filter((person) =>
    person.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchText={searchText} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h3>Numbers</h3>
      <Persons personsList={filteredSearch} handleRemove={removePerson} />
    </div>
  );
};

export default App;
