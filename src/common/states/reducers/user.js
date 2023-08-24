import { createSlice } from '@reduxjs/toolkit'


export const userData = createSlice({
  name: 'user_data',
  initialState: {
    data:{},
    set: false
  },
  reducers: {
    set: (state, action) => {
    const { payload } = action
     state.data = payload
     state.set = true
    },
    clear: (state) => {
      state.data = {}
      state.set = false
    }
  },
})


export const { set, clear } = userData.actions

export default userData.reducer