import {
  ArrowBigRightIcon,
  ArrowRight,
  CheckCheckIcon,
  CheckCircle,
  CheckIcon,
  Star,
} from "lucide-react";
import React from "react";

function HeroSection3() {
  return (
    <section className='relative min-h-screen flex flex-col md:flex-row lg:justify-left items-center px-5 md:px-0 bg-[#ffffff] gap-8 bg-[url("./kitchen-no-roof.png")] md:bg-[url("./kitchen-white.png")] bg-no-repeat bg-left'>
      <div className='w-full md:mx-auto h-screen md:pl-12 lg:pl-20 pt-20 relative z-10 flex flex-col justify-around'>
        <div className='space-y-4'>
          <div className='star flex flex-col md:flex-row gap-2 justify-center items-center md:justify-start'>
            <div className='flex items-center'>
              <Star fill='#FFD700' className='text-secondary' size={16} />
              <Star fill='#FFD700' className='text-secondary' size={16} />
              <Star fill='#FFD700' className='text-secondary' size={16} />
              <Star fill='#FFD700' className='text-secondary' size={16} />
              <Star fill='#FFD700' className='text-secondary' size={16} />
            </div>
            <span className='text-gray-900 font-semibold'>
              4.9/5 from 1,000+ customers
            </span>
          </div>
          <div className='space-y-2 text-center md:text-left flex flex-col'>
            <h1 className='heading-text leading-none text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-raleway font-semibold'>
              Spotless Spaces,
              <br className='hidden sm:block' />{" "}
              <span className='text-primary'>Stress-Free</span> Living
            </h1>
            <p className='font-semibold text-gray-900 md:w-1/2 self-center md:self-start'>
              Professional cleaning services that transform your space into a
              pristine sanctuary.
              <br className='para hidden ' /> Trusted by thousands of people
              across the city.
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
              <a
                href='/contact'
                className='flex gap-2 items-center text-[#fafafa] bg-primary px-10 py-4 md:text-sm rounded-sm'>
                Get Free Quote
                <ArrowRight size={16} />
              </a>
              {/* <button className='flex gap-2 items-center bg-white p-2 md:px-10 md:py-4 text-sm rounded-sm text-black'>
              View Our Services
            </button> */}
            </div>
          </div>
        </div>

        <div>
          <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center md:justify-start items-center'>
            <div className='flex gap-2 items-center bg-white/10 px-3 py-2 rounded-full font-semibold text-gray-900'>
              <CheckCircle className='text-primary' size={16} />
              <span className=''>100% Satisfaction Guarantee</span>
            </div>

            <div className='flex gap-2 items-center bg-white/10 px-3 py-2 rounded-full font-semibold text-gray-900'>
              <CheckCircle className='text-primary' size={16} />
              <span>Eco-Friendly Products</span>
            </div>
          </div>
        </div>
      </div>

      <div class='block md:hidden absolute inset-0 bg-gradient-to-r from-white/10 via-white/50 to-transparent'></div>

      {/* second side */}
      <div
        className='absolute h-screen hidden md:block w-full bg-no-repeat bg-cover scale-x-[-1]'
        style={{ backgroundImage: "url('/bg-extended.png')" }}>
        {/* <div className=''>
          <img src='/kitchen.jpg' className='oject-cover rounded-sm' />
        </div> */}
      </div>
      {/* <div class='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent'></div> */}
    </section>
  );
}

export default HeroSection3;

// an image of a neat home sitting room with natural colors and #FF0000
// create an image of a neat home sitting room that has very scanty furniture's, and cleaning material placed gently in a visible place with natural colors and #FF0000
