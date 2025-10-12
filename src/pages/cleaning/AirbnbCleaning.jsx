import React from "react";
import ExtraSection2 from "../../components/section/ExtraSection2";
import { useOutletContext } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Quick Clean",
    description:
      "Fast and efficient cleaning ideal for busy homes. Includes dusting, sweeping, and light surface care to refresh your space in minimal time.",
    dirty: "/capa-dirty.jpg",
    clean: "/carpet-clean.jpg",
  },
  {
    title: "Standard Clean",
    description:
      "A complete routine clean for living rooms, kitchens, and bedrooms, ensuring every corner looks neat, smells fresh, and feels perfectly comfortable.",
    dirty: "/capa-dirty.jpg",
    clean: "/carpet-clean.jpg",
  },
  {
    title: "Toiletries Restock",
    description:
      "We inspect, replace, and restock all essential supplies — from tissues to soaps — keeping your space hygienic, fresh, and ready for daily use.",
    dirty: "/office-dirty.jpg",
    clean: "/office-cleanup.jpg",
  },
  {
    title: "Damage Report & Check",
    description:
      "Detailed inspection and documentation of property condition to identify, report, and prevent damages before, during, or after a cleaning session.",
    dirty: "/deep-dirty.jpg",
    clean: "/deep-cleaning.jpg",
  },
  {
    title: "Supervision",
    description:
      "Professional on-site monitoring to ensure high cleaning standards, staff efficiency, and quality control for a consistently spotless environment.",
    dirty: "/deep-dirty.jpg",
    clean: "/deep-cleaning.jpg",
  },
  {
    title: "After-Service Review",
    description:
      "We conduct a final walkthrough and feedback session to confirm satisfaction, ensure details are perfected, and guarantee top-quality service delivery.",
    dirty: "/review-dirty.jpg",
    clean: "/review-clean.jpg",
  },
];

  // {
  //   title: "Office Cleaning",
  //   description:
  //     "Thorough home cleaning that covers living rooms, kitchens, bedrooms, and more, leaving your home fresh, comfortable, and inviting",
  //   dirty: "/capa-dirty.jpg",
  //   clean: "/carpet-clean.jpg",
  // },
  //   {
  //     title: "Carpet Cleaning",
  //     description: "Restore carpets with deep stain & odor removal.",
  //     dirty: "/carpet-messy.png",
  //     clean: "/carpet-clean.jpg",
  //   },


function AirbnbCleaning() {
  const setModal = useOutletContext();
  return (
    <div>
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

      <section className='pt-6 sm:pt-10 md:pt-20 px-5 md:px-0 relative min-h-[50vh] flex flex-col justify-center items-center bg-[url("/airbnb.jpeg")] bg-no-repeat bg-cover bg-center'>
        {/* Overlay */}
        <div className='absolute inset-0 bg-white/80 backdrop-blur-[2px]'></div>

        <div className='flex flex-col items-center relative z-10 text-center max-w-3xl space-y-4 py-10'>
          {/* <span className='text-gray-600 tracking-wider bg-red-100  px-3 py-1 text-sm font-bold text-red-700 rounded-full'>
            About AddedValue
          </span> */}
          <h1 className='heading-text leading-none text-[37px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-raleway font-semibold text-gray-900'>
            {/* Commercial Services <span className='text-primary'>AddedValue Cleaning</span> */}
            Special Services
          </h1>
          <p className='font-normal text-center text-gray-700 max-w-md tracking-wider'>
            Professional cleaning tailored for short-stay rentals — delivering
            spotless, guest-ready spaces that leave lasting impressions and
            glowing reviews.
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
            <div key={index} className='cursor-pointed space-y-6 group h-full'>
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
                    Learn more
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

export default AirbnbCleaning;
