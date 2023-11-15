import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Display = ({ votePoints, text }) => (
  <div>
    <p>{text}</p>
    <p>has {votePoints} votes</p>
  </div>
);
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [voteState, setVoteState] = useState(new Uint16Array(anecdotes.length));

  const addVote = () => {
    const copy = [...voteState];
    copy[selected] += 1;
    setVoteState(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display text={anecdotes[selected]} votePoints={voteState[selected]} />
      <Button onClick={addVote} text="vote" />
      <Button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
        text="next anecdote"
      />
      <h1>Anecdote with most votes</h1>
      <Display
        text={anecdotes[voteState.indexOf(Math.max(...voteState))]}
        votePoints={Math.max(...voteState)}
      />
    </div>
  );
};

export default App;
