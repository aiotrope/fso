const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  // trial
  console.log(props.parts[0].name);

  let part1 = props.parts[0].name;
  let part2 = props.parts[1].name;
  let part3 = props.parts[2].name;
  let exercises1 = props.parts[0].exercises1;
  let exercises2 = props.parts[0].exercises2;
  let exercises3 = props.parts[0].exercises3;
  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
};
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};
const Total = (props) => {
  // trial
  console.log(props.parts[2].exercises, props.parts[0].exercises);

  let total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises;
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
