import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Utility from './pages/Utility';
import Events from './pages/Events';
import Social from './pages/Social';
import Tourism from './pages/Tourism';
import Transports from './pages/Transports';
import LocalBusiness from './pages/LocalBusiness';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Promotions from './pages/Promotions';
import Services from './pages/Services';
import RegisterBusiness from './pages/RegisterBusiness';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Utility' element={<Utility/>}/>
        <Route path='/Events' element={<Events/>}/>
        <Route path='/Social' element={<Social/>}/>
        <Route path='/Tourism' element={<Tourism/>}/>
        <Route path='/Transports' element={<Transports/>}/>
        <Route path='/LocalBusiness' element={<LocalBusiness/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Promotions' element={<Promotions/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/RegisterBusiness' element={<RegisterBusiness/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
