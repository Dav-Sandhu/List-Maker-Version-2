import { configureStore } from "@reduxjs/toolkit"
import settingsReducer from "./reducers/settingsSlice"
import itemsReducer from "./reducers/itemsSlice"

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        items: itemsReducer
    }
})