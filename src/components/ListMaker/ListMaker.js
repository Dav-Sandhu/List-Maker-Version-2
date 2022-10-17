import { useDispatch, useSelector } from "react-redux"
import { setRank, setName, setDate, setShape, setImage, setItems, clearItemObj, sortItems } from '../../reducers/itemsSlice'
import './ListMaker.scss'

const ListMaker = () => {
    const dispatch = useDispatch()
    const item = useSelector(state => state.items.item)
    const order = useSelector(state => state.settings.order)

    const submitEvent = (e) => {
        e.preventDefault()
        dispatch(setItems())
        dispatch(clearItemObj())
        dispatch(sortItems(order))
    }

    return(
        <form
            className="add-item-prompt"
            onSubmit={submitEvent}>

            <label htmlFor="name-input">Name: </label>
            <input 
                className="name-input"
                id="name-input"
                data-testid="name-input"
                type="text"
                value={item.name}
                maxLength="50"
                onChange={(e) => dispatch(setName(e.target.value))} 
                required />

            <label htmlFor="date-input">Date: </label>
            <input 
                className="date-input"
                id="date-input"
                data-testid="date-input"
                type="text"
                placeholder="(optional)"
                value={item.date}
                maxLength="16"
                onChange={(e) => dispatch(setDate(e.target.value))} />

            <label htmlFor="img-input">Image Source: </label>
            <input 
                className="img-input"
                id="img-input"
                data-testid="img-input"
                type="text"
                placeholder="(optional)"
                value={item.image}
                onChange={(e) => dispatch(setImage(e.target.value))} />
            
            <div className="shape">
                {`Shape: `}
                <label 
                htmlFor='rect' 
                className={item.shape === "rect" ? "rect-select" : "rect"}>
                    {item.shape === "rect" ? '▮' : '▯'}
                </label>
                <input 
                type="radio" 
                id="rect"
                data-testid="rect" 
                className="rect-input" 
                name="shape" 
                value="rect" 
                onClick={(e) => dispatch(setShape(e.target.value))}/> 

                {` or `}

                <label 
                htmlFor='square' 
                className={item.shape === "square" ? "square-select" : "square"}>
                    {item.shape === "square" ? '■' : '□'}
                </label>
                <input 
                type="radio" 
                id="square"
                data-testid="square" 
                className="square-input" 
                name="shape" 
                value="square" 
                onClick={(e) => dispatch(setShape(e.target.value))}/>
            </div>

            <label htmlFor="rank-input">Rank: </label>
            <input 
                type="number"
                id="rank-input"
                data-testid="rank-input"
                className="rank-input"
                value={item.rank}
                onChange={(e) => dispatch(setRank(e.target.value))} />

            <input 
                type="submit"
                data-testid="submit-item" 
                value="add" />
        </form>
    )
}

export default ListMaker
