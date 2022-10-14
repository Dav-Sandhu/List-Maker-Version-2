import { Provider } from 'react-redux'
import Settings from './Settings/Settings'
import { store } from '../store'
import ListMaker from './ListMaker/ListMaker'
import Items from './Items/Items'
import Navbar from './Navbar/Navbar'
import { useId } from 'react'

function App() {

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
      flag: false
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
      <Items />
    </Provider>
  )
}

export default App
