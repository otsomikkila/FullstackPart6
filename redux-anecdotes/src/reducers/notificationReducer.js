import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'testi ilmoitus',
  reducers: {
    notificationChange(state, action) {
      return state
    }
  }
})

export const { notificationChange } = notificationSlice.actions
export default notificationSlice.reducer