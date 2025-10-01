import { ArrowBigRightIcon, ArrowRight, CheckCheckIcon, CheckCircle, CheckIcon, Star } from 'lucide-react';
import React from 'react'

function HeroSection() {
  return (
    <section className='relative min-h-screen flex flex-col justify-center pt-30 px-5 md:px-20 bg bg-[url(herosection3.jpg)] bg-no-repeat'>
      <div className='w-full md:w-[50%] relative z-10 text-main-bg'>
        <div className='flex flex-col md:flex-row gap-2 justify-center items-center md:justify-start'>
          <span className='flex justify-center'>
            <Star fill='#FFD700' className='text-secondary' />
            <Star fill='#FFD700' className='text-secondary' />
            <Star fill='#FFD700' className='text-secondary' />
            <Star fill='#FFD700' className='text-secondary' />
            <Star fill='#FFD700' className='text-secondary' />
          </span>
          <span> 4.9/5 from 1,000+ customers</span>
        </div>
        <div className='space-y-2 text-center md:text-left'>
          <h1 className='text-4xl md:text-6xl font-raleway font-semibold'>
            Spotless Spaces, <span className='text-secondary'>Stress-Free</span>{" "}
            Living
          </h1>
          <p className='md:text-xl font-semibold'>
            Professional cleaning services that transform your space into a
            pristine sanctuary. Trusted by thousands of people across the city.
          </p>
        </div>
        <div className='mt-4 space-y-4 font-semibold'>
          <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center md:justify-start items-center'>
            <div className='flex gap-2 items-center bg-white/10 px-3 py-2 rounded-full text-xs md:text-sm'>
              <CheckCircle className='text-secondary' />
              <span className=''>100% Satisfaction Guarantee</span>
            </div>

            <div className='flex gap-2 items-center bg-white/10 px-3 py-2 rounded-full text-xs md:text-sm'>
              <CheckCircle className='text-secondary' />
              <span>Eco-Friendly Products</span>
            </div>
          </div>
          <div className='flex gap-2 md:gap-4 justify-center md:justify-start flex-wrap'>
            <button className='flex gap-2 items-center text-black bg-secondary p-2 md:px-10 md:py-4 md:text-sm rounded-sm'>
              Get Free Quote
              <ArrowRight size={16} />
            </button>
            <button className='flex gap-2 items-center bg-white p-2 md:px-10 md:py-4 text-sm rounded-md text-black'>
              View Services
            </button>
          </div>
        </div>
      </div>
      <div class='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'></div>
    </section>
  );
}

export default HeroSection

// an image of a neat home sitting room with natural colors and #FF0000
// create an image of a neat home sitting room that has very scanty furniture's, and cleaning material placed gently in a visible place with natural colors and #FF0000