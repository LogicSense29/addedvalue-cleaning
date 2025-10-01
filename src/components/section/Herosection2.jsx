import {
  ArrowBigRightIcon,
  ArrowRight,
  CheckCheckIcon,
  CheckCircle,
  CheckIcon,
  Star,
} from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <section className='relative min-h-screen flex flex-col md:flex-row justify-center items-center pt-10 px-5 md:px-20 bg-[#fafafa] gap-6'>
      <div className='w-full md:w-[50%] relative z-10 flex flex-col h-screen justify-around'>
        <div className='space-y-4'>
          <div className='flex flex-col md:flex-row gap-2 justify-center items-center md:justify-start'>
            <span className='flex justify-center'>
              <Star fill='#FFD700' className='text-secondary' />
              <Star fill='#FFD700' className='text-secondary' />
              <Star fill='#FFD700' className='text-secondary' />
              <Star fill='#FFD700' className='text-secondary' />
              <Star fill='#FFD700' className='text-secondary' />
            </span>
            <span className='font-lato text-gray-700 font-semibold'>
              {" "}
              4.9/5 from 1,000+ customers
            </span>
          </div>
          <div className='space-y-2 text-center md:text-left'>
            <h1 className='text-4xl md:text-6xl font-raleway font-semibold'>
              Spotless Spaces, <span className='text-primary'>Stress-Free</span>{" "}
              Living
            </h1>
            <p className='md:text-lg font-semibold text-gray-700 md:w-[80%]'>
              Professional cleaning services that transform your space into a
              pristine sanctuary. Trusted by thousands of people across the
              city.
            </p>
          </div>
          <div className='mt-4 space-y-4 font-semibold'>
            {/* <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center md:justify-start items-center'>
            <div className='flex gap-2 items-center bg-white/10 px-3 py-2 rounded-full text-sm md:text-base text-gray-700'>
              <CheckCircle className='text-primary' />
              <span className=''>100% Satisfaction Guarantee</span>
            </div>

            <div className='flex gap-2 items-center bg-white/10 px-3 py-2 rounded-full text-sm md:text-base text-gray-700'>
              <CheckCircle className='text-primary' />
              <span>Eco-Friendly Products</span>
            </div>
          </div> */}
            <div className='flex gap-2 md:gap-4 justify-center md:justify-start flex-wrap'>
              <button className='flex gap-2 items-center text-[#fafafa] bg-primary px-10 py-4 md:text-sm rounded-sm'>
                Get Free Quote
                <ArrowRight size={16} />
              </button>
              {/* <button className='flex gap-2 items-center bg-white p-2 md:px-10 md:py-4 text-sm rounded-sm text-black'>
              View Our Services
            </button> */}
            </div>
          </div>
        </div>

        <div>
          <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center md:justify-start items-center'>
            <div className='flex gap-2 items-center bg-white/10 px-3 py-2 rounded-full text-sm md:text-base text-gray-700'>
              <CheckCircle className='text-primary' />
              <span className=''>100% Satisfaction Guarantee</span>
            </div>

            <div className='flex gap-2 items-center bg-white/10 px-3 py-2 rounded-full text-sm md:text-base text-gray-700'>
              <CheckCircle className='text-primary' />
              <span>Eco-Friendly Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* second side */}
      <div className='h-screen w-full md:w-[50%]'>
        <div className='relative md:mt-20'>
          <div className='absolute top-0 left-0 w-[100px] h-[100px] bg-main-bg'></div>
          <div className='absolute -top-5 left-1/2 transform -translate-x-1/2  w-[45%] z-20 rounded-sm'>
            <img src='/airb.jpg' className='oject-cover rounded-sm' />
          </div>
          <div className='absolute right-0 top-40 w-[45%] rounded-sm'>
            <img src='/kitchen.jpg' className='oject-cover rounded-sm' />
          </div>

          <div className='absolute top-50  w-[45%] z-30 rounded-sm'>
            <img src='/office-2.jpg' className='oject-cover rounded-sm' />
          </div>
        </div>
      </div>
      {/* <div class='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'></div> */}
    </section>
  );
}

export default HeroSection;

// an image of a neat home sitting room with natural colors and #FF0000
// create an image of a neat home sitting room that has very scanty furniture's, and cleaning material placed gently in a visible place with natural colors and #FF0000

