import "./App.css";
import LaskWeek from "./components/lastweek";
import LeaderBoard from "./components/leaderBoard";
import { Route,Routes } from 'react-router-dom';
import Homepage from "./components/Homepage";


const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Leaderboard" element={<LeaderBoard />} />
        <Route path="/Last-Week-LeaderBoard" element={<LaskWeek />} />
      </Routes>
    </div>
  );
};

export default App;
