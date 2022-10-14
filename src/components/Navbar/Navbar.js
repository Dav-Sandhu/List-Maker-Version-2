import './Navbar.scss'

const Navbar = ({ELEMENTS}) => {
  return(
    <nav className="navbar">
      {ELEMENTS.map(e => {
        return(
          <div key={e.id}>
            <button className="nav-name">{e.name}</button>
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