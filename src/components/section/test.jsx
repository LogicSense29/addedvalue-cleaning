import { ArrowRight, Dot, House } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const services = [
  {
    title: "Residential Cleaning",
    description: "Regular house cleaning for busy families. Weekly, bi-weekly, or monthly schedules available.",
    dirty: "/residential-dirty.jpg",
    clean: "/residential-clean.jpg",
  },
  {
    title: "Commercial Cleaning",
    description: "Professional office and commercial space cleaning to maintain a productive environment.",
    dirty: "/office-dirty.jpg",
    clean: "/office-clean.jpg",
  },
  {
    title: "Deep Cleaning",
    description: "Comprehensive one-time cleaning for move-ins, special events, or seasonal refreshes.",
    dirty: "/deep-dirty.jpg",
    clean: "/deep-clean.jpg",
  },
  {
    title: "Carpet Cleaning",
    description: "Restore carpets to like-new condition with our deep stain and odor removal process.",
    dirty: "/carpet-dirty.jpg",
    clean: "/carpet-clean.jpg",
  },
];

function ServiceSection3() {
  const ref = useRef(null);

//  const { scrollYProgress } = useScroll({
//    target: ref,
//    offset: ["0 1", "1 1"], // start when it enters, end when it's fully in view
//  });

//  // scrollYProgress goes 0 → 1
//  // We map that into a number (0% → 100%) for clip-path
//  const clipPath = useTransform(
//    scrollYProgress,
//    [0, 1],
//    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
//  );
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Reveal as you scroll the tall section
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  
  return (
    <section className='px-5 md:px-20 py-10 md:py-16 lg:py-[80px] bg-[#fafafa]'>
      <div className='space-y-8'>
        <div>
          <div className='space-y-2 flex flex-col md:flex-row justify-between'>
            <h2 className='text-4xl font-raleway font-semibold text-gray-900'>
              AddedValue <br /> Cleaning Services
            </h2>
            <p className='text-lg leading-relaxed text-gray-700'>
              From regular maintenance to deep cleaning projects,
              <br className='hidden md:block' /> we offer comprehensive
              solutions tailored to your specific needs and schedule.
            </p>
          </div>

          {/* Tall wrapper for scroll */}
          <div ref={ref} className='relative flex flex-col h-[300vh]'>
            {/* Sticky inner container */}
            <div className='sticky top-0 h-screen flex flex-col md:flex-row gap-8 items-center'>
              {/* Text side */}
              <div className='py-6 flex flex-col gap-2 w-full md:w-1/3'>
                <h3 className='font-raleway text-xl font-semibold text-gray-900'>
                  Commercial Cleaning
                </h3>
                <p className='text-gray-700 text-base'>
                  Professional cleaning for offices, retail, and business spaces
                  to create a spotless and welcoming environment for clients and
                  employees
                </p>
                <a className='flex gap-2 items-center text-primary py-2 font-semibold underline self-start'>
                  Learn more
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className='w-full md:w-2/3 relative h-[80%] flex flex-col gap-10'>
                <div className='relative h-full'>
                  {/* Dirty image */}
                  <img
                    src='/carpet-messy.png'
                    alt='Dirty room'
                    className='absolute inset-0 w-full h-full object-cover rounded-sm'
                  />

                  {/* Clean image */}
                  <motion.img
                    src='/carpet-clean.jpg'
                    alt='Clean room'
                    className='absolute inset-0 w-full h-full object-cover rounded-sm'
                    style={{ clipPath }}
                  />
                </div>

                {/* Progress bar */}
                <motion.div
                  className='h-1 bg-red-900 origin-left rounded-full'
                  style={{ scaleX: scrollYProgress }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection3;

// a realistic image of a lady wearing a shirt has the logo of the attached subject, smiling  cleaning a house
// A professional cleaning service scene showcasing window cleaning, modern and bright interior, spotless results, 2 friendly uniformed color  #FF0000 cleaners at different locations , natural lighting, realistic photography style, high resolution, minimal background distractions.
