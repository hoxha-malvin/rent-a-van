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
                <div className="van-detail grid sm:grid-cols-2 text-[#161616] gap-3 items-center">
                    <img className="rounded-[5px] min-h-full max-h-full" src={van.imageUrl} />
                    <div>
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2 className="text-3xl my-[10px]">{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <div>
                            <button className="btn-custom">Rent this van</button>
                        </div>
                    </div>
                    
                    
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}