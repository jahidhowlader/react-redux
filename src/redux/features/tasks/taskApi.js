import { baseApi } from "../api/baseApi";


const taskApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTask: builder.query({
            query: () => "/tasks",
            providesTags: ['Task']
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: "/tasks",
                method: "POST",
                body: task
            }),
            invalidatesTags: ['Task']
        }),
        updateTask: builder.mutation({
            query: ({ _id, task }) => ({
                url: "/tasks",
                method: "PATCH",
                body: task
            }),
            invalidatesTags: ['Task']
        }),
        removeTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Task']
        })
    })
})

export const { useGetTaskQuery, useAddTaskMutation, useUpdateTaskMutation, useRemoveTaskMutation } = taskApi