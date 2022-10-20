
// styles
import "./destinationNav.scss"
//data
import data from '../../data.js';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
function DestinationNav() {

const [destination, setDestination]= useState(data.destinations[0]);

function  handleDestinantion(e) {
setDestination(e.target.value);
}
let destinations = data.destinations;

  destinations.map((destination)=> {
    return destination.name;
  })
  return (
    <nav className="destination__info__nav">
        {
          destinations.map((destination)=> {
            return <button to={destination.name}
                        className="destination__info__nav--link" key={destination.name}
                        onClick={handleDestinantion}
                        value={destination.name}
                        >
                        {destination.name}
                  </button>;
          })
          
        }
      </nav>
  );
}

export default DestinationNav;
