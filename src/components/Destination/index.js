//dependencies
// == Import component
import Header from '../Header';
import DestinationNav from './DestinationNav';
// == Import style
import './destination.scss';
//data
import data from '../../data.js';
// == Component

function Destination({value, setValue, currentDest}) {
  //currentDest is active planet
  const allPlanets =data.destinations;

  //function which returns an array of all planets names
  let planetList =[];
  allPlanets.forEach(planet => {
    return planetList.push(planet.name);
  });
  
  return (
    <>
    <Header />
    <div className="destination">
      <div className="destination__view">
        <h5 className="destination__view__h5">
          <pre>
            <em className="em">01</em>   Pick up your destination
          </pre>
        </h5>
        <img  src={value.images.webp}
        alt={`${value.name}pic`}
        className="destination__view--img" />
      </div>
      
      <section className="destination__info">
      <DestinationNav setValue={setValue} currentDest={currentDest} value={value}/>  

      <h2 className="destination__info--name">
        {value.name}
      </h2>
      <p className="destination__info--desc">
        {value.description}
      </p>
      <div className="destination__info__travel">
      <div className="destination__info__travel--time">
          <p className="destination__info__travel__p">AVG. DISTANCE</p>
          {value.travel}
        </div>
        <div className="destination__info__travel--dist">
        <p className="destination__info__travel__p">Est. travel time</p>
          {value.distance}
        </div>
      </div>
      </section>
    </div>
    </>
  );
}

export default Destination;