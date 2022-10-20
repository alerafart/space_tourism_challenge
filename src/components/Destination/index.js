//dependencies
// import { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// == Import component
import DestinationNav from './DestinationNav';
// == Import style
import './destination.scss';
//data
import data from '../../data.js';
// == Component
function Destination() {
  console.log(data.destinations);
  // console.log(data.destinations[0].name);

  // const [destination, setDestination]= useState(data.destinations[0]);
  // function  handleDestinantion(e) {
  //   setDestination(e.target.value);
  // }
  // let destinations = data.destinations;

  // destinations.map((destination)=> {
  //   return destination.name;
  // })
  return (
    <div className="destination">
      <div className="destination__view">
        <h5 className="destination__view__h5">
          <pre>
            <span className="span">01</span> Pick up your destination
          </pre>
        </h5>
      </div>
      <section className="destination__info">
        <DestinationNav />  
      {/* <nav className="destination__info__nav">
        {
          destinations.map((destination)=> {
            return <Link className="destination__info__nav--link" key={destination.name}>
                      {destination.name}
                  </Link>;
          })
          
        }
      </nav> */}
      <h1 className="destination__info--name">
        {data.destinations[0].name}
      </h1>
      <p className="destination__info--desc">
        {data.destinations[0].description}
      </p>
      </section>
      
    </div>
  );
}

export default Destination;