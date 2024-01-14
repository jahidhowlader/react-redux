import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
}

export const taskSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {

            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: 'pending', ...payload })
            } else {

                // const lastElement = state.tasks.at(-1)
                state.tasks.push({ id: state.tasks.length + 1, status: 'pending', ...payload })
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTask } = taskSlice.actions

export default taskSlice.reducer