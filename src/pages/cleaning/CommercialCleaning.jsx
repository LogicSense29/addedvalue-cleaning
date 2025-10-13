import React, { useState } from 'react'
import ExtraSection2 from '../../components/section/ExtraSection2';
import { ArrowRight } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

const services = [
  {
    title: "Restroom Sanitation",
    description:
      "Expert restroom cleaning and disinfection service ensuring spotless floors, mirrors, and fixtures — eliminating germs, odors, and buildup to maintain a hygienic, fresh, and welcoming environment.",
    dirty: "/capa-dirty.jpg",
    clean: "/restroom-commercial.jpeg",
    href: ''
  },
  {
    title: "Waste Removal",
    description:
      "Reliable waste management and disposal service that removes clutter, debris, and refuse quickly — keeping homes, offices, and outdoor areas clean, organized, and environmentally safe daily.",
    dirty: "/capa-dirty.jpg",
    clean: "/waste-removal.jpeg",
    href: ''
  },
  {
    title: "Retail Spaces Cleaning",
    description:
      "Professional cleaning for shops, malls, and showrooms — maintaining shiny floors, spotless surfaces, and dust-free displays to create a pristine, inviting, and customer-friendly business space.",
    dirty: "/office-dirty.jpg",
    clean: "/rental-space.jpeg",
    href: ''
  },
  {
    title: "Warehouses",
    description:
      "Comprehensive cleaning for warehouses and industrial sites — removing dirt, dust, and buildup from floors, shelves, and equipment for a safe, organized, and efficient workspace.",
    dirty: "/deep-dirty.jpg",
    clean: "/warehouse.jpeg",
    href: ''
  },
  {
    title: "School Cleaning",
    description:
      "Dedicated school cleaning that covers classrooms, hallways, and restrooms — ensuring safe, sanitized, and tidy learning spaces that promote comfort, focus, and overall student well-being.",
    dirty: "/deep-dirty.jpg",
    clean: "/school-cleaning.jpeg",
    href: ''
  },
  {
    title: "Office Cleaning",
    description:
      "Routine and detailed office cleaning that refreshes desks, floors, and shared areas — enhancing hygiene, appearance, and employee productivity in a spotless professional workspace daily.",
    dirty: "/capa-dirty.jpg",
    clean: "/office-cleaning.jpeg",
    href: ''
  },
];



function CommercialCleaning() {
  const setModal = useOutletContext()

const handleServices = () => {
  setModal(true);
}

  return (
    <div className='relative'>
      {/* <section className='relative min-h-screen flex flex-col md:flex-row justify-center items-center pt-10 px-5 md:px-20 bg-[#fafafa] gap-6'>
        <div>
          <h1 className='text-4xl md:text-6xl font-raleway font-semibold'>
            Commercial Service
          </h1>
          <p className='md:text-lg font-normal text-gray-700 md:w-[80%]'>
            Professional cleaning for offices, retail, and business spaces —
            inside and out — creating a spotless, welcoming environment that
            boosts productivity.
          </p>
        </div>
        <div>
          <img src='/office-cleanup.jpg' className='rounded-sm' />
        </div>
      </section> */}

      <section className='pt-6 sm:pt-10 md:pt-20 px-5 md:px-0 relative min-h-[50vh] flex flex-col justify-center items-center bg-[url("/office-cleanup.jpg")] bg-no-repeat bg-cover bg-center'>
        {/* Overlay */}
        <div className='absolute inset-0 bg-white/80 backdrop-blur-[2px]'></div>

        <div className='flex flex-col items-center relative z-10 text-center max-w-3xl space-y-4 py-10'>
          {/* <span className='text-gray-600 tracking-wider bg-red-100  px-3 py-1 text-sm font-bold text-red-700 rounded-full'>
            About AddedValue
          </span> */}
          <h1 className='heading-text leading-none text-[37px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-raleway font-semibold text-gray-900'>
            {/* Commercial Services <span className='text-primary'>AddedValue Cleaning</span> */}
            Commercial Services
          </h1>
          <p className='font-normal text-center text-gray-700 max-w-md tracking-wider'>
            Professional cleaning for offices, retail, and business spaces —
            inside and out — creating a spotless, welcoming environment that
            boosts productivity.
          </p>
        </div>
      </section>

      <section className='py-10 md:py-16 lg:py-[80px] px-5 md:px-20  relative bg-[#FBF7F7] space-y-10'>
        {/* <div className=' space-y-2 flex flex-col md:flex-row justify-between text-center md:text-left md:items-end'>
          <h2 className='text-4xl font-raleway  font-semibold text-gray-900'>
            AddedValue <br /> Commercial Services
          </h2>
          <p className='text-lg leading-relaxed text-gray-700'>
            From regular maintenance to deep cleaning projects,
            <br className='hidden md:block' /> we offer comprehensive solutions
            tailored to your specific needs and schedule.
          </p>
        </div> */}
        {/* Sticky viewport */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 md:gap-6 items-stretch'>
          {services.map((items, index) => (
            <div
              key={index}
              className='flex flex-col cursor-pointed space-y-6 group h-full'>
              <div className='rounded-md overflow-hidden'>
                <img
                  src={items.clean}
                  className='object-cover rounded-md object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
                />
              </div>
              <div>
                <h3 className='font-raleway text-lg font-semibold text-gray-900'>
                  {items.title}
                </h3>
                <div className='flex flex-col gap-3 items-start block lg:hidden'>
                  <p className=' text-gray-700 flex-[0.9]'>
                    {items.description}
                  </p>
                  <button
                    // href={items}
                    className='flex gap-2 items-center text-[#fafafa] bg-primary py-2 px-4 md:px-6 md:py-3 md:text-sm rounded-full'
                    onClick={() => setModal(true)}>
                    Get Quote
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div
                  className='flex gap-1 justify-between items-center hidden lg:flex'
                  onClick={() => setModal(true)}>
                  <p className=' text-gray-700 flex-[0.9]'>
                    {items.description}
                  </p>
                  <ArrowRight className='self-end' size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ExtraSection2 />
    </div>
  );
}

export default CommercialCleaning