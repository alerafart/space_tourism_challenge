import { Routes, Route, Link } from "react-router-dom";
// Components
import Header from "../Header";
import Destination from "../Destination";
function Home() {
    return (
      <>
        <main>
          <Header />
          <Destination />
        </main>
        
      </>
    );
  }

  export default Home;