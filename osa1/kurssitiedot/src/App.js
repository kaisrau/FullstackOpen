import React from "react"

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.p1} exerciseCount={props.e1} />
      <Part name={props.p2} exerciseCount={props.e2} />
      <Part name={props.p3} exerciseCount={props.e3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exerciseCount}</p>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14


  return (
    <div>
      <Header course={course} />
      <Content 
        p1={part1} 
        e1={exercises1} 
        p2={part2} 
        e2={exercises2} 
        p3={part3} 
        e3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;
