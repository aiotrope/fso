import Header from "./Course/Header";
import Part1 from "./Course/Content/Part1";
import Part2 from "./Course/Content/Part2";
import Part3 from "./Course/Content/Part3";
import Part4 from "./Course/Content/Part4";
import Part5 from "./Course/Content/part5";
import Part6 from "./Course/Content/part6";
import Total from "./Course/Total";

const Course = ({ courses }) => {
  return (
    <>
      <Header id={courses[0].id} name={courses[0].name} />
      <Part1
        id={courses[0].parts[0].id}
        name={courses[0].parts[0].name}
        exercises={courses[0].parts[0].exercises}
      />
      <Part2
        id={courses[0].parts[1].id}
        name={courses[0].parts[1].name}
        exercises={courses[0].parts[1].exercises}
      />
      <Part3
        id={courses[0].parts[2].id}
        name={courses[0].parts[2].name}
        exercises={courses[0].parts[2].exercises}
      />

      <Part4
        id={courses[0].parts[3].id}
        name={courses[0].parts[3].name}
        exercises={courses[0].parts[3].exercises}
      />
      <Total
        element1={courses[0].parts[0].exercises}
        element2={courses[0].parts[1].exercises}
        element3={courses[0].parts[2].exercises}
        element4={courses[0].parts[3].exercises}
      />
      <Header id={courses[1].id} name={courses[1].name} />
      <Part5
        id={courses[1].parts[0].id}
        name={courses[1].parts[0].name}
        exercises={courses[1].parts[0].exercises}
      />

      <Part6
        id={courses[1].parts[1].id}
        name={courses[1].parts[1].name}
        exercises={courses[1].parts[1].exercises}
      />
       <Total
        element1={courses[1].parts[0].exercises}
        element2={courses[1].parts[1].exercises}
        element3={0}
        element4={0}
      />
    </>
  );
};
const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  );
};

export default App;
