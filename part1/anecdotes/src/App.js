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

  const anecdoteLength = anecdotes.length;
  const voteArray = Array(anecdoteLength).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([]);
  const [count, setCount] = useState(voteArray);
  const [quote, setQuote] = useState();

  const getRandomNumber = () => {
    let wholeNumber = Math.floor(Math.random() * 7);
    return wholeNumber;
  };

  const randomAnecdotes = () => {
    let _randomHandler = () => setSelected(getRandomNumber());
    return _randomHandler;
  };

  const getQuote = () => {
    setVotes(votes.concat(selected));
    setQuote(getMostVoted());
  };

  const getMostVoted = () => {
    const copyCount = [...count];
    let temp = 0;
    copyCount.forEach((el) => {
      if (temp < el) {
        temp = el;
      }
      
    });

    const rated = copyCount.indexOf(temp)
    return rated
  };
  //console.log(getMostVoted())
  const Count = ({ index }) => {
    const copyVotes = [...votes];
    const copyCount = [...count];

    for (let i of copyVotes) {
      copyCount[i] += 1;
    }
    const singleVote = copyCount.map((el) => el);
    return <p>has {singleVote[index]} votes</p>;
  };

  return (
    <div>
      {anecdotes[selected]} <br />
      <button onClick={getQuote}>vote</button>
      <button onClick={randomAnecdotes()}>next anectode</button>
      <br />
      <br />
      <Count index={selected} />
      {anecdotes[quote]}
    </div>
  );
};

export default App;

/* const getCount = (array, value) => {
  let count = 0;
  votes.forEach((el) => el === value && count++);
  return count;
};
 */
