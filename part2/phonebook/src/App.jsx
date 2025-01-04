/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import personService from './services/personService'


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
          name: <input value={newName} onChange={addName} required/>
        </div>
        <div>number: <input value={newPhone} onChange={addPhone} required/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Person = (props) => {
  const {person, onClick} = props
  return (
      <div key={person.name}>{person.name} {person.number} 
      <button onClick={onClick}>delete</button>
    </div>
  )
}

const Persons = (props) => {
  const {persons, handleDelete} = props
  return <div>
      {persons.map(person => <Person key={person.name} person={person} onClick={() => {
        if(window.confirm(`Delete ${person.name} ?`)){
          handleDelete(person.id)
          personService.deletePerson(person.id)
        }
        }}/>)}
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
    personService.getAll()
      .then(initialPersons => setPersons(initialPersons)
      )
  }

  useEffect(fetchPersons, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {name: newName, number: newPhone}
    if(persons.some(person => newName.toLowerCase().trim() === person.name.toLowerCase().trim())){
      const personFinded = persons.find(person => person.name.toLowerCase().trim() === newName.toLowerCase().trim())
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)){
        const updatedPerson = {...personFinded, number: newPhone}
        personService.update(personFinded.id, updatedPerson)
         .then(revisedPersons => {
          setPersons(persons.map(person => person.id === personFinded.id ? revisedPersons : person))
         })
      }
      setNewName("")
      setNewPhone("")
    }else {
      personService.create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName("")
          setNewPhone("")
        })
    }
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  const deletePerson = (id) => {
    const leavedPersons = persons.filter(person => person.id !== id)
    setPersons(leavedPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} onSearch={(e) => setSearch(e.target.value)}/>
      <h2>add a new</h2>
      <PersonForm handleSubmit={handleSubmit} newName={newName} newPhone={newPhone} addName={addName} addPhone={addPhone}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDelete={deletePerson}/>
    </div>
  )
}

export default App