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

  const [selected, setSelected] = useState(0);
  const [arr, setArr] = useState([]);

  const getRandomInt = () => {
    let num = Math.floor(Math.random() * 7);
    return num;
  };
  //let ab = [];
  arr.push(selected);
  let ab = {...arr}
 console.log(ab)
  return (
    <div>
      {anecdotes[selected]}
      <br />
      <button
        onClick={() => {
          setSelected(getRandomInt());
          setArr((arr) => [...arr, selected]);
        }}
      >
        next anectode
      </button>
      {selected} <br />
      <br />
      {arr}
    </div>
  );
};

export default App;
