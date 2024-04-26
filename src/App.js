import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";

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