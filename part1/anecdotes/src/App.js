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
  
  // generate zero filled value based on the length of anecdotes array
  const anecdoteLength = anecdotes.length;
  const voteArray = Array(anecdoteLength).fill(0);
  const count = voteArray;

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([]);

  // copy of arrays
  const copyVotes = [...votes];
  const copyCount = [...count];

  // generate random number
  const getRandomNumber = () => {
    let wholeNumber = Math.floor(Math.random() * 7);
    return wholeNumber;
  };

  const randomAnecdotes = () => {
    let _randomHandler = () => setSelected(getRandomNumber());
    return _randomHandler;
  };
  // set selected anecdote
  const getQuote = () => {
    setVotes(votes.concat(selected));
  };

  const Count = ({ index }) => {
    // add vote item to the array
    for (let i of copyVotes) {
      copyCount[i] += 1;
    }
    // map to the element
    const singleVote = copyCount.map((el) => el);

    return (
      <>
        <br />
        has {singleVote[index]} votes <br />
      </>
    );
  };

  const MostRatedVotes = () => {

    const getRated = () => {
      let objVotes = {};

      /* 
      * count the duplicates of items in array and place elements 
      * in empty object 
      */
      copyVotes.forEach((element) => {
        objVotes[element] = (objVotes[element] || 0) + 1;
      });
      // convert back to array
      const arr = Object.values(objVotes);
      // determine the highest integer in the array
      const ratedVote = Math.max(...arr);
      // function to find index of the highest item
      const indexFunc = (element) => element === ratedVote;
      const highestIndex = copyCount.findIndex(indexFunc);

      // return 2 values
      return [highestIndex, ratedVote];
    };

    const [highestIndex, ratedVote] = getRated();

    return (
      <div>
        {highestIndex >= 0 ? (
          <>
            <h1>Anecdote with most votes</h1>
            <p>
              {anecdotes[highestIndex]}
              <br />
              has {ratedVote} votes
            </p>
          </>
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <Count index={selected} />
      <button onClick={getQuote}>vote</button>
      <button onClick={randomAnecdotes()}>next anecdote</button>
      <MostRatedVotes />
    </div>
  );
};

export default App;
