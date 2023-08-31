import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
      <span>good {props.good}</span> <br />
      <span>neutral {props.neutral}</span> <br />
      <span>bad {props.bad}</span> <br />
      <span>total {props.total}</span> <br />
      <span>average {props.average}</span> <br />
      <span>positive {props.positive} %</span>
    </>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good * 1 + bad * -1 + neutral * 0) / (good + bad + neutral)
  const positive = good / total * 100

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
        <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive}/>
      </div>
    </>
  )
}

export default App
