import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: "settings",
    initialState: {
        username: "",
        password: "",
        login: false,
        darkMode: false,
        order: "asc"
    },
    reducers: {
        setLogin(state){
            state.login = !state.login
        },
        setUsername(state, { payload }){
            state.username = payload
        },
        setPassword(state, { payload }){
            state.password = payload
        },
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

export const { setDarkMode, setOrder, setUsername, setPassword, setLogin } = settingsSlice.actions
export default settingsSlice.reducer
