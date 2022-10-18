import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        darkMode: false,
        order: "asc"
    },
    reducers: {
        setDarkMode(state){
            state.darkMode = !state.darkMode
        },
        setOrder(state, { payload }){
            if (payload === 'asc' || payload === 'desc' || payload === 'rand'){
                state.order = payload
            }
        }
    }
})

export const { setDarkMode, setOrder, setView } = settingsSlice.actions
export default settingsSlice.reducer
