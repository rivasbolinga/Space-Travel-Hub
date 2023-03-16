import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navbar/navigation';
import Profile from './components/profile/Profile';
import Missions from './components/missions/missions';
import Rockets from './components/rockets/Rocket';
import Dragon from './components/dragons/Dragon';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Rockets />} />
            <Route path="missions" element={<Missions />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dragons" element={<Dragon />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
