import Header from "./Course/Header";
import Part1 from "./Course/Content/Part1";
import Part2 from "./Course/Content/Part2";
import Part3 from "./Course/Content/Part3";

const Course = ({ course }) => {
  return (
    <div>
      <Header id={course.id} name={course.name} />
      <Part1
        id={course.parts[0].id}
        name={course.parts[0].name}
        exercises={course.parts[0].exercises}
      />
      <Part2
        id={course.parts[1].id}
        name={course.parts[1].name}
        exercises={course.parts[1].exercises}
      />
      <Part3
        id={course.parts[2].id}
        name={course.parts[2].name}
        exercises={course.parts[2].exercises}
      />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };
  return <Course course={course} />;
};

export default App;
