import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';
import Profile from './components/Profile';
import Missions from './components/missions';
import Rockets from './components/Rocket';
// import Dragons from './components/Dragons';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/dragons" element={<Dragons />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
