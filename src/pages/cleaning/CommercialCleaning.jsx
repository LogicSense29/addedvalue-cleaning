import React from 'react'

const services = [
  {
    title: "Restroom sanitation",
    description:
      "Thorough home cleaning that covers living rooms, kitchens, bedrooms, and more, leaving your home fresh, comfortable, and inviting",
    dirty: "/capa-dirty.jpg",
    clean: "/carpet-clean.jpg",
  },
  {
    title: "Waste Removal",
    description:
      "Thorough home cleaning that covers living rooms, kitchens, bedrooms, and more, leaving your home fresh, comfortable, and inviting",
    dirty: "/capa-dirty.jpg",
    clean: "/carpet-clean.jpg",
  },
  {
    title: "Retail Spaces Cleaning",
    description:
      "Professional cleaning for offices, retail, and business spaces — inside and out — creating a spotless, welcoming environment that boosts productivity.",
    dirty: "/office-dirty.jpg",
    clean: "/office-cleanup.jpg",
  },
  {
    title: "Warehouses",
    description:
      "A detailed top-to-bottom clean that tackles hidden dirt, grime, and buildup in hard-to-reach areas for a true refreshed and neat environment",
    dirty: "/deep-dirty.jpg",
    clean: "/deep-cleaning.jpg",
  },
  {
    title: "School Cleaning",
    description:
      "A detailed top-to-bottom clean that tackles hidden dirt, grime, and buildup in hard-to-reach areas for a true refreshed and neat environment",
    dirty: "/deep-dirty.jpg",
    clean: "/deep-cleaning.jpg",
  },
  {
    title: "Office Cleaning",
    description:
      "Thorough home cleaning that covers living rooms, kitchens, bedrooms, and more, leaving your home fresh, comfortable, and inviting",
    dirty: "/capa-dirty.jpg",
    clean: "/carpet-clean.jpg",
  },
  //   {
  //     title: "Carpet Cleaning",
  //     description: "Restore carpets with deep stain & odor removal.",
  //     dirty: "/carpet-messy.png",
  //     clean: "/carpet-clean.jpg",
  //   },
];

function CommercialCleaning() {
  return (
    <div>
      <section className='relative min-h-screen flex flex-col md:flex-row justify-center items-center pt-10 px-5 md:px-20 bg-[#fafafa] gap-6'>
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
      </section>
      <section className='py-10 md:py-16 lg:py-[80px] px-5 md:px-20  relative bg-[#FBF7F7] space-y-10'>
        <div className=' space-y-2 flex flex-col md:flex-row justify-between text-center md:text-left md:items-end'>
          <h2 className='text-4xl font-raleway  font-semibold text-gray-900'>
            AddedValue <br /> Commercial Services
          </h2>
          <p className='text-lg leading-relaxed text-gray-700'>
            From regular maintenance to deep cleaning projects,
            <br className='hidden md:block' /> we offer comprehensive solutions
            tailored to your specific needs and schedule.
          </p>
        </div>
        {/* Sticky viewport */}
        <div className='grid grid-cols-3 items-center justify-center gap-10 md:gap-6'>
          {services.map((items, index) => (
            <div key={index} className='cursor-pointed space-y-6 group'>
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
                <div className='flex'>
                  <p className='text-base text-gray-700'>{items.description}</p>
                  {/* <ArrowRight className='self-end' /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CommercialCleaning