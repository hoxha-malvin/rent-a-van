import { Link } from "react-router-dom";
import bgImg from "../assets/images/home-hero-bg.jpg";

const About = () => {
  return (
    <div>
        <img src={bgImg} className="w-full max-h-56 object-cover" />
        <div className="px-[27px] text-[#161616] mb-[55px]">
            <h1 className="my-4">Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className="my-3">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="bg-[#FFCC8D] text-[#000000] grid grid-rows-2 mx-[27px] p-5 mb-5">
            <h2 className="m-0 ">Your destination is waiting.<br />Your van is ready.</h2>
            <div>
                <Link className="btn-custom" to="/vans">Explore our vans</Link>
            </div>
            
        </div>
    </div>
  )
}

export default About