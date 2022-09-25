import React, { useState } from "react";

// destructuring props
const Title = ({ title }) => {
  return <h1>{title}</h1>;
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
          good {good}
          <br />
          neutral {neutral} <br />
          bad {bad}
          <br />
          all {total}
          <br />
          average {average}
          <br />
          positive {positive_res} %
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

  return (
    <div>
      <Title title={title} />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
