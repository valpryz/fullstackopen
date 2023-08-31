import { useState } from 'react'

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1 )
  const handleNeutral = () => setNeutral(neutral + 1 )
  const handleBad = () => setBad(bad + 1 )

  return (
    <>
      <h2>give feedback</h2>
      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <h2>statistics</h2>
      <div>
        <span>good {good}</span> <br />
        <span>neutral {neutral}</span> <br />
        <span>bad {bad}</span>
      </div>
    </>
  )
}

export default App