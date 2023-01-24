import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import milkImage from './milk.png';
import Header from "./Header";

interface Props {
    id: string;
}

const ProductInfo: React.FunctionComponent<Props> = () => {
    const [milkData, setMilkData] = useState<any>({});
    const [quantity, setQuantity] = useState<number>(1);
    let { id } = useParams();

    useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
            const response = await axios.get(`https://localhost:7237/Milk/${id}`);
            setMilkData(response.data);
        };
        fetchData().then(r => console.log(r));
    }, [id]);

    const handleOrder = async () => {
        // Update storage on backend
        const response = await axios.put(`https://localhost:7237/Milk/${id}`, {
            storage: milkData.storage - quantity,
        });
        setMilkData(response.data);
        // Show success message
        alert(`Successfully ordered ${quantity} liter(s) of ${milkData.name}`);
    };

    return (
        <div>
            <Header />
            <div className="flex items-center justify-content-around text-center">
                <Link to={`/`}>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md mt-4">
                        Back
                    </button>
                </Link>
            </div>
            <div className="flex items-center justify-center text-center">
                <div className="w-full max-w-md">
                    <div className="bg-pink-200 rounded-lg overflow-hidden">
                        {milkData && (
                            <div className="p-6">
                                <img src={milkImage} alt="Milk" className="w-full h-full object-cover" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{milkData.name}</div>
                                    <p className="text-gray-700 text-base">
                                        Type: {milkData.type}
                                    </p>
                                    <p className="text-gray-700 text-base">
                                        Storage: {milkData.storage} liter
                                    </p>
                                    <label className="block font-medium text-sm mb-2">
                                        Quantity:
                                    </label>
                                    <input
                                        type="range"
                                        min={1}
                                        max={milkData.storage}
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.valueAsNumber)}
                                        className="w-full bg-white rounded-md border border-gray-400 py-2 px-3 text-base leading-5 focus:outline-none focus:border-blue-500"
                                    />
                                    <div className="text-center">{quantity} liter(s)</div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-4" onClick={handleOrder}>
                                        Order
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductInfo;
