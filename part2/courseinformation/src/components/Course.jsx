const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = ({ parts }) => {
  return (
    <p>
      {parts.name} {parts.exercises}
    </p>
  );
};
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} parts={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const sumOfExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <strong>Total of {sumOfExercises} exercises</strong>;
};

const Course = ({ courses }) => {
  return (
    <div>
      <Header name={courses.name} />
      <Content parts={courses.parts} />
      <Total parts={courses.parts} />
    </div>
  );
};

export default Course;
