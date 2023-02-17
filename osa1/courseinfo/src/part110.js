import { useState } from 'react'
import React from 'react'

const StatisticLine = ({ text, value }) => (
  <p>{text} {value}</p>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positivePercent = (good / total) * 100

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positivePercent} %`} />
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
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setGood(good + 1)} text="good" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App