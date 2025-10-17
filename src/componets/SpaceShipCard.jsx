import React, { useContext, useState } from 'react';
import { ShipContext } from '../ShipContext';
import SpaceShipImg from "../assets/spaceShip.jpg";

const SpaceShipCard = () => {
  const { filteredShips } = useContext(ShipContext);
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className='grid grid-cols-3 gap-4'>
      {filteredShips.map((item, index) => {  

      const isOpen=openIndex===index

        return(
        <div className="flex flex-col items-center justify-center border-2 w-full p-3 rounded-lg cursor-pointer" key={index} 
        onClick={()=>{setOpenIndex(isOpen ?null:index)}}>
          <img className='object-cover rounded-md mb-2' src={SpaceShipImg} alt={item.name} />
          <h2>Name: {item.name}</h2>
          <h2>Hyperdrive Rating: {item.hyperdrive_rating}</h2>
           {/* Kart Açma */}
          {isOpen&&(
              <div className="mt-2 text-sm w-full text-left border-t pt-2 text-gray-700">
                <p>Model: {item.model}</p>
                <p>Manufacturer: {item.manufacturer}</p>
                <p>Crew: {item.crew}</p>
                <p>Cargo Capacity: {item.cargo_capacity}</p>
                <p>Passengers: {item.passengers}</p>
                <p>Max Speed: {item.max_atmosphering_speed}</p>
              </div>
            )}
        </div>
      )})}
    </div>
  );
}

export default SpaceShipCard;
