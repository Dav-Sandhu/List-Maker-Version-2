import { useSelector } from "react-redux"
import Item from './Item'
import './Items.scss'

const Items = () => {

    const items = useSelector(state => state.items.items)

    return(
        <div className="items">
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
        </div>
    )
}

export default Items