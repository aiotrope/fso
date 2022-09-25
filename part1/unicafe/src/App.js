import React, { useState } from "react";

// destructuring props
const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

/* destructuring & returning multiple 
*values in a single function component
*/
const Calc = ({ good, neutral, bad }) => {
  let to = good + neutral + bad;
  let ave = (good - bad) / to;
  let pos = (good / to) * 100;

  return {
    total: to,
    average: isNaN(ave) ? 0 : ave, 
    positive: isNaN(pos) ? 0 : pos + "%",
  };
};

const App = () => {
  const title = "give feedback";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const { total, average, positive } = Calc({ good, neutral, bad });

  return (
    <div>
      <Title title={title} />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      good {good} <br />
      neutral {neutral} <br />
      bad {bad}
      <br />
      all {total}
      <br />
      average {average}
      <br />
      positive {positive}
    </div>
  );
};

export default App;
