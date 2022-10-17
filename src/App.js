//styles
import './App.scss';
// Components
import Home from './components/Home';
import Header from './components/Header';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import { Routes, Route } from "react-router-dom";
// import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <main className="main">
        <Header />
        <Routes>
          <Route path="/ " element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
        <Home />
      </main>
      
    </div>
  );
}

export default App;
