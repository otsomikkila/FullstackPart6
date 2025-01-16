import { createAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch } from 'react-redux'
import { notificationChange, notificationReset } from '../reducers/notificationReducer' 

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    //console.log(content)
    dispatch(createAnecdote(content))

    const message = `you added ${content}`
    dispatch(notificationChange(message))
    setTimeout(() => {
      dispatch(notificationReset())
    },
    5000)
  }

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