import { configureStore } from '@reduxjs/toolkit'
import userData from "./reducers/user"

export default configureStore({
  reducer: {
    userData,
  },
})