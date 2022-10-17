import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        darkMode: false,
        order: "asc",
        itemsPerPage: 25
    },
    reducers: {
        setDarkMode(state){
            state.darkMode = !state.darkMode
        },
        setOrder(state, { payload }){
            if (payload === 'asc' || payload === 'desc' || payload === 'rand'){
                state.order = payload
            }
        },
        setItemsPerPage(state, { payload }){
            if (typeof parseInt(payload) === "number"){
                state.itemsPerPage = payload
            }
        }
    }
})

export const { setDarkMode, setOrder, setView, setItemsPerPage } = settingsSlice.actions
export default settingsSlice.reducer
