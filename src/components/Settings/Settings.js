import { useDispatch, useSelector } from "react-redux"
import { setDarkMode, setOrder, setView, setItemsPerPage } from "../../reducers/settingsSlice"
import './Settings.scss'

const Settings = () => {
    const dispatch = useDispatch()
    const { darkMode, order, view, itemsPerPage } = useSelector(state => state.settings)

    return(
        <div className="settings"> 
            <h1>Settings</h1>

            <label htmlFor="order">Order: </label>
            <select 
                id="order"
                data-testid="order"
                value={order}
                onChange={(e) => dispatch(setOrder(e.target.value))}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
                <option value="rand">Random</option>
            </select>

            <label htmlFor="view">View: </label>
            <select
                id="view"
                data-testid="view"
                value={view}
                onChange={(e) => dispatch(setView(e.target.value))}>
                <option value="vertical">Vertical</option>
                <option value="horizontal">Horizontal</option>
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