import React, {useEffect, useRef, useState} from 'react'
import { Outlet } from 'react-router-dom'
import Header2 from '../components/common/Header2'
import Footer from "../components/common/Footer2";
import WhatsAppFloatingButton from '../components/common/WhatsAppFloatingButton';

function CleaningLayout() {
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef(null);

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
      <Header2 scrolled={scrolled} />
      <div ref={triggerRef} className='h-1 absolute top-0 w-full'></div>
      <Outlet />
      <Footer />
      {scrolled && <WhatsAppFloatingButton/>}
    </div>
  );
}

export default CleaningLayout
