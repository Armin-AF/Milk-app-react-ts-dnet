import React, { useState, useEffect } from 'react';
import milkImage from './milk.png';
import { Link } from "react-router-dom";


function MilkList() {
    const [milkData, setMilkData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [milkType, setMilkType] = useState('');

    useEffect(() => {
        fetch('https://localhost:7237/Milk')
            .then(response => response.json())
            .then(data => setMilkData(data.results));
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleMilkTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMilkType(event.target.value);
    };

    let filteredData = milkData;

    if (searchValue !== '') {
        filteredData = filteredData.filter(milk => {
            // @ts-ignore
            return milk["name"].toLowerCase().includes(searchValue.toLowerCase());
        });
    }

    if (milkType !== '') {
        filteredData = filteredData.filter(milk => {
            return milk["type"] === milkType;
        });
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a milk"
                value={searchValue}
                onChange={handleSearch}
                className="bg-gray-200 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            />
            <select
                value={milkType}
                onChange={handleMilkTypeChange}
                className="bg-gray-200 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            >
                <option value="">All Types</option>
                <option value="Whole milk">Whole Milk</option>
                <option value="Oat milk">Oat Milk</option>
                <option value="Pea milk">Pea Milk</option>
                <option value="Almond milk">Almond Milk</option>
                <option value="Rice milk">Rice Milk</option>
                <option value="Coconut milk">Coconut Milk</option>
                <option value="Soy milk">Soy Milk</option>
                <option value="Walnut milk">Walnut Milk</option>
                <option value="Macadamia milk">Macadamia Milk</option>
                <option value="Hemp milk">Hemp Milk</option>
                <option value="Cashew milk">Cashew Milk</option>
            </select>
            <h1 className="text-1xl font-bold">{milkData.length} Products</h1>
            <div className="flex flex-wrap">
                {filteredData.map((milk, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">

                        <img src={milkImage} alt="Milk" className="w-full" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{milk["name"]}</div>
                            <p className="text-gray-700 text-base">
                                Type: {milk["type"]}
                            </p>
                            <p className="text-gray-700 text-base">
                                Storage: {milk["storage"]} liter
                            </p>
                        </div>
                        <Link to={`/product/${milkData.id}`}>
                            <button
                                className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                            >
                                View Product
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MilkList;
