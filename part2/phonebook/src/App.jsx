/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import axios from "axios"

const Filter = (props) => {
  const {search, onSearch} = props
  return (
    <div>filter shown with <input value={search} onChange={onSearch}/></div>
  )
}

const PersonForm = (props) => {
  const {handleSubmit, newName, newPhone, addName, addPhone} = props
  return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={addName}/>
        </div>
        <div>number: <input value={newPhone} onChange={addPhone}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Person = (props) => {
  const {person} = props
  return (
    <p key={person.name}>{person.name} {person.number}</p>
  )
}

const Persons = (props) => {
  const {persons} = props
  return <div>
      {persons.map(person => <Person key={person.name} person={person}/>)}
  </div>
}
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState("")
  const [search, setSearch] = useState("")
  const addName = (e) => setNewName(e.target.value)
  const addPhone = (e) => setNewPhone(e.target.value)

  const fetchPersons = () => {
    axios.get("http://localhost:3001/persons")
      .then(response => setPersons(response.data))
  }

  useEffect(fetchPersons, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPersons = {name: newName, number: newPhone}
    if(persons.some(person => newName.toLowerCase() === person.name.toLowerCase())){
      window.alert(`${newName} is already added to phonebook`)
      setNewName("")
      setNewPhone("")
    }else {
      axios.post("http://localhost:3001/persons", newPersons)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName("")
          setNewPhone("")
        })
    }
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onSearch={(e) => setSearch(e.target.value)}/>
      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} newPhone={newPhone} addName={addName} addPhone={addPhone}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}/>
    </div>
  )
}

export default App