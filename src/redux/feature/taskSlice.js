import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
}

export const counterSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer