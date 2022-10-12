import { Provider } from 'react-redux'
import Settings from './Settings/Settings'
import { store } from '../store'
import ListMaker from './ListMaker/ListMaker'
import Items from './Items/Items'

function App() {
  return (
    <Provider store={ store }>
      <Settings />
      <ListMaker />
      <Items />
    </Provider>
  )
}

export default App
