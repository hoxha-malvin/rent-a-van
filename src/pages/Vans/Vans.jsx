import React from "react"
import { Link, useSearchParams, useLoaderData } from "react-router-dom"
import { getVans } from "../../api"

export function loader() {
    return getVans()
}


export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    
    const [error, setError] = React.useState(null);
    const vans = useLoaderData()  

    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans;
    
    const vanElements = displayedVans.map(van => (
        <div key={van.id}  >
            <Link to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}} className="flex  flex-col h-full">
                <img src={van.imageUrl} className="w-full flex-1 object-cover"/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </div>
                
            </Link>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    
    if (error) {
        return <h1 aria-live="assertive">There was an error: {error.message}</h1>
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="grid grid-cols-2 gap-2">
                {vanElements}
            </div>
        </div>
    )
}