import React, {useEffect, useRef, useState} from 'react'
import { Outlet } from 'react-router-dom'
import Header2 from '../components/common/Header2'
import Footer from "../components/common/Footer2";
import CleaningStepper from '../components/common/CleaningStepper';
import WhatsAppFloatingButton from '../components/common/WhatsAppFloatingButton';

function CleaningLayout() {
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef(null);
  const [modal, setModal] = useState(false)

  
useEffect(() => {
  document.body.classList.toggle("overflow-hidden", modal);
}, [modal]);


    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setScrolled(!entry.isIntersecting),
        { threshold: 0.1 }
      );

      const current = triggerRef.current;
      if (current) observer.observe(current);

      return () => current && observer.unobserve(current);
    }, []);

  return (
    <div className='relative'>
      <Header2 scrolled={scrolled} setModal={setModal} />
      <div ref={triggerRef} className='h-1 absolute top-0 w-full'></div>
      <Outlet context={setModal} />
      <Footer />
      {modal && (
        <div className='fixed inset-0 z-[1000] bg-black/40 overflow-auto px-4'>
          <CleaningStepper setModal={setModal} />
        </div>
      )}
      {scrolled && <WhatsAppFloatingButton />}
    </div>
  );
}

export default CleaningLayout
