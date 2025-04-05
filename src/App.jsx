
import Home from "./pages/Home";
import About from "./pages/About";
import "./server";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews"
import HostVans, { loader as hostVansLoader} from "./pages/Host/HostVans";
import HostVanDetail, { loader as hostVanDetailLoader} from "./pages/Host/HostVanDetail"
import HostLayout from "./components/HostLayout";
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import NotFound from "./pages/Vans/NotFound";
import Error from "./components/Error"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Vans/Login";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  redirect
} from "react-router-dom";
import { requireAuth } from "./utils"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} loader={loginLoader} action={loginAction}/>
    <Route path="vans" element={<Vans />} loader={vansLoader} />
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader}/>

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} loader={async () => await requireAuth()}/>
      <Route path="income" element={<Income />}  loader={async () => await requireAuth()}/>
      <Route path="reviews" element={<Reviews />}  loader={async () => await requireAuth()}/>
      <Route path="vans" element={<HostVans />} loader={hostVansLoader}/>
      <Route path="vans/:id" element={<HostVanDetail />} loader={hostVanDetailLoader}>
        <Route index element={<HostVanInfo />} loader={async () => await requireAuth()}/>
        <Route path="pricing" element={<HostVanPricing /> } loader={async () => await requireAuth()}/>
        <Route path="photos" element={<HostVanPhotos />} loader={async () => await requireAuth()}/>
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App