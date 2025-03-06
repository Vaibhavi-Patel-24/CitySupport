import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Outlet, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Utility from './pages/Utility';
import Events from './pages/Events';
import Social from './pages/Social';
import Tourism from './pages/Tourism';
import Transports from './pages/Transports';
import LocalBusiness from './pages/LocalBusiness';
import Gallery from './pages/Gallery';
import Help from './pages/Help';
import Promotions from './pages/Promotions';
import Services from './pages/Services';
import RegisterBusiness from './pages/RegisterBusiness';
import AdminLogin from './components/Admin/AdminLogin';
import AdminHome from './pages/Admin/AdminHome';
import DataProvider from './context/DataProvider';
import Map from './pages/Map';
import Schools from './pages/Schools';
import Municipal from './pages/Municipal';
import Electricity from './pages/Electricity';
import Postals from './pages/Postals';
import Colleges from './pages/Colleges';
import Ngos from './pages/Ngos';
import Hospitals from './pages/Hospitals';
import Banks from './pages/Banks';




const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? 
  <Outlet/>
  :
  <Navigate replace to='/admin123/login' />
}

function App() {
  const [ isAuthenticated , isUserAuthenticated ] = useState(false);
  return (
    <DataProvider>
      <Router basename='/citysupport'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/utility' element={<Utility/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/social' element={<Social/>}/>
          <Route path='/tourism' element={<Tourism/>}/>
          <Route path='/transports' element={<Transports/>}/>
          <Route path='/localbusiness' element={<LocalBusiness/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/promotions' element={<Promotions/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/registerbusiness' element={<RegisterBusiness/>}/>
          <Route path='/map' element={<Map/>} />
          <Route path='/utility/Schools' element={<Schools/>} />
          <Route path='/utility/Municipal' element={<Municipal/>} />
          <Route path='/utility/Electricity' element={<Electricity/>} />  
          <Route path='/utility/Banks' element={<Banks/>} />
          <Route path='/utility/Colleges' element={<Colleges/>} />
          <Route path='/utility/Ngos' element={<Ngos/>} />
          <Route path='/utility/Postals' element={<Postals/>} />
          <Route path='/utility/Hospitals' element={<Hospitals/>} />

          <Route path='/admin123/login' element={<AdminLogin isUserAuthenticated={isUserAuthenticated}/>}/>
            
            <Route path='/admin123' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            
              <Route path='/admin123' element={<AdminHome/>}/>
            
            </Route>


        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;