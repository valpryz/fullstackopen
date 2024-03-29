import { useState } from 'react'


const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Statistics = (props) => {
  if(props.total <= 0){
    return <>No feedback given</>
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="all" value={props.total}/>
        <StatisticLine text="average" value={props.average}/>
        <StatisticLine text="positive" value={`${props.positive} %`}/>
      </tbody>
    </table>
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
        <Button handleClick={handleGood} text="good"/>
        <Button handleClick={handleNeutral} text="neutral"/>
        <Button handleClick={handleBad} text="bad"/>
      </div>
      <h2>statistics</h2>
      <div>
        <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive}/>
      </div>
    </>
  )
}

export default App
