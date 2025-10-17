import { createContext, useState, useEffect } from "react";
import { getShips } from "./services/spaceShips";

export const ShipContext = createContext();

export const ShipProvider = ({ children }) => {
  const [ships, setShips] = useState([]);
  const [filteredShips, setFilteredShips] = useState([]);
  const [input, setInput] = useState("");


  
  useEffect(() => {
    const fetchShips = async () => {
      try {
        const data = await getShips();      // Service katmanını kullan
        setShips(data.results);
        setFilteredShips(data.results);     // Başlangıçta tüm gemiler
      } catch (error) {
        console.log(error);
      }
    };
    fetchShips();
  }, []);


  const filterShip = () => {
    if (input.trim() === "") {
      setFilteredShips(ships);
    } else {
      setFilteredShips(
        ships.filter(ship =>
          ship.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  };

  return (
    <ShipContext.Provider value={{
      ships,
      filteredShips,
      input,
      setInput,
      filterShip,
      setFilteredShips
    }}>
      {children}
    </ShipContext.Provider>
  );
};
