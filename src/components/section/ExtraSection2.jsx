import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef, useEffect, useState, useCallback } from 'react'
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
  const carouselRef = useRef(null);

    const innerRef = useRef(null); // draggable content
    const [maxDrag, setMaxDrag] = useState(0);

    const updateConstraints = useCallback(() => {
      const outer = carouselRef.current;
      const inner = innerRef.current;
      if (!outer || !inner) return;

      // get container paddings (px-6 -> padding-left/right)
      const style = window.getComputedStyle(outer);
      const paddingLeft = parseFloat(style.paddingLeft) || 0;
      const paddingRight = parseFloat(style.paddingRight) || 0;

      // visible width inside paddings
      const visibleWidth = outer.clientWidth - paddingLeft - paddingRight;
      const contentWidth = inner.scrollWidth;

      const diff = contentWidth - visibleWidth;
      // negative because framer-motion expects left to be negative when content wider than container
      setMaxDrag(diff > 0 ? -Math.ceil(diff) : 0);
    }, []);

    useEffect(() => {
      updateConstraints();
      window.addEventListener("resize", updateConstraints);
      window.addEventListener("load", updateConstraints);
      return () => {
        window.removeEventListener("resize", updateConstraints);
        window.removeEventListener("load", updateConstraints);
      };
    }, [updateConstraints]);


  return (
    <section className='bg-white py-10 md:py-16 lg:py-[80px] flex flex-col space-y-10'>
      <div className='px-5 sm:px-10 lg:px-20'>
        <div className='bg-[#faf7f7] h-[50vh] flex flex-col justify-center items-center py-10 md:py-16 px-10'>
          <h2 className='font-raleway text-3xl md:text-4xl text-center font-semibold'>
            Let's leave you speechless and spotless
          </h2>
          <p className='text-lg leading-relaxed text-gray-700 text-center'>
            Experience cleaning that shines beyond expectations,
            <br className='hidden md:block' />
            leaving your space flawless, refreshing, and truly inviting
          </p>
          <button className='flex gap-2 items-center text-primary py-2 px-4 md:px-6 md:py-3 rounded-full  font-semibold bg-primary text-white mt-4'>
            Get started
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <motion.div
        className='overflow-hidden cursor-grab grid grid-cols-1 w-full pl-5 md:pl-20 '
        ref={carouselRef}>
        <motion.div
          className='flex gap-10'
          ref={innerRef}
          drag='x'
          dragConstraints={{ left: maxDrag, right: 0 }}
          dragElastic={0.12}
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
            <motion.div
              key={i}
              className='w-[100%] md:w-1/2 flex-shrink-0 flex flex-col items-center'>
              <motion.img
                src={item.clean}
                alt={item.title}
                draggable={false}
                whileTap={{ cursor: "grabbing" }}
                className=' object-cover rounded-md'
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ExtraSection2