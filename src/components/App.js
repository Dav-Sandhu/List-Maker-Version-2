import { Provider } from 'react-redux'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from 'react-dnd'
import { store } from '../store'
import Items from './Items/Items'
import Navigation from './Navbar/Navigation'

const isTouchDevice = () => {  
  return (('ontouchstart' in window) ||  
    (navigator.maxTouchPoints > 0) ||  
    (navigator.msMaxTouchPoints > 0));  
} 

function App() {

  const mobile = isTouchDevice()

  return (
    <Provider store={ store }>
      <Navigation />
      
      <DndProvider backend={mobile ? TouchBackend : HTML5Backend}>
        <Items />
      </DndProvider>
    </Provider>
  )
}

export default App
