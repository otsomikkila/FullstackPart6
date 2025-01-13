import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import { vote } from './reducers/anecdoteReducer'

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

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} handeClick={() => dispatch(vote(anecdote.id))}/>
      )}
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

Anecdote.propTypes = {
  anecdote: PropTypes.object.isRequired, // Adjust type and 'isRequired' as needed
  handeClick: PropTypes.func.isRequired
}

export default App