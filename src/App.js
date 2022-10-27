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

const destinations = data.destinations;
const crewMembers = data.crew;
const technologies = data.technology;

function App() {
  const [destinationKey, setDestinationKey]= useState('Moon');
  const [memberKey, setCrewMember]= useState('Douglas Hurley');
  const [technologyKey, setTechnology]= useState('Launch vehicle');

  // is destinationKey equal to d?
  const destination = destinations.find((d) => {
    return d.name === destinationKey;
  })
  
  const member = crewMembers.find((m)=> {
    return m.name === memberKey;
  })

  const technology =technologies.find((t)=> {
    return t.name === technologyKey;
  })

  return (
    <div className="App">
      <main className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="destination"
                 element={<Destination
                 value={destination}
                 currentDest={destinationKey}
                 setValue={setDestinationKey} />} />
          <Route path="crew"
                 element={<Crew
                 member={member}
                 currentMember= {memberKey}
                 crewMembers={crewMembers}
                 setCrewMember={setCrewMember}/>} />
          <Route path="technology"
                 element={<Technology
                 technology={technology}
                 technologies={technologies}
                 setTechnology={setTechnology}
                 currentTech={technologyKey}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
