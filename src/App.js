import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/HOME/Home';
import AboutPage from './components/ABOUT/AboutPage';
import ServicesPage from './components/SERVICES/ServicesPage';
import ProjectPage from './components/PROJECTS/ProjectPage';
import Contact from './components/CONTACT/Contact';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>

          <Route index element={<Home />} />
          <Route exact path="/About" element={<AboutPage />} />
          <Route exact path="/Services" element={<ServicesPage/>} />
          <Route exact path="/Projects" element={<ProjectPage/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
