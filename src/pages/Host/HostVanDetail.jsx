import { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink,useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils"
import { getHostVans } from "../../api"
export async function loader({ params }) {
    await requireAuth()
    return getHostVans(params.id)
}

export default function HostVanDetail() {
    const currentVan = useLoaderData()
    console.log(currentVan)
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    if (!currentVan) {
        return <h1>Loading...</h1>;
    }

    return (
        <section>
            <Link to=".." relative="path" className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} alt={currentVan.name} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${currentVan.type}`}>
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                    
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                    
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    );
}
