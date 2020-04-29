import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine  = (props) => ( <tr><td>{props.name}</td><td>{props.count}</td></tr>)

const Statistics = ({good, neutral, bad}) => {

  if ((good+bad+neutral)===0) {
    return(
      <div>
        No feedback given
      </div>
    )

  }

  return(
    <table>
    <tbody>
    <StatisticLine  name="good" count={good}/>
    <StatisticLine  name="neutral" count={neutral}/>
    <StatisticLine  name="bad" count={bad}/>
    <StatisticLine  name="average" count={(good-bad)/(good+neutral+bad)} />
    <StatisticLine  name="positive" count={good/(good+neutral+bad)*100+"%"} />
    </tbody>
    </table>
)}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {setGood(good + 1) }

  const handleNeutralClick = () => {setNeutral(neutral + 1) }

  const handleBadClick = () => {setBad(bad + 1) }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick}  text="Good" />
      <Button handleClick={handleNeutralClick} text="Average" />
      <Button handleClick={handleBadClick} text="Bad" />

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
