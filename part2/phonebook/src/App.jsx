import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{
          persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
        }</div>
    </div>
  )
}

export default App
