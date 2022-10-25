// == Import style
import { SiHeadspace } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './crew.scss';
function Crew({member, crewMembers, setCrewMember}) {
  console.log(crewMembers);
  return (
    <div className='crew' >
      <div className="crew__info">
        <h5 className="crew__info__h5">
          <pre>
            <em className="em">01</em>   Meet your Crew
          </pre>
        </h5>
        <h4 className="crew__info__role">
          {member.role}
        </h4>
        <h3 className="crew__info__name">
        {member.name}
        </h3>
        <p className="crew__info__bio">
        {member.bio} 
        </p>
        <div className="crew__info__slider">
          {
            
              crewMembers.map((m)=> {
                console.log(m.name);
              return <Link 
              className="crew__info__slider--link"
              key={m.name}
              onClick={()=> {setCrewMember(m.name)}}
              ><SiHeadspace /></Link>
              // <button to={destination.name}
              //             className = {currentDest === destination.name? 'destination__info__nav--link active': 'destination__info__nav--link' }
              //             key={destination.name}
              //             onClick={()=>{setValue(destination.name)}}
              //             value={destination.name}
              //             >
              //             {destination.name}
              //       </button>;
              })
            
            
          }
          {/* <Link className="crew__info__slider--link"><SiHeadspace /></Link> */}
        
      </div>
      </div>
      
      <div className='crew__img'>
      <img  src={member.images.webp}
        alt={`${member.name}pic`}
        className="crew__img--pic" />
      </div>
    </div>
  );
}

export default Crew;