
import React, { useContext } from 'react';
import { ShipContext } from '../ShipContext';

const SearchBar = ({ }) => {

    const { setInput, filterShip, ships, setFilteredShips } = useContext(ShipContext);

  return (
    <div className="flex gap-2 items-center mb-4">
      <span>Name/Model</span>
      <input
        type="text"
        placeholder="Name/Model"
        onChange={(e) =>{ setInput(e.target.value);   
          if (e.target.value.trim() === "") {
      setFilteredShips(ships); // input boşsa tüm listeyi geri getir
    } }}
        className="border p-1 rounded"
      />
      <button onClick={filterShip} className="bg-blue-500 text-white px-3 py-1 rounded">
        Filter
      </button>
    </div>
  );
}

export default SearchBar;
