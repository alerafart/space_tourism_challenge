// == Import style
import { SiHeadspace } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './crew.scss';
function Crew({member, currentMember, crewMembers, setCrewMember}) {

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
        {/* Slider icons to navigate through each crew Member onClick */}
        <div className="crew__info__slider">
          {
              crewMembers.map((m)=> {
              return <Link 
              className = {currentMember === m.name? 'crew__info__slider--link active': 'crew__info__slider--link' }
              // className="crew__info__slider--link"
              key={m.name}
              onClick={()=> {setCrewMember(m.name)}}
              >
                <SiHeadspace />
              </Link>
              })
          }
        
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