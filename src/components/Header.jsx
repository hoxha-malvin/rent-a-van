import { Link, NavLink } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="h-[110px] flex items-center justify-center py-2 max-sm:flex-col">
        <Link to="/" className="text-black sm:mr-auto uppercase font-black text-2xl ">#VANLIFE</Link>
        <nav className="flex items-center">
          <NavLink 
            to="/host"
            className={({isActive}) => isActive ? "active-link" : null}
            >Host
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive}) => isActive ? "active-link" : null}
            >About
          </NavLink>
          <NavLink 
            to="/vans"
            className={({isActive}) => isActive ? "active-link" : null}
            >Vans
          </NavLink>
          <Link to="login" className="login-link">
            <IoPersonCircleOutline size={30}/>
          </Link>
        </nav>
    </header>
  )
}

export default Header