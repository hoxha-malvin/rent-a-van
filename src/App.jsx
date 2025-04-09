
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
import Login, {loader as loginLoader, action as loginAction} from "./Login";
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
    <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />}/>
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} errorElement={<Error />}/>

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} loader={async ({request}) => await requireAuth(request)}/>
      <Route path="income" element={<Income />}  loader={async ({request}) => await requireAuth(request)}/>
      <Route path="reviews" element={<Reviews />}  loader={async ({request}) => await requireAuth(request)}/>
      <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<Error />}/>
      <Route path="vans/:id" element={<HostVanDetail />} loader={hostVanDetailLoader} errorElement={<Error />}>
        <Route index element={<HostVanInfo />} loader={async ({request}) => await requireAuth(request)}/>
        <Route path="pricing" element={<HostVanPricing /> } loader={async ({request}) => await requireAuth(request)}/>
        <Route path="photos" element={<HostVanPhotos />} loader={async ({request}) => await requireAuth(request)}/>
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