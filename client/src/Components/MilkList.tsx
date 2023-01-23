import React, { useState, useEffect } from 'react';
import milkImage from './milk.png';

function MilkList() {
    const [milkData, setMilkData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetch('https://localhost:7237/Milk')
            .then(response => response.json())
            .then(data => setMilkData(data.results));
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const filteredData = milkData.filter(milk => {
        return milk.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a milk"
                value={searchValue}
                onChange={handleSearch}
                className="bg-gray-200 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            />
            <div className="flex flex-wrap">
                {filteredData.map(milk => (
                    <div key={milk.id} className="w-1/3 p-4">
                        <div className="bg-white rounded-lg shadow-md">
                            <img src={milkImage} alt="Milk" className="w-full" />
                            <div className="p-4">
                                <h2 className="text-lg font-medium">{milk.name}</h2>
                                <p className="text-gray-600">{milk.type}</p>
                                <p className="text-gray-600">{milk.storage} liters</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MilkList;
