import { Provider } from 'react-redux'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd'
import Settings from './Settings/Settings'
import { store } from '../store'
import ListMaker from './ListMaker/ListMaker'
import Items from './Items/Items'
import Navbar from './Navbar/Navbar'
import { useId } from 'react'
import StoredLists from './StoredLists/StoredLists'

const isTouchDevice = () => {  
  return (('ontouchstart' in window) ||  
    (navigator.maxTouchPoints > 0) ||  
    (navigator.msMaxTouchPoints > 0));  
} 

function App() {

  const mobile = isTouchDevice()

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
      element: <StoredLists />
    },
    {
      name: "Settings",
      class: "nav-settings",
      id: useId(),
      flag: true,
      element: <Settings />
    }
  ]

  return (
    <Provider store={ store }>
      <Navbar ELEMENTS={elements} />
      
      <DndProvider backend={mobile ? TouchBackend : HTML5Backend}>
        <Items />
      </DndProvider>
    </Provider>
  )
}

export default App
