//dependencies
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
// == Import component
import DestinationNav from './DestinationNav';
// == Import style
import './destination.scss';
// import * as imgs from '../../assets/destination';
// import imagemoon from "../../assets/destination/image-moon.png";
//data
import data from '../../data.js';
// == Component
function Destination({value, setValue, currentDest}) {
  // console.log(data.destinations);
  // console.log(data.destinations[0].name);

  useEffect(() => {
    console.log ('use effect')
  });
  
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
        <img  src={value.images.webp}
        alt={`${value.name}pic`}
        className="destination__view--img" />
      </div>
      <section className="destination__info">
      <DestinationNav setValue={setValue} currentDest={currentDest} />  

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