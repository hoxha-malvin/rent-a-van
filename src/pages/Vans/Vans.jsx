import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api"

export function loader() {
    return "Vans data goes here"
}


export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null);

    const typeFilter = searchParams.get("type")
    React.useEffect(() => {
        async function loadVans() {
            async function loadVans() {
                setLoading(true)
                try {
                    const data = await getVans()
                    setVans(data)
                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
            
            loadVans()
        }
        loadVans()
    }, [])

    const displayedVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans;
    
    const vanElements = displayedVans.map(van => (
        <div key={van.id}  >
            <Link to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}} className="flex flex-col justify-stretch items-stretch h-full">
                <img src={van.imageUrl} className="w-full h-full object-cover"/>
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

    if (loading) {
        return <h1 aria-live="polite">Loading...</h1>
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