import {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/cleaning/Home'
import CleaningLayout from './layouts/CleaningLayout'
import CommercialCleaning from './pages/cleaning/CommercialCleaning'
import ResidentialCleaning from "./pages/cleaning/ResidentialCleaning";
import ContactUs from "./pages/cleaning/ContactUs";
import AboutPage from './pages/cleaning/About'
import Services from './pages/cleaning/Services'
import AirbnbCleaning from './pages/cleaning/AirbnbCleaning'
import SpecialCleaning from './pages/cleaning/SpecialCleaning'

function App() {
    
useEffect(() => {
  const handleScroll = (e) => {
    createRipple({
      clientX: window.innerWidth / 2, // center
      clientY: window.innerHeight / 2, // middle
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className='font-lato'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CleaningLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/commercial' element={<CommercialCleaning />} />
            <Route path='/residential' element={<ResidentialCleaning />} />
            <Route path='/airbnb' element={<AirbnbCleaning />} />
            <Route path='/special' element={<SpecialCleaning />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
