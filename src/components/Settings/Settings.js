import { useDispatch, useSelector } from "react-redux"
import { setDarkMode, setOrder, setItemsPerPage } from "../../reducers/settingsSlice"
import { sortItems } from "../../reducers/itemsSlice"
import './Settings.scss'

const Settings = () => {
    const dispatch = useDispatch()
    const { darkMode, order, itemsPerPage } = useSelector(state => state.settings)

    return(
        <div className="settings"> 
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

            <div className="darkMode">
                <label htmlFor="darkMode">Dark Mode: </label>
                <input 
                    type="checkbox"
                    data-testid="darkMode"
                    id="darkMode"
                    checked={darkMode}
                    onChange={() => dispatch(setDarkMode())} />
            </div>

            <div className="itemsPerPage">
                <label htmlFor='itemsPerPage'>Items per page: </label>
                <select 
                    id="itemsPerPage"
                    data-testid="itemsPerPage"
                    value={itemsPerPage}
                    onChange={(e) => dispatch(setItemsPerPage(e.target.value))}>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="999">999</option>
                </select>
            </div>
        </div>
    )
}

export default Settings
