import React from "react"

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.course.parts[0].name} exerciseCount={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exerciseCount={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exerciseCount={props.course.parts[2].exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name}: {props.exerciseCount}</p>
  )
}

const Total = (props) => {
  const countAll = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises
  return (
    <div>
      <p>Number of exercises: {countAll}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  );
}

export default App;
