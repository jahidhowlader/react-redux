import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './feature/taskSlice'

export const store = configureStore({
    reducer: {
        tasks: taskSlice
    },

})