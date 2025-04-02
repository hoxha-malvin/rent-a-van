import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const [vans, setVans] = useState([]);
    const typeFilter = searchParams.get("type");
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans));
    }, []);

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile px-[23px]">
            <Link to={`/vans/${van.id}`} aria-label={`View details for ${van.name}, priced at $${van.price} per day`}>
                <img src={van.imageUrl} className="max-w-full rounded-[5px]"/>
                <div className="van-info">
                    <h3 className="my-1">{van.name}</h3>
                    <p className="my-1">${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container mb-5">
            <h1>Explore our van options</h1>
            <div className="grid grid-cols-2 justify-center gap-[32px] mt-[57px]">
                {vanElements}
            </div>
        </div>
    )
}