import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

const App = () => {
  return (
    <BrowserRouter>
      <header className="h-[110px] flex items-center py-2">
        <Link to="/" className="text-black mr-auto uppercase font-black text-2xl">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App