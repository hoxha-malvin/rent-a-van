import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
const Layout = () => {
  return (
    <div className="min-h-lvh flex flex-col">
      <div className="max-w-[1440px] w-full mx-auto flex-1 flex flex-col">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>

  )
}

export default Layout