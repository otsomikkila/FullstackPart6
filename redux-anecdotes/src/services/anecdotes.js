import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createAnecdote = async (content) => {
  const obj = { content: content, votes: 0 }
  const response = await axios.post(baseUrl, obj)
  console.log(response)
  return response.data
}

export default { getAll, createAnecdote }