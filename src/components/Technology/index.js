// == Import style
import './technology.scss';
//
import { Link } from 'react-router-dom';
import useMediaQuery from "../Hooks/UseMediaQuery";

function Technology({technology, technologies, setTechnology, currentTech}) {
  console.log(technologies);
  const isMobile = useMediaQuery('(max-width: 650px)');
  return (
    <div className='technology'>
      <h5 className='technology__h5'>
        03 Space launch 101
      </h5>
      <div className='technology__infos'>
        <div>
          <nav className='technology__infos__nav'>
          {
              technologies.map((t,index)=> {
                console.log(index);
              return <Link 
              className = {currentTech === t.name? 'technology__infos__nav--link active': 'technology__infos__nav--link' }
              key={t.index}
              onClick={()=> {setTechnology(t.name)}}
              >
               {index}
              </Link>
              })
          }
          </nav>
          <section className='technology__infos_data'>
            <h3 className='technology__infos_data--name'>
              {technology.name}
            </h3>
            <p className='technology__infos_data--desc'>
            {technology.description}
            </p>
          </section>
        </div>
        <div className='technology__infos__img'>
          {
            !isMobile && 
            <img src={technology.images.portrait} alt={technology.images.webp}></img>
          }
          {
            isMobile && 
            <img src={technology.images.landscape} alt={technology.images.webp}></img>
          }
          
        </div>
      </div>
    </div>
  );
}

export default Technology;