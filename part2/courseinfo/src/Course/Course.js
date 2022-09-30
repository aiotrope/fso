import Total from "./Total";
import Parts from "./Content/Parts";
import Header from "./Header";

const Course = ({ courses }) => {
  const [reactjs, nodejs] = courses;
  const [react1, react2, react3, react4] = reactjs.parts;
  const [node1, node2] = nodejs.parts;

  return (
    <>
      <h1>Web development curriculum</h1>

      {courses.map((course, index) => (
        <div key={index}>
         <Header name={course.name} />

          {course.parts.map((c, i) => (
            <div key={i}>
              <Parts name={c.name} exercises={c.exercises} />
              </div>
            
          ))}

          {course.name === reactjs.name ? (
            <Total
              element1={react1.exercises}
              element2={react2.exercises}
              element3={react3.exercises}
              element4={react4.exercises}
            />
          ) : (
            <Total
              element1={node1.exercises}
              element2={node2.exercises}
              element3={0}
              element4={0}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Course;
