import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Residential Cleaning",
    description:
      "Thorough home cleaning that covers living rooms, kitchens, bedrooms, and more, leaving your home fresh, comfortable, inviting and sparkling",
    dirty: "/capa-dirty.jpg",
    clean: "/carpet-clean.jpg",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Professional cleaning for offices, retail, and business spaces — inside and out — creating a spotless, welcoming environment that boosts productivity.",
    dirty: "/office-dirty.jpg",
    clean: "/office-cleanup.jpg",
  },
  {
    title: "Deep Cleaning",
    description:
      "A detailed top-to-bottom clean that tackles hidden dirt, grime, and buildup in hard-to-reach areas for a true refreshed and neat environment",
    dirty: "/deep-dirty.jpg",
    clean: "/deep-cleaning.jpg",
  },
  //   {
  //     title: "Carpet Cleaning",
  //     description: "Restore carpets with deep stain & odor removal.",
  //     dirty: "/carpet-messy.png",
  //     clean: "/carpet-clean.jpg",
  //   },
];

export default function Services() {
  const navigate = useNavigate()
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

  return (
    <section className='py-10 md:py-16 lg:py-[80px] px-5 md:px-10 lg:px-20 relative bg-[#FBF7F7] space-y-10'>
      <div className=' space-y-2 flex flex-col md:flex-row justify-between text-center md:text-left md:items-center'>
        <h2 className='text-2xl lg:text-4xl font-raleway  font-semibold text-gray-900'>
          AddedValue <br /> Cleaning Services
        </h2>
        <p className='text-lg leading-relaxed text-gray-700'>
          From regular maintenance to deep cleaning projects,
          <br className='hidden md:block' /> we offer comprehensive solutions
          tailored to your specific needs and schedule.
        </p>
      </div>
      {/* Sticky viewport */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6'>
        {services.map((items, index) => (
          <div key={index} className='cursor-pointed space-y-6 group' onClick={()=> navigate('/services')}>
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
              <div className='flex gap-1 justify-between items-center'>
                <p className='text-base text-gray-700 flex-[0.9]'>
                  {items.description}
                </p>
                <ArrowRight className='self-end' size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
