import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Leaderboard from "./pages/Leaderboard";
import MyRoadmap from "./pages/MyRoadmap";
import MyRoadmaps from "./pages/MyRoadmaps";
import Roadmap from "./pages/Roadmap";
import Roadmaps from "./pages/Roadmaps";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/roadmaps" element={<Roadmaps />} />
      <Route path="/roadmaps/:id" element={<Roadmap />} />
      <Route path="/myroadmaps" element={<MyRoadmaps />} />
      <Route path="/myroadmaps/:id" element={<MyRoadmap />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default App;
