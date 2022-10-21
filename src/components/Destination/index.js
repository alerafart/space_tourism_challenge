//dependencies
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
// == Import component
import DestinationNav from './DestinationNav';
// == Import style
import './destination.scss';
//data
import data from '../../data.js';
// == Component
function Destination({value, setValue}) {
  // console.log(data.destinations);
  // console.log(data.destinations[0].name);

  useEffect(() => {
    console.log ('use effect')
  });
  
  // let name = data.destinations.name;
  // let desc = data.destinations.description;
  // // let imgPng = data.destinations.images.png;
  // // let imgWebp = data.destinations.images.webp;
  // let travel = data.destinations.travel;
  // let destinations = data.destinations;

  // destinations.map((destination)=> {
  //   // console.log(destination);
  //   return destination;
  // })
  console.log(value);
  return (
    <div className="destination"
    // {style = {backgroundImage : 'value'}}
    >
      <div className="destination__view">
        <h5 className="destination__view__h5">
          <pre>
            <span className="span">01</span> Pick up your destination
          </pre>
        </h5>
      </div>
      <section className="destination__info">
      <DestinationNav setValue={setValue} />  

      <h1 className="destination__info--name">
        {value.name}
      </h1>
      <p className="destination__info--desc">
        {value.description}
      </p>
      </section>
      
    </div>
  );
}

export default Destination;