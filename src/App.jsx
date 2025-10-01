import {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/cleaning/Home'
import CleaningLayout from './layouts/CleaningLayout'
import CommercialCleaning from './pages/cleaning/CommercialCleaning'
import ResidentialCleaning from "./pages/cleaning/ResidentialCleaning";
import DeepCleaning from "./pages/cleaning/DeepCleaning";
import ContactUs from "./pages/cleaning/ContactUs";

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
            <Route path='/commercial' element={<CommercialCleaning />} />
            <Route path='/residential' element={<ResidentialCleaning />} />
            <Route path='/deep' element={<DeepCleaning />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
