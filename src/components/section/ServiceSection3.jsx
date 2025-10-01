import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Thorough home cleaning that covers living rooms, kitchens, bedrooms, and more, leaving your home fresh, comfortable, and inviting",
    dirty: "/residential-dirty.jpg",
    clean: "/residential-clean.jpg",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Professional cleaning for offices, retail, and business spaces to create a spotless and welcoming environment for clients and employees to maintain productivity.",
    dirty: "/office-dirty.jpg",
    clean: "/office-clean.jpg",
  },
  {
    title: "Deep Cleaning",
    description:
      "A detailed top-to-bottom clean that tackles hidden dirt, grime, and buildup in hard-to-reach areas for a true refreshed and neat environment",
    dirty: "/deep-dirty.jpg",
    clean: "/deep-clean.jpg",
  },
  {
    title: "Carpet Cleaning",
    description: "Restore carpets with deep stain & odor removal.",
    dirty: "/carpet-messy.png",
    clean: "/carpet-clean.jpg",
  },
];

export default function ServicesSection3() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className='py-10 md:py-16 lg:py-[80px] relative h-[400vh] bg-[#FBF7F7]'>
      <div className='px-5 md:px-20  space-y-2 flex flex-col md:flex-row justify-between items-end'>
        <h2 className='text-4xl font-raleway font-semibold text-gray-900'>
          AddedValue <br /> Cleaning Services
        </h2>
        <p className='text-lg leading-relaxed text-gray-700'>
          From regular maintenance to deep cleaning projects,
          <br className='hidden md:block' /> we offer comprehensive solutions
          tailored to your specific needs and schedule.
        </p>
      </div>
      {/* Sticky viewport */}
      <div className='sticky top-0 h-screen flex items-center justify-center'>
        <div className='flex flex-col md:flex-row w-full max-w-6xl px-6 gap-10'>
          {/* TEXT SIDE */}
          <div className='w-full md:w-1/3 relative'>
            {services.map((service, i) => {
              const start = i / services.length;
              const end = (i + 1) / services.length;

              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                i === services.length - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0]
              );

              const x = useTransform(
                scrollYProgress,
                [start, end],
                ["-50%", "0%"] // slides in from left
              );

              return (
                <motion.div
                  key={i}
                  className='absolute top-1/3'
                  style={{ opacity, x }}>
                  <h2 className='font-raleway text-2xl font-semibold text-gray-900'>
                    {service.title}
                  </h2>
                  <p className='text-lg text-gray-700 mt-2'>
                    {service.description}
                  </p>
                  <a className='flex gap-2 items-center text-primary py-2 font-semibold underline self-start'>
                    Learn more
                    <ArrowRight size={16} />
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* IMAGE SIDE */}
          <div className='relative w-full md:w-2/3 h-[400px] md:h-[500px] overflow-hidden rounded-sm shadow-sm'>
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
      </div>
    </section>
  );
}
