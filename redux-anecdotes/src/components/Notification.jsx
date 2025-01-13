import { useSelector } from 'react-redux'
//import { notificationChange } from '../reducers/notificationReducer'

const Notification = () => {

  const notification = useSelector(state => state.notification)

  let visibility = notification === '' ? 'hidden' : 'visible'

  console.log(visibility)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    visibility: visibility
  }
  return (
    <div style={style}>

      {notification}
    </div>
  )
}

export default Notification