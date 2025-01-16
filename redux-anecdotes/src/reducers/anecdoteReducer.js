import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const orderAnecdotes = ( list ) => {
  return list.sort((a, b) => b.votes - a.votes)
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      const id = action.payload.id
      const newAnecdote = action.payload   
      return orderAnecdotes(state.map(note =>
        note.id !== id ? note : newAnecdote 
      ))
    },
    setAnecdotes(state, action) {
      return orderAnecdotes(action.payload)
    }
  }
})

export const { appendAnecdote, vote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer

export const voteAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.update(content)
    dispatch(vote(newAnecdote))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
