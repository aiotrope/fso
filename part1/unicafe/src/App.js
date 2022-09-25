import React, { useState } from "react";

const Title = (props) => {
  const title = props.title;
  return <h1>{title}</h1>;
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
      <h1>statistics</h1>
      good {good} <br />
      neutral {neutral} <br />
      bad {bad}
    </div>
  );
};

export default App;
