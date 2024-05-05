import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/common/Navbar';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services'
import Aboutus from "./pages/Aboutus/Aboutus";
import Contactus from "./pages/Contactus/Contactus";
import Signup from "./components/common/Signup"
import Announcement from "./components/common/Announcement";
import ServiceView from "./components/core/ServiceView";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      <Announcement/>
      <Navbar />
      <div> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/serviceview" element={<ServiceView/>}/>
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus/>}/>

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
