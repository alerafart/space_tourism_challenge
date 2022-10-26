//styles
import './App.scss';
// Components
import Crew from './components/Crew';
import Destination from './components/Destination';
import Header from './components/Header';
import Home from './components/Home';
import Technology from './components/Technology';
// npm
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
//data
import data from './data';
let destinations = data.destinations;
let crewMembers = data.crew;

function App() {
  const [destinationKey, setDestinationKey]= useState('Moon');
  const [memberKey, setCrewMember]= useState('Douglas Hurley');
  // const [technology, setTechnology]= useState('');

  // is destinationKey equal to d?
  const destination = destinations.find((d) => {
    return d.name === destinationKey;
  })
  
  const member = crewMembers.find((m)=> {
    return m.name === memberKey;
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
                 {/* <Route path=''></Route> */}
          <Route path="crew" element={<Crew member={member} currentMember= {memberKey} crewMembers={crewMembers} setCrewMember={setCrewMember}/>} />
          <Route path="technology" element={<Technology />} />
        </Routes>
        
      </main>
      
    </div>
  );
}

export default App;
