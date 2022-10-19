// Components
// import Header from "../Header";
//styles
import './home.scss';
function Home() {
    return (
      <>
        <div className="home">
          <div className="home__left">
            <h5 className="home__left__h5">
              So, you want to travel to
            </h5>
            <h1 className="home__left__h1" >
              Space 
            </h1>
            <p className="home__left__p">
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </div> 
          <div className="home__right">
            <button className="home__right__inner">explore</button>
          </div>
        </div>       
        
      </>
    );
  }

  export default Home;