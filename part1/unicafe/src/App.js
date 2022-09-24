import { useState } from "react";

const Title = (props) => {
  const title = props.title;
  return <h1>{title}</h1>;
};

const Total = (props) => {
  return props.good + props.neutral + props.bad;
};

const Average = (props) => {
  let total = props.good + props.neutral + props.bad;
  let good = props.good;
  let bad = props.bad;
  let calc = good - bad;
  let average = 0;
  average = calc / total;

  return(isNaN(average) ? 0 : average)
};

const Positive = (props) => {
  let total = props.good + props.neutral + props.bad;
  let good = props.good;
  let positive = good / total
  return(isNaN(positive) ? 0 : positive + "%")
}

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
      <br />
      all <Total good={good} neutral={neutral} bad={bad} />
      <br />
      average <Average good={good} neutral={neutral} bad={bad}/> 
      <br />
      positive <Positive good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
