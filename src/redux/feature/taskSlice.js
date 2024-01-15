import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
    userSpecificTask: []
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
        },
        removeTask: (state, { payload }) => {

            state.tasks = state.tasks.filter(item => item.id !== payload)
        },
        updateStatus: (state, { payload }) => {

            const target = state.tasks.find(item => item.id === payload.id)
            target.status = payload.status
        },
        userTask: (state, { payload }) => {

            state.userSpecificTask = state.tasks.filter(task => task.assignedTo === payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { addTask, removeTask, updateStatus, userTask } = taskSlice.actions

export default taskSlice.reducer