//styles
import './App.scss';
// Components
import Home from './components/Home';
import Destination from './components/Destination';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
