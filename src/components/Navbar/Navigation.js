import { useDispatch, useSelector } from 'react-redux'
import { setLoadedLists, clearLoadedLists } from '../../reducers/itemsSlice'
import { useId } from 'react'
import ListMaker from '../ListMaker/ListMaker'
import Settings from '../Settings/Settings'
import StoredLists from '../StoredLists/StoredLists'
import Navbar from './Navbar'
import useDatabase from '../useDatabase'

const Navigation = () => {

  const dispatch = useDispatch()

  const items = useSelector(state => state.items.items) 
  const listName = useSelector(state => state.items.listName)

  const [getLists, addList, removeList] = useDatabase()

  const loadLists = async (getAlert) => {
    dispatch(clearLoadedLists())

    const lists = await getLists()

    if(lists.data.length > 0){
      lists.data.forEach(data => dispatch(setLoadedLists({list: data.list, name: data.name})))
    }else if (getAlert){
      alert("No Saved Lists!")
    }
  }

  const insertList = async () => {
    const lists = await getLists()

    if (lists.data.length < 5){
      await addList(items, listName)
      await loadLists(true)
    }else{
      alert("Database is full! please delete some lists to continue...")
    }
  }

  const deleteList = async (LIST) => {
    await removeList(LIST)
    await loadLists(false)
    alert("List Removed!")
  }

  const elements = [
    {
      name: "Add Item",
      class: "nav-add",
      id: useId(),
      flag: true,
      element: <ListMaker />
    },
    {
      name: "Save List",
      class: "nav-save",
      id: useId(),
      flag: false
    },
    {
      name: "Load List",
      class: "nav-load",
      id: useId(),
      flag: true,
      element: <StoredLists loadLists={loadLists} deleteList={deleteList} />
    },
    {
      name: "Settings",
      class: "nav-settings",
      id: useId(),
      flag: true,
      element: <Settings />
    }
  ]

  return <Navbar ELEMENTS={elements} loadLists={loadLists} insertList={insertList} />
}

export default Navigation