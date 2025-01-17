/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

const notificationReducer = (state, action) => {
  console.log('state', state)
  console.log('action', action)

  switch (action.type) {
    case "SET":
        return action.payload
    case "RES":
        return ''
    default:
        return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, '')

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch] }>
      {props.children}
    </NotificationContext.Provider>
  )
}


export default NotificationContext