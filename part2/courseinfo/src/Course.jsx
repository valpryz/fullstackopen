const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
    </div>
  );
};

const Total = ({ course }) => {
  const sum = course.parts.reduce((curr, acc) => {
    return curr + acc.exercises;
  }, 0);
  return (
    <p>
      <strong>total of {sum} exercises</strong>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
