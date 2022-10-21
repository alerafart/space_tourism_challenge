
// styles
import "./destinationNav.scss"
//data
import data from '../../data.js';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

// const buttonNavClassname =
function DestinationNav({setValue, currentDest}) {
  // console.log(currentDest);
  let cssClass;
  if (currentDest) {
    cssClass = 'destination__info__nav--link active';
  }
  else {
    cssClass = 'destination__info__nav--link';
  }
//  const [currentDestination, setCurrentDestination]= useState(data.destinations[0]);
// let state = useState(value.name);

// function  handleDestinantion(e) {
// setValue(e.target.value);
// }
let destinations = data.destinations;
// let classname = {{currentDest? 'destination__info__nav--link active', 'destination__info__nav--link' }}

  return (
    <nav className="destination__info__nav">
        {
          destinations.map((destination)=> {
            return <button to={destination.name}
              className = 'destination__info__nav--link'
              // className = {currentDest ? 'destination__info__nav--link active': 'destination__info__nav--link' }
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
        {/* <NavLink to={`/destination/${destination.name}`}
            className = 'destination__info__nav--link'
            
            // className = {currentDest ? 'destination__info__nav--link active': 'destination__info__nav--link' }
            // className={({ isActive }) => isActive ? 'destination__info__nav--link destination__info__nav--link active' : 'destination__info__nav--link'}
                        // className="destination__info__nav--link"
                        key={destination.name}
                        onClick={()=>{setValue(destination.name)}}
                        value={destination.name}
                        >
                        {destination.name}
                  </NavLink>; */}
    </nav>
  );
}

export default DestinationNav;
