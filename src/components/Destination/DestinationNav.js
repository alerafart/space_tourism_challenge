
// styles
import "./destinationNav.scss";
//data
import data from '../../data.js';

function DestinationNav({setValue, currentDest}) {

let destinations = data.destinations;

  return (
    <nav className="destination__info__nav">
        {
          destinations.map((destination)=> {
            console.log(currentDest, destination.name);
            return <button to={destination.name}
                      className = {currentDest === destination.name? 'destination__info__nav--link active': 'destination__info__nav--link' }
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
