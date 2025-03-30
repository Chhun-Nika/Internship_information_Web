import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Internship from './pages/Internship';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ComputerSciencePage from './pages/ComputerScience';
import TelecomPage from './pages/Network';
import DigitalBusinessPage from './pages/Business';
import SoftwareDeveloper from './pages/SoftwareDeveloper';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/internship/computer-science" element={<ComputerSciencePage />} />
        <Route path="/internship/telecom-networking" element={<TelecomPage />} />
        <Route path="/internship/digital-business" element={<DigitalBusinessPage />} />
        <Route path="/internship/computer-science/software-developer" element={<SoftwareDeveloper />} />

      </Routes>
    </Router>
  );
};

export default App;