import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: " ",
}

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        changeTitle: (state, action) => {
            state.title = action.payload
        },
    },
})

export const { changeTitle } = generalSlice.actions

export default generalSlice.reducer