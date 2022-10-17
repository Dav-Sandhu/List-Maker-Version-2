import { useSelector, useDispatch } from "react-redux"
import { setTitle } from '../../reducers/itemsSlice'
import withScrolling, { createHorizontalStrength, createVerticalStrength } from 'react-dnd-scrolling'
import Item from './Item'
import './Items.scss'

const Items = () => {

    const items = useSelector(state => state.items.items)
    const listName = useSelector(state => state.items.listName)
    const darkMode = useSelector(state => state.settings.darkMode)

    const ScrollingComponent = withScrolling('div')
    const linearHorizontalStrength = createHorizontalStrength(150)
    const linearVerticalStrength = createVerticalStrength(150)


    const ease = (val) => {
        const t = (val + 1) / 2
        const easedT = t<.5 ? 2*t*t : -1+(4-2*t)*t
        return easedT * 2 - 1
    }
      
    const hStrength = (box, point) => {
        return ease(linearHorizontalStrength(box, point))
    }
    
    const vStrength = (box, point) => {
        return ease(linearVerticalStrength(box, point))
    }

    const dispatch = useDispatch()

    return(
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <input
            className="list-title" 
            type="text" 
            maxLength="35"
            placeholder="Enter a title..."
            value={listName}
            onChange={e => dispatch(setTitle(e.target.value))}/>

            <ScrollingComponent 
                className="items"
                verticalStrength={vStrength}
                horizontalStrength={hStrength} >
                {items.map(i => {
                    return(
                        <div
                            className="item"
                            data-testid="item" 
                            key={i.rank}>
                                <Item 
                                    rank={i.rank}
                                    name={i.name}
                                    date={i.date}
                                    image={i.image}
                                    shape={i.shape}/>
                        </div>
                    )
                })}
            </ScrollingComponent>
        </div>
    )
}

export default Items
