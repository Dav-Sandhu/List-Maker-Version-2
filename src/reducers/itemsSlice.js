import { createSlice } from "@reduxjs/toolkit"

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        loadedLists: [],
        loadedNames: [],
        listName: "",
        item: {
            rank: 1,
            name: "",
            date: "",
            shape: "rect",
            image: ""
        }
    },
    reducers: {
        setTitle(state, { payload }){
            state.listName = payload;
        },
        setRank(state, { payload }){
            const rank = parseInt(payload)

            if (rank >= 1 && rank <= 9999){
                state.item.rank = rank
                state.item.id = rank
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
            if (state.items.find(e => e.rank === state.item.rank) === undefined){
                state.items.push(state.item)
            }else{
                alert("Item of that rank already exists!")
            }
        },
        sortItems(state, { payload }){
            if (payload === 'asc'){
                state.items.sort(function(a, b){return a.rank - b.rank})
              }else if (payload === 'desc'){
                state.items.sort(function(a, b){return b.rank - a.rank})
              }else{
                state.items.sort(function(a, b){return (
                    Math.floor(Math.random() * 2) === 0 ? -1 : 1
                )})
              }
        },
        clearItemObj(state){
            state.item.rank = 1
            state.item.name = ""
            state.item.date = ""
            state.item.shape = "rect"
            state.item.image = ""
        },
        removeItem(state, { payload }){
            const rank = parseInt(payload)

            state.items = state.items.filter(e => e.rank !== rank)
        },
        swapItems(state, { payload }){
            const item1 = state.items.find(e => e.rank === parseInt(payload[0]))
            const item2 = state.items.find(e => e.rank === parseInt(payload[1]))

            if (item1 !== undefined && item2 !== undefined){

                const index1 = state.items.indexOf(item1)
                const index2 = state.items.indexOf(item2)

                state.items[index1] = item2
                state.items[index2] = item1

                const temp = state.items[index1].rank
                state.items[index1].rank = state.items[index2].rank
                state.items[index2].rank = temp
            }
        },
        setLoadedLists(state, { payload }){
            state.loadedLists.push(JSON.parse(JSON.stringify(payload.list)))
            state.loadedNames.push(payload.name)
        },
        loadNewList(state, { payload }){
            state.items = JSON.parse(JSON.stringify(payload))
        },
        clearLoadedLists(state){
            state.loadedLists = []
            state.loadedNames = []
        }
    }
})

export const { 
    setTitle, 
    setRank, 
    setName, 
    setDate, 
    setShape, 
    setImage, 
    setItems,
    sortItems, 
    clearItemObj,
    removeItem,
    swapItems,
    setLoadedLists,
    loadNewList,
    clearLoadedLists } = itemsSlice.actions
export default itemsSlice.reducer
