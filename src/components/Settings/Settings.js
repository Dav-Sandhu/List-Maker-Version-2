import { useDispatch, useSelector } from "react-redux"
import { setDarkMode, setOrder } from "../../reducers/settingsSlice"
import { sortItems } from "../../reducers/itemsSlice"
import './Settings.scss'

const Settings = () => {
    const dispatch = useDispatch()
    const { darkMode, order } = useSelector(state => state.settings)

    return(
        <div className="settings"> 

            <div className="darkMode">
                <label htmlFor="darkMode">Dark Mode: </label>
                <input 
                    type="checkbox"
                    data-testid="darkMode"
                    id="darkMode"
                    checked={darkMode}
                    onChange={() => dispatch(setDarkMode())} />
            </div>

            <label htmlFor="order">Order: </label>
            <select 
                id="order"
                data-testid="order"
                value={order}
                onChange={(e) => {
                    dispatch(setOrder(e.target.value))
                    dispatch(sortItems(e.target.value))
                }}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
                <option value="rand">Random</option>
            </select>
        </div>
    )
}

export default Settings
