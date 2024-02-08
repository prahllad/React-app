import './App.css';
import {  Routes , Route , BrowserRouter as Router, } from 'react-router-dom';
import ServiceDetail from './serviceDetail';
import ServiceListing from './srviceListing';
import Booking from './Booking';


function App() {
  return (
        <Router>
          <Routes>
            <Route path='/' element = { <Booking/> } />
            <Route path="/list" element={<ServiceListing />} />
            <Route path="/detail/:id" element={<ServiceDetail />} />

          </Routes>
        </Router>
   
  );
}

export default App;
