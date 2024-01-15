import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './feature/taskSlice'
import userSlice from './feature/userSlice'

export const store = configureStore({
    reducer: {
        taskSlice,
        userSlice
    },

})