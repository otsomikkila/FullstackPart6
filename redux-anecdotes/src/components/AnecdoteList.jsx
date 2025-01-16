/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange, notificationReset } from '../reducers/notificationReducer' 
const Anecdote = ({ anecdote, handeClick }) => {
  return (
    <div>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={handeClick}>vote</button>
          </div>
        </div>
  )
}

//dispatch(notificationChange('moi'))
const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const handeClick = (anecdote) => {
    const message = `you voted ${anecdote.content}`
    dispatch(voteAnecdote(anecdote))
    dispatch(notificationChange(message))
    setTimeout(() => {
      dispatch(notificationReset())
    },
    5000)
  }

  return (
    <div>
      {anecdotes.filter(n => n.content.includes(filter)).map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} handeClick={() => handeClick(anecdote)}/>
      )}
    </div>
  )
}

Anecdote.propTypes = {
  anecdote: PropTypes.object.isRequired, // Adjust type and 'isRequired' as needed
  handeClick: PropTypes.func.isRequired
}

AnecdoteList.protoTypes = {
  anecdotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      content: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default AnecdoteList