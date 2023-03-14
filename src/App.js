import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';
import Profile from './components/Profile';
import Missions from './components/missions';
import Rockets from './components/Rocket';
import Dragon from './components/Dragon';

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
