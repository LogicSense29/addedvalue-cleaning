import { Clock, Shield, Users } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

const benefits = [
  {
    title: "Eco-Friendly Tools",
    description:
      "We use safe, sustainable products and equipment that protect everyone and the environment.",
  },
  {
    title: "Trained Professionals",
    description:
      "Background-checked cleaners with ongoing training in the latest techniques.",
    icon: Users,
  },
  {
    title: "Fully Insured",
    description:
      "Complete protection with liability insurance and bonded cleaning professionals.",
    icon: Shield,
  },
];

function ChoosingUs() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const scale = useTransform(
//     scrollYProgress,
//     [0, 0.5, 0.75, 1],
//     [1, 0.8, 0.6, 0.4]
    // ["100%", "80%", "60%", "40%"]
//   );

  return (
    <section className='py-10 md:py-16 lg:py-[80px] px-5 md:px-10 lg:px-20 space-y-10 bg[]'>
      <div className='  text-center'>
        <h2 className='text-2xl lg:text-4xl font-raleway font-semibold text-gray-900'>
          Why Choose <br /> AddedValue Services
        </h2>
        <p className='text-base md:text-md lg:text-lg leading-relaxed text-gray-700'>
          From regular maintenance to deep cleaning projects,
          <br className='hidden md:block' /> we offer comprehensive solutions
          tailored to your specific needs and schedule.
        </p>
      </div>
      <div className='flex flex-col md:flex-row'>
        {benefits.map((items, index) => (
          <div className='bg-[#FBF7F7] px-10 py-8 lg:p-20 flex-1' key={index}>
            <h3 className='text-xl font-raleway font-semibold text-gray-900'>
              {items.title}
            </h3>
            <p className='text-base text-gray-700'>{items.description}</p>
          </div>
        ))}
      </div>
      {/* <motion.div ref={ref} className='h-[300vh] bg-purple-700'>
        <div className='sticky top-0 h-screen flex items-center justify-center bg-blue-600 overflow-hidden'>
          <motion.div
            className='h-full inset-0 bg-purple-700 flex justify-center items-center'
            style={{ scale }}>
            <motion.img
              src='/2-cleaners.jpg'
              alt='Center'
              className='object-cover'
            />
          </motion.div>
        </div>
      </motion.div> */}
    </section>
  );
}

export default ChoosingUs;

// A professional cleaning service scene showcasing  modern and bright interior, spotless results, a friendly uniformed color  #FF0000 cleaners at the center smiling , natural lighting, realistic photography style, high resolution, minimal background distractions.
