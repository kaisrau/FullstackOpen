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

const StaticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  let all = props.goods + props.neutrals + props.bads
  let ave = ( ( props.goods ) + (props.bads * -1) ) / all
  let pos = ( (props.goods / all) * 100 ) + '%'
  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given :-(</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StaticLine text="good" value={props.goods} />
          <StaticLine text="neutral" value={props.neutrals} />
          <StaticLine text="bad" value={props.bads} />
          <StaticLine text="all" value={all} />
          <StaticLine text="average" value={ave} />
          <StaticLine text="positive" value={pos} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
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

