import React, { useState } from "react";

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const StatisticLine = ({ text, value }) => {
  return [text, value];
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
        <p>
          <StatisticLine text="good " value={good} />
          <br />
          <StatisticLine text="neutral " value={neutral} />
          <br />
          <StatisticLine text="bad " value={bad} />
          <br />
          <StatisticLine text="all " value={total} />
          <br />
          
          <StatisticLine text="average " value={average} />
          <br />
          <StatisticLine text="positive " value={positive_res} /> %
        </p>
      ) : (
        ""
      )}

      {isNaN(positive_res) && <p>No feedback given</p>}
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
