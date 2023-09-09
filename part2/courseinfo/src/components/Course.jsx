import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><strong>total of {sum} exercises</strong></p>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map(part => <Part key={part.id}
      part={part}
    />)}
  </>

const Course = (props) => {

  const sum = props.course.parts.reduce((prev, current)=> {
    return prev + current.exercises
  }, 0)

  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total sum={sum} />
    </div>
  )
}

export default Course
