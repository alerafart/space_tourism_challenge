// == Import component

// == Import style
import './destination.scss';
//data
import data from '../../data.js';
// == Component
function destination() {
  console.log(data.destinations[0]);
  console.log(data.destinations[0].name);
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

export default destination;