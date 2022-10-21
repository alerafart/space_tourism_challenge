
// styles
import "./destinationNav.scss"
//data
import data from '../../data.js';
// import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

// const buttonNavClassname =
function DestinationNav({setValue}) {
//  const [currentDestination, setCurrentDestination]= useState(data.destinations[0]);

// function  handleDestinantion(e) {
// setValue(e.target.value);
// }
let destinations = data.destinations;

  return (
    <nav className="destination__info__nav">
        {
          destinations.map((destination)=> {
            return <button to={destination.name}
            // className = {buttonNavClassname}
            // className={({ isActive }) => isActive ? 'destination__info__nav--link destination__info__nav--link active' : 'destination__info__nav--link'}
                        // className="destination__info__nav--link"
                        key={destination.name}
                        onClick={()=>{setValue(destination.name)}}
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
