//dependencies
import { useContext, createContext } from 'react';
import { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// == Import component
import DestinationNav from './DestinationNav';
// == Import style
import './destination.scss';
//data
import data from '../../data.js';
const DestinationContext = createContext('Unknown');
let destinations = data.destinations;
// == Component
function Destination() {
  
  console.log(data.destinations);
  // console.log(data.destinations[0].name);

  const [destination, setDestination]= useState(data.destinations[0]);
  function  handleDestinantion(e) {
    setDestination(e.target.value);
  }

  // destinations.map((destination)=> {
  //   return destination.name;
  // })
  return (
    <DestinationContext.Provider value={destinations}>
      <div className="destination">
        <div className="destination__view">
          <h5 className="destination__view__h5">
            <pre>
              <span className="span">01</span> Pick up your destination
            </pre>
          </h5>
        </div>
        <section className="destination__info">
          <DestinationNav value={destinations}/>  
        
        <h1 className="destination__info--name">
          {data.destinations[0].name}
        </h1>
        <p className="destination__info--desc">
          {data.destinations[0].description}
        </p>
        </section>
        
      </div>
    </DestinationContext.Provider>
  );
}

export default Destination;