import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
