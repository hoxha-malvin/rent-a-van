import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container min-h-[350px] text-white p-[45px_23px] bg-cover bg-center relative">
        <h1 className="font-bold text-4xl leading-[42px]">You got the travel plans, we got the travel vans.</h1>
        <p className="leading-[24px]">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to="vans" className="btn-custom">Find your van</Link>
    </div>
  )
}

export default Home