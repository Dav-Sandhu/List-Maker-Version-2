import './Navbar.scss'

const Navbar = ({ELEMENTS, loadLists, insertList}) => {
  return(
    <nav className="navbar">
      {ELEMENTS.map(e => {
        return(
          <div key={e.id}>
            <button className="nav-name" onClick={() => {
              if (e.name === "Save List"){
                insertList()
              }else if (e.name === "Load List"){
                loadLists(true)
              }
            }}>{e.name}</button>
            <div className={e.class} tabIndex={0}>
              {e.flag ? e.element : null}
            </div>
          </div>
        )
      })}
    </nav>
  )
}

export default Navbar
