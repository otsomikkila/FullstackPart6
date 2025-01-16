import { createAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer' 

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    //console.log(content)
    const message = `you added ${content}`
    dispatch(setNotification(message, 5))
    dispatch(createAnecdote(content))
  }

  //form lähettää dispatchilla message ja kesto
  //reducer muuttaa statea -> ja takaisin tyhjäksi

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}


export default AnecdoteForm