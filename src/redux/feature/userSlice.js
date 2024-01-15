import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'Jahid Howlader',
    email: 'jahidhowlader.info@gmail.com',
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer 