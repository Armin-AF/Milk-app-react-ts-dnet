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
            <div className="flex justify-center py-4 px-8">
                <input
                    type="text"
                    placeholder="Search for a milk"
                    value={searchValue}
                    onChange={handleSearch}
                    className="bg-gray-200 rounded-lg py-2 px-4 block w-3/4 appearance-none leading-normal text-center inline-block"
                />
                <select
                    value={milkType}
                    onChange={handleMilkTypeChange}
                    className="bg-gray-400 rounded-lg py-1 px-4 block w-1/4 appearance-none leading-normal text-center inline-block ml-2"
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
            </div>
            <div className="justify-center text-center py-6">
                <h1 className="text-1xl font-bold text-pink-600">{filteredData.length} Products</h1>
            </div>
            <div className="flex flex-wrap justify-center text-center">
                {filteredData.map((milk, index) => (
                    <div key={index} className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-pink-200">
                        <div className="px-6 py-4">
                            <img src={milkImage} alt="Milk" className="w-full" />
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-pink-600">{milk["name"]}</div>
                            <p className="text-gray-700 text-base">
                                Type: {milk["type"]}
                            </p>
                            <div>
                                {milk["storage"] === 0 ? <p className="text-red-700 text-base">Out of stock</p> : <p className="text-gray-700 text-base">
                                    Storage: {milk["storage"]} liter
                                </p>}
                            </div>

                        </div>
                        <Link to={`/product/${milkData[index]["id"]}`}>
                            <div className="px-6 py-4">
                                <button className={`bg-blue-500 hover:bg-red-blue text-white font-bold py-2 px-4 rounded-full ${milk["storage"] === 0 ? "cursor-not-allowed bg-gray-500" : ""}`}>
                                    View Product
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MilkList;
