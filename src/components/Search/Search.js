import React, { useState } from 'react';

function SearchComponent({ data }) {
  const [query, setquery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setquery(value);
    setFilteredData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();

    if (!lowercasedValue) {
      setFilteredData([]);
      return;
    }
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(lowercasedValue),
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
