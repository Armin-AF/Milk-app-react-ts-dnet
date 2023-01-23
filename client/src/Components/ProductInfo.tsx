import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
    id: string;
}

const ProductInfo: React.FunctionComponent<Props> = ({ id }) => {
    const [milkData, setMilkData] = useState<any>({});
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
            const response = await axios.get(`/api/milk/${id}`);
            setMilkData(response.data);
        };
        fetchData();
    }, [id]);

    const handleOrder = async () => {
        // Update storage on backend
        const response = await axios.put(`/api/milk/${id}`, {
            storage: milkData.storage - quantity,
        });
        setMilkData(response.data);
        // Show success message
        alert(`Successfully ordered ${quantity} liter(s) of ${milkData.name}`);
    };

    return (
        <div>
            {milkData && (
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
                        <label>
                            Quantity:
                            <input
                                type="number"
                                min={1}
                                max={milkData.storage}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </label>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleOrder}>
                            Order
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductInfo;