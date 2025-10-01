import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from 'react'
const services = [
  {
    title: "Residential Cleaning",
    description:
      "Thorough home cleaning that covers living rooms, kitchens, bedrooms, and more, leaving your home fresh, comfortable, and inviting",
    dirty: "/kitchen-guys.jpg",
    clean: "/herosection3.jpg",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Professional cleaning for offices, retail, and business spaces to create a spotless and welcoming environment for clients and employees to maintain productivity.",
    dirty: "/office-dirty.jpg",
    clean: "/kitchen-guys.jpg",
  },
  {
    title: "Deep Cleaning",
    description:
      "A detailed top-to-bottom clean that tackles hidden dirt, grime, and buildup in hard-to-reach areas for a true refreshed and neat environment",
    dirty: "/deep-dirty.jpg",
    clean: "/single-lady.jpg",
  },
  {
    title: "Carpet Cleaning",
    description: "Restore carpets with deep stain & odor removal.",
    dirty: "/carpet-messy.png",
    clean: "/carpet-clean.jpg",
  },
];

function ExtraSection2() {

  // const ref = useRef(null);


  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });


  return (
    <section className='bg-white py-10 md:py-16 lg:py-[80px] flex flex-col space-y-10'>
      <div className='px-5 md:px-20'>
        <div className='bg-[#faf7f7] space-y-2 h-full flex flex-col justify-center items-center py-10 md:py-16 px-10'>
          <h2 className='font-raleway text-2xl md:text-4xl text-center font-semibold'>
            Let's leave you speechless and spotless
          </h2>
          <p className='text-lg leading-relaxed text-gray-700 text-center'>
           Experience cleaning that shines beyond expectations,
            <br className='hidden md:block' />
            leaving your space flawless, refreshing, and truly inviting
          </p>
          <button className='flex gap-2 items-center text-primary py-2 px-4 md:px-10 md:py-4 rounded-sm  font-semibold bg-primary text-white'>
            Get started
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className='overflow-hidden grid grid-cols-1 w-full pl-5 md:pl-20 '>
        <motion.div
          className='flex gap-10'
          animate={{
            x: ["0%", "-25%", "-50%", "-75%", "0%"], // step movement
          }}
          transition={{
            duration: 70, // total time for full cycle
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            repeatDelay: 5, // pause before looping
          }}>
          {[...services, ...services].map((item, i) => (
            <div
              key={i}
              className='w-[100%] md:w-1/2 flex-shrink-0 flex flex-col items-center'>
              <img
                src={item.clean}
                alt={item.title}
                className=' object-cover rounded-md'
              />
              {/* <p className='mt-2 font-semibold text-gray-700'>
                {item.title}
              </p> */}
            </div>
          ))}
        </motion.div>
      </div>
      {/* <div ref={ref} className='h-[400vh] bg-red-600'>
        <div className='sticky h-screen top-0'>
          <div className=''>
            {services.map((service, i) => {
              const start = i / services.length;
              const end = (i + 1) / services.length;

              const clipPath = useTransform(
                scrollYProgress,
                [start, end],
                i === services.length - 1
                  ? ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"] // always fully open
                  : ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
              );

              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.05, end - 0.05, end],
                i === services.length - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]
              );

              return (
                <motion.div
                  key={i}
                  className='absolute inset-0'
                  style={{ opacity }}>
                  <img
                    src={service.dirty}
                    alt='dirty'
                    className='absolute inset-0 w-full h-full object-cover'
                  />
                  <motion.img
                    src={service.clean}
                    alt='clean'
                    className='absolute inset-0 w-full h-full object-cover'
                    style={{ clipPath }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default ExtraSection2