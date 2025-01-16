import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    notificationChange(state, action) {
      return action.payload
    },
    notificationReset() {
      return ''
    }
  }
})

export const { notificationChange, notificationReset } = notificationSlice.actions
export default notificationSlice.reducer


export const setNotification = (message, duration) => {
  return async dispatch => {
    dispatch(notificationChange(message))
    setTimeout(() => {
      dispatch(notificationReset())
      }, duration * 1000
    )
  }
}
