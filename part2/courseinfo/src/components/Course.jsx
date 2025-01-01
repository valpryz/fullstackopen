/* eslint-disable react/prop-types */
const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p>total of {sum} exercises</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />      
  </>

const Course = (props) => {
  const { courses } = props

  return (
    <div>
    <h1>Web development curriculum</h1>
      {courses.map(course => {
        const sum = course.parts.reduce((starting, part) =>  starting + part.exercises, 0)
      return (
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total sum={sum} />
        </div>
      )
    })}
    </div>
  )
}

export default Course