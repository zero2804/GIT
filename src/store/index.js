import { configureStore } from '@reduxjs/toolkit'
import users from './feauters/user.js'

export const store = configureStore({
  reducer: {
    users
  },
})