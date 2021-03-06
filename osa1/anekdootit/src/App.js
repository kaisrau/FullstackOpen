import React, { useEffect, useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({text}) => (
  <p>{text}</p>
)

const Votes = ({voteCount}) => (
  <p>
    has {voteCount} votes
  </p>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState(0);
  const [votingTrue, setVotingTrue] = useState(false);

  const copy = [...votes]

  function randomNumber(max) {
    return (
      Math.floor(Math.random() * max)
    )
  }

  function getMostVotes() {
    for ( let i = 0; i < votes.length; i++) {
      if (votes[i] > votes[mostVotes]) {
        setMostVotes(i)
      }
    }
  }

  useEffect(() => {
    getMostVotes()
  })

  const handleVote = () => {
    copy[selected] += 1
    setVotes(copy)
    setVotingTrue(true)
  }

  const handleNextAnecdote = () => {
    setSelected(randomNumber(anecdotes.length-1))
  }
  console.log("selected: " + selected + ", votes: " + votes[selected])

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote text={anecdotes[selected]} />
        <Votes voteCount={votes[selected]} />
        <Button handleClick={handleVote} text={"vote"} />
        <Button handleClick={handleNextAnecdote} text={"next anecdote"} />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        {votingTrue?
        <div>
          <Anecdote text={anecdotes[mostVotes]} />
          <Votes voteCount={votes[mostVotes]} />
        </div>
        : <p>No votes.</p>
        }
      </div>
    </div>
  )
}

export default App;
