import { Clock, Shield, Users } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

const benefits = [
  {
    title: "Eco-Friendly Tools",
    description:
      "We use safe, sustainable products and equipment that protect your home, family, and the environment.",
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

function WhyChooseUs2() {
 const ref = useRef(null);
 const { scrollYProgress } = useScroll({
   target: ref,
   offset: ["start start", "end end"],
 });

 // Center image scales down
//  const rawScale = useTransform(scrollYProgress, [0, 0.5], ["80%", "40%"]);
 const centerWidth = useTransform(
   scrollYProgress,
   [ 0, 0.5, 0.75,  1],
   [ "100%", "80%" , "60%","40%"]
 );

   const centerHeight = useTransform(
     scrollYProgress,
     [0, 0.5, 0.75, 1],
    [ "100%", "80%" , "60%","40%"]
   );
   const centerScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

   const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
   const y = useTransform(scrollYProgress, [0.1, 0.5], [50, 0]);


   // Grid of images
   const images = [
     "/1.jpg",
     "/2.jpg",
     "/3.jpg",
     "/4.jpg",
     "/2-cleaners.jpg",
     "/6.jpg",
     "/7.jpg",
     "/8.jpg",
     "/9.jpg",
   ];

    // [0, 0.5, 0.75, 1], ["100%", "100%", "60%", "40%"];
//  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });

//  const rawLeftX = useTransform(scrollYProgress, [0.8, 0.2], ["-100%", "0%"]);
//  const leftX = useSpring(rawLeftX, { stiffness: 100, damping: 20 });

 // Left image slides in
//  const leftX = useTransform(scrollYProgress, [0.3, 0.8], ["-100%", "0%"]);
//  const leftOpacity = useTransform(scrollYProgress, [0.8, 0.3], [0, 1]);

 // Right image slides in
//  const rightX = useTransform(scrollYProgress, [0.8, 0.3], ["100%", "0%"]);
//  const rightOpacity = useTransform(scrollYProgress, [0.8, 0.3], [0, 1]);


  return (
    <section className='py-10 md:py-16 lg:py-[80px] px-5 md:px-20 space-y-10 bg[]'>
      <div className=' space-y-2 text-center'>
        <h2 className='text-4xl font-raleway font-semibold text-gray-900'>
          Why Choose <br /> AddedValue Services
        </h2>
        <p className='text-lg leading-relaxed text-gray-700'>
          From regular maintenance to deep cleaning projects,
          <br className='hidden md:block' /> we offer comprehensive solutions
          tailored to your specific needs and schedule.
        </p>
      </div>
      <div className='flex flex-col md:flex-row'>
        {benefits.map((items, index) => (
          <div className='bg-[#FBF7F7] px-10 py-8 md:p-20' key={index}>
            <h3 className='text-xl font-raleway font-semibold text-gray-900'>
              {items.title}
            </h3>
            <p className='text-base text-gray-700'>{items.description}</p>
          </div>
        ))}
      </div>
      <div ref={ref} className='h-[300vh] bg-purple-700'>
        <div className='sticky top-0 h-screen flex items-center justify-center bg-blue-600 overflow-hidden'>
          <div className='grid grid-cols-3 gap-4 w-full max-w-6xl overflow-hidden'>
            {images.map((src, i) => {
              // Detect middle image index
              const isCenter = i === Math.floor(images.length / 2);

              return (
                <motion.div
                  key={i}
                  style={{
                    opacity,
                    y,
                    ...(isCenter ? { width: centerWidth } : {}),
                  }}
                  className={`h-[250px] overflow-hidden rounded-lg shadow-md flex justify-center items-center`}>
                  <img
                    src={src}
                    alt={`img-${i}`}
                    className='w-full h-full object-cover'
                  />
                </motion.div>
              );
            })}
          </div>
          {/* <div className='bg-red-600 w-full flex flex-col md:flex-row justify-center items-center overflow-hidden'> */}
          {/* Center Image */}
          {/* <motion.div
              style={{ scale }}
              className='h-full inset-0 bg-purple-700'>
              <img
                src='/2-cleaners.jpg'
                alt='Center'
                className='object-cover'
              />
            </motion.div> */}

          {/* Left Image */}
          {/* <motion.img
              src='/left.jpg'
              alt='Left'
              className='w-1/3 absolute left-0 rounded-xl shadow-md object-cover'
              style={{ x: leftX, opacity: leftOpacity }}
            /> */}

          {/* Right Image */}
          {/* <motion.img
              src='/right.jpg'
              alt='Right'
              className='w-1/3 absolute right-0 rounded-xl shadow-md'
              style={{ x: rightX, opacity: rightOpacity }}
            /> */}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default WhyChooseUs2;


// A professional cleaning service scene showcasing  modern and bright interior, spotless results, a friendly uniformed color  #FF0000 cleaners at the center smiling , natural lighting, realistic photography style, high resolution, minimal background distractions.
