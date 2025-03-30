import { useParams} from "react-router-dom";
import {useState, useEffect} from "react";

export default function VanDetail() {
    const params = useParams();
    const [van, setVan] = useState(null);
    console.log(params)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return (
        <div className="van-detail-container p-[27px]">
            {van ? (
                <div className="van-detail flex flex-col text-[#161616]">
                    <img className="rounded-[5px] mt-[10px] mb-2.5 w-full max-h-full" src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2 className="text-3xl my-[10px]">{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <div>
                        <button className="btn-custom">Rent this van</button>
                    </div>
                    
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}