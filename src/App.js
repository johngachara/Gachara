import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";

const App =  () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<AboutPage />} />
              <Route path="/Projects" element={<ProjectsPage />} />
          </Routes>
      </Router>
  );
};

export default App;