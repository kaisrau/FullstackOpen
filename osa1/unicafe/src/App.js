import React, { useState } from "react"

const Header = (props) => {
  return (
    <div>
      <h1>Give feedback</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>

      <p>good: {props.goods} </p>
      <p>neutral: {props.neutrals} </p>
      <p>bad: {props.bads} </p>
      <p>all: {props.goods + props.neutrals + props.bads} </p>
      <p>average: </p>
      <p>positive: </p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    console.log("good")
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log("neutral")
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    console.log("bad")
  }
  
  return (
    <div>
      <Header goodState={good} neutralState={neutral} badState={bad}/>
      <Button handleClick={handleGoodClick} text={"good"} />
      <Button handleClick={handleNeutralClick} text={"neutral"} />
      <Button handleClick={handleBadClick} text={"bad "} />
      <Statistics goods={good} neutrals={neutral} bads={bad}/>
    </div>
  );
}

export default App;

