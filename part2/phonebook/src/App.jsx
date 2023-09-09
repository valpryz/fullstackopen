import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState('')

  const hook = () => {
    axios
      .get("http://localhost:3000/persons")
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const handleFilter = (event) => {
     setFilter(event.target.value)
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumber = (event) => setNewNumber(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    const addedPerson = [
      ...persons,
      {name: newName, number: newNumber}
    ]
    if(persons.some(person => newName.toLowerCase() === person.name.toLowerCase())){
      alert(`${newName} is already added to phonebook`)
    }else {
      setPersons(addedPerson)
    }
    setNewName("")
    setNewNumber("")
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter}/>
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumber={handleNumber}
        handleSubmit={handleSubmit}/>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App
