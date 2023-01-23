import React, { useState, useEffect } from 'react';

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
            />
            {filteredData.map(milk => (
                <div key={milk.id}>
                    <h2>{milk.name}</h2>
                    <p>{milk.type}</p>
                    <p>{milk.storage}</p>
                </div>
            ))}
        </div>
    );
}

export default MilkList;

