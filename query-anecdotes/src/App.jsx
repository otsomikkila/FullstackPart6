import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useContext } from 'react'
import NotificationContext from './NotificationContext'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './requests'


const App = () => {
  const queryClient = useQueryClient()
  const[notification, notificationDispatch] = useContext(NotificationContext)

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    },
  })

  const handleVote = async (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 },
      {
        onSuccess: () => {
          notificationDispatch({
            type: 'SET',
            payload: `anecdote ${anecdote.content} voted`
          })
          setTimeout(() => {
            notificationDispatch({ type: 'RES' })
          }, 5000) // Clear the notification after 5 seconds
        },
      }
    )
  }
  

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1
  })

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }
  if ( result.isError ) {
    return <div>anecdote service not available due to problems in server</div>
  }
  const anecdotes = result.data
  //console.log(anecdotes)
  //console.log(JSON.parse(JSON.stringify(result)))


  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
