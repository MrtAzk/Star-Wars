import { useEffect, useState } from 'react'

import SearchBar from './componets/SearchBar'
import SpaceShipCard from './componets/SpaceShipCard'
import { getShips } from './services/spaceShips'
import { ShipProvider } from './ShipContext';

function App() {

  return (
    <ShipProvider>
      <SearchBar />
      <SpaceShipCard />
    </ShipProvider>
  )
}

export default App
