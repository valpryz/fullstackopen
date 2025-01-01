/* eslint-disable react/prop-types */
const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><strong>Total of {sum} exercises</strong></p>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => <>{parts.map(part => <Part key={part.id} part={part} />)}</>

const Course = (props) => {
  const {course} = props
  const total = course.parts.reduce((startingValue, part) => {
    return startingValue + part.exercises
  }, 0)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={total} />
    </div>
  )
}

export default Course