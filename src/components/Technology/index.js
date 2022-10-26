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
        <pre>
          <em className="em">03 </em> Space launch 101
        </pre> 
      </h5>
      <div className='technology__infos'>
        <div className='technology__infos__container'>
          <nav className='technology__infos__container__nav'>
            {
                technologies.map((t,index)=> {
                  console.log(index);
                return <Link 
                className = {currentTech === t.name? 'technology__infos__container__nav--link activeTec': 'technology__infos__container__nav--link' }
                key={t.index}
                onClick={()=> {setTechnology(t.name)}}
                >
                {index}
                </Link>
                })
            }
          </nav>
          <section className='technology__infos__container__data'>
            <h4 className='technology__infos__container__data__h4'>The terminology...</h4>
            <h3 className='technology__infos__container__data--name'>
              {technology.name}
            </h3>
            <p className='technology__infos__container__data--desc'>
            {technology.description}
            </p>
          </section>
        </div>

        <div className='technology__infos__img'>
          {
            !isMobile && 
            <img src={technology.images.portrait} alt={technology.images.webp} className='technology__infos__img--pic'></img>
          }
          {
            isMobile && 
            <img src={technology.images.landscape} alt={technology.images.webp} className='technology__infos__img--pic'></img>
          }
          
        </div>
      </div>
    </div>
  );
}

export default Technology;