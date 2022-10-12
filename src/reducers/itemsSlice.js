import { createSlice } from "@reduxjs/toolkit"

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        item: {
            rank: 1,
            name: "",
            date: "",
            shape: "rect",
            image: ""
        }
    },
    reducers: {
        setRank(state, { payload }){
            const rank = parseInt(payload)

            if (rank >= 1 && 
                rank <= 9999 && 
                state.items.find(e => e.rank === rank) === undefined){
                
                state.item.rank = rank
            }
        },
        setName(state, { payload }){
            state.item.name = payload
        },
        setDate(state, { payload }){
            state.item.date = payload
        },
        setShape(state, { payload }){
            state.item.shape = payload
        },
        setImage(state, { payload }){
            state.item.image = payload
        },
        setItems(state){
            state.items.push(state.item)
        },
        clearItemObj(state){
            state.item.rank = 1
            state.item.name = ""
            state.item.date = ""
            state.item.shape = "rect"
            state.item.image = ""
        }
    }
})

export const { setRank, setName, setDate, setShape, setImage, setItems, clearItemObj } = itemsSlice.actions
export default itemsSlice.reducer