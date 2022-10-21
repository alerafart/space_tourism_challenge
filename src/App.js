//styles
import './App.scss';
// Components
import Home from './components/Home';
import Header from './components/Header';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
// npm
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
//data
import data from './data';
let destinations = data.destinations;

function App() {
  const [destinationKey, setDestinationKey]= useState('Moon');
  const [crewMember, setCrewMember]= useState('');
  const [technology, setTechnology]= useState('');

  // is destinationKey equal to d?
  const destination = destinations.find((d) => {
    return d.name === destinationKey;
  })
  
  return (
    <div className="App">
      <main className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="destination"
                 element={<Destination value={destination} currentDest={destinationKey} setValue={setDestinationKey} />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
        
      </main>
      
    </div>
  );
}

export default App;
