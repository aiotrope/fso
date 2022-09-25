import React, { useState } from "react";

// destructuring props
const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const StatisticLine = ({ text, value, key }) => {
  return (
    <tr key={key}>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  /*
   * destructure props inside the function
   */
  let { good, neutral, bad } = props;

  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive_res = (good / total) * 100;
  return (
    <div>
      <h1>statistics</h1>
      {positive_res ? (
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine
              text="average"
              value={isNaN(average) ? 0 : average}
            />
            <StatisticLine
              text="positive"
              value={isNaN(positive_res) ? 0 : positive_res + " %"}
            />
          </tbody>
          <tfoot></tfoot>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const App = () => {
  const title = "give feedback";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    let add = good + 1;
    setGood(add);
  };

  const addNeutral = () => {
    let add = neutral + 1;
    setNeutral(add);
  };

  const addBad = () => {
    let add = bad + 1;
    setBad(add);
  };

  return (
    <div>
      <Title title={title} />
      <button onClick={addGood}>good</button>
      <button onClick={addNeutral}>neutral</button>
      <button onClick={addBad}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
