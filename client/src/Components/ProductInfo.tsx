import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductInfo() {
    let { id } = useParams();
    const [milkData, setMilkData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:7237/milk/${id}`)
            .then(response => response.json())
            .then(data => setMilkData(data));
    }, [id]);


    return (
        <div>
            <img src={`./milk.png`} alt={milkData.name} className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{milkData.name}</div>
                <p className="text-gray-700 text-base">
                    Type: {milkData.type}
                </p>
                <p className="text-gray-700 text-base">
                    Storage: {milkData.storage} liter
                </p>
            </div>
        </div>
    )
}

export default ProductInfo;
