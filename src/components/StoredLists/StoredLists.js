import { useSelector, useDispatch } from "react-redux"
import { loadNewList, setTitle, sortItems } from "../../reducers/itemsSlice"
import "./StoredLists.scss"

const StoredLists = ({deleteList}) => {

  const dispatch = useDispatch()

  const loadedNames = useSelector(state => state.items.loadedNames)
  const loadedLists = useSelector(state => state.items.loadedLists)
  const order = useSelector(state => state.settings.order)


  return(
    <div className={loadedNames.length > 0 ? "stored-lists" :  ""}>
      {loadedNames.map(l => {
        return(
          <div key={l}>
            <button
              className="load-button" 
              onClick={() => {
                dispatch(loadNewList(loadedLists[loadedNames.indexOf(l)]))
                dispatch(setTitle(l))
                dispatch(sortItems(order))
              }}>{l}</button>
            <button
              className="remove-button" 
              onClick={() => deleteList(l)}>✖</button>
          </div>
        )
      })}
    </div>
  )
}

export default StoredLists
