import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const countVotes = {};

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([]);
 
  /* Code based from Math.random() - JavaScript | MDN. (2022, September 13). Retrieved September 26, 2022, 
  from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
  */
  const getRandomNumber = () => {
    let wholeNumber = Math.floor(Math.random() * 7);
    return wholeNumber;
  };

  const randomAnecdotes = () => {
    let _randomHandler = () => setSelected(getRandomNumber());
    return _randomHandler;
  };

  const insertVote = () => {
    const _voteHandler = () => setVotes((tempArr) => [...tempArr, selected]);
    return _voteHandler;
  };

  /* Code based from https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements question
  * Questioned by: https://stackoverflow.com/q/5667888
  * Answered by: https://stackoverflow.com/a/5668029
  */ 

  for (const num of votes) {
    countVotes[num] = countVotes[num] ? countVotes[num] + 1 : 1;
  }

  return (
    <div>
      {anecdotes[selected]}
      <br />
      {countVotes[selected]
        ? `has ${countVotes[selected]} votes`
        : "has " + 0 + " votes"}{" "}
      <br />
      <button onClick={insertVote()}>vote</button>
      <button onClick={randomAnecdotes()}>next anectode</button>
      <br />
    </div>
  );
};

export default App;
