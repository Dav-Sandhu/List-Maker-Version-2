import { useDispatch, useSelector } from "react-redux"
import { setDarkMode, setOrder } from "../../reducers/settingsSlice"
import { sortItems } from "../../reducers/itemsSlice"
import { setLogin } from "../../reducers/settingsSlice" //setUsername, setPassword
//import useDatabase from "../useDatabase"
import './Settings.scss'

const Settings = () => {
    const dispatch = useDispatch()
    const { darkMode, order } = useSelector(state => state.settings) //login, username, password
    //const [,,,adminLogin] = useDatabase()

    return(
        <>
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

                {/*<button onClick={() => dispatch(setLogin())}>Account Login</button>*/}
            </div>
            {/* <div className={login ? "login" : "none"}>
                <form onSubmit={e => {
                    e.preventDefault()
                    dispatch(setLogin())
                    adminLogin(username, password)
                }}>
                    
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text"
                        id="username"
                        value={username}
                        onChange={e => dispatch(setUsername(e.target.value))}
                    />

                    <label htmlFor="password">Password: </label>
                    <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => dispatch(setPassword(e.target.value))} 
                    />

                    <input type="submit" value="Submit"/>
                </form>
                <button
                    className="exit-login" 
                    onClick={() => dispatch(setLogin())}>✖</button>
            </div>  */}
        </>
    )
}

export default Settings
