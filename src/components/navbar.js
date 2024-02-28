import React from "react";
import { Link, Route,Routes } from "react-router-dom";
import GetUser from "./GetUser";

const Navbar = () => {
  return (
    <div className="flex gap-2 justify-around py-1">
      <Link to={"/"}>Home</Link>
      <Link to={"/Leaderboard"}>Current-Week-LeaderBoard</Link>
      <Link to={"/Last-Week-LeaderBoard"}>Last-Week-LeaderBoard</Link>
      <Link to={"/getUser"}></Link>
      <Routes>
        <Route path="*" element={<GetUser />} />
      </Routes> 
    </div>
  );
};

export default Navbar;
