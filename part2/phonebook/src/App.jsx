import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState('')

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
      <div>
        filter shown with
        <input value={filter} onChange={(event) => setFilter(event.target.value)}/>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} required/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{
          filteredPersons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
        }</div>
    </div>
  )
}

export default App
