import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart nough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(
    Array.from({ length: anecdotes.length }, () => 0)
  );

  const handleNextanedote = () => {
    const Next = Math.floor(Math.random() * anecdotes.length);
    setSelected(Next);
  };

  const handleonclickVote = () => {
    const Copyvote = [...vote];
    Copyvote[selected] += 1;
    setVote(Copyvote);
  };

  //fonction pour trouver l'anecdote la plus vote
  const getMaxvote = () => {
    const maxVotes = Math.max(...vote);
    //si aucun vote n'as ete effectue
    if (maxVotes === 0) {
      return null;
    }
    const maxVotesindex = vote.indexOf(maxVotes);
    return anecdotes[maxVotesindex];
  };
  const maxv = getMaxvote();
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>Anecdoctes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>{vote[selected]}votes</p>
      <button onClick={handleonclickVote}>Voter</button> <br />
      <button onClick={handleNextanedote}>Nextanecdote</button>
      <h2>Anecdotes with most votes</h2>
      {maxv ? <p>{maxv}</p> : <p>aucun vote n'as encore ete effectue</p>}
    </div>
  );
};

export default App;
