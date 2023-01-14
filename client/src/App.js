import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Leaderboard from "./pages/Leaderboard";
import MyRoadmap from "./pages/MyRoadmap";
import MyRoadmaps from "./pages/MyRoadmaps";
import Roadmap from "./pages/Roadmap";
import Roadmaps from "./pages/Roadmaps";
import SignIn from "./pages/SignIn";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/signin"
            element={user ? <Navigate to="/home" /> : <SignIn />}
          />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/signin" />}
          />
          <Route
            path="/roadmaps"
            element={user ? <Roadmaps /> : <Navigate to="/signin" />}
          />
          <Route
            path="/roadmaps/:id"
            element={user ? <Roadmap /> : <Navigate to="/signin" />}
          />
          <Route
            path="/myroadmaps"
            element={user ? <MyRoadmaps /> : <Navigate to="/signin" />}
          />
          <Route
            path="/myroadmaps/:id"
            element={user ? <MyRoadmap /> : <Navigate to="/signin" />}
          />
          <Route
            path="/leaderboard"
            element={user ? <Leaderboard /> : <Navigate to="/signin" />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
