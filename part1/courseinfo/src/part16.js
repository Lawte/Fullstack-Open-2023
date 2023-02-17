
import { useState } from 'react'
import React from 'react'


const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const average = (good - bad) / total
    const positivePercent = (good / total) * 100
    if (total === 0) {
        return <p>No feedback given</p>;
      }
  
    return (
      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positivePercent} %</p>
      </div>
    )
  }
  
  const App = () => {
    const [bad, setBad] = React.useState(0)
    const [neutral, setNeutral] = React.useState(0)
    const [good, setGood] = React.useState(0)
  
    return (
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setBad(bad + 1)}>bad</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setGood(good + 1)}>good</button>
  
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    )
  }
  
  export default App









  