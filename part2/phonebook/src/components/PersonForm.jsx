import React from 'react'

const PersonForm = ({newName, handleNameChange, newNumber, handleNumber, handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} required/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm
