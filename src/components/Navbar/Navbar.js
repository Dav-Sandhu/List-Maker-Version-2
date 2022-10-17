import './Navbar.scss'
import useDatabase from '../useDatabase'
import { useSelector, useDispatch } from 'react-redux'
import { setLoadedLists, clearLoadedLists } from '../../reducers/itemsSlice'

const Navbar = ({ELEMENTS}) => {

  const dispatch = useDispatch()

  const items = useSelector(state => state.items.items) 
  const listName = useSelector(state => state.items.listName)
  
  const [getLists, addList, removeList] = useDatabase()

  const loadLists = async () => {
    dispatch(clearLoadedLists())

    const lists = await getLists()
    lists.data.forEach(data => dispatch(setLoadedLists({list: data.list, name: data.name})))
  }

  return(
    <nav className="navbar">
      {ELEMENTS.map(e => {
        return(
          <div key={e.id}>
            <button className="nav-name" onClick={() => {
              if (e.name === "Save List"){
                addList(items, listName)
              }else if (e.name === "Load List"){
                loadLists()
              }
            }}>{e.name}</button>
            <div className={e.class} tabIndex={0}>
              {e.flag ? e.element : null}
            </div>
          </div>
        )
      })}
    </nav>
  )
}

export default Navbar
