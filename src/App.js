import "./App.css";
import LaskWeek from "./components/lastweek";
import LeaderBoard from "./components/leaderBoard";
import { Route,Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import Homepage from "./components/Homepage";
import GetUser from "./components/GetUser";
// import Navbar from './components/navbar';
// import Homepage from './components/Homepage';
// import LeaderBoard from "./components/leaderBoard";

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Leaderboard" element={<LeaderBoard />} />
        <Route path="/Last-Week-LeaderBoard" element={<LaskWeek />} />
        {/* <Route path="/getUser" element={<GetUser/>}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
