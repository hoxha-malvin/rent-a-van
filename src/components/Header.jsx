import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[110px] flex items-center py-2">
        <Link to="/" className="text-black mr-auto uppercase font-black text-2xl">#VANLIFE</Link>
        <nav>
            <Link to="/host">Host</Link>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
        </nav>
    </header>
  )
}

export default Header