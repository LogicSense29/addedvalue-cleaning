import { Clock, Shield, Users } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
// import attention from "../common/ui/attention";



const benefits = [
  {
    title: "Attention to Details",
    // description:
    //   "We use safe, sustainable products and equipment that protect everyone and the environment.",
    description:
      "Every corner, every surface — cleaned with precision and care.",
    img: "tools.jpg",
    icon: (
      <svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='28' cy='28' r='12' stroke='black' strokeWidth='2' />
        <line x1='37' y1='37' x2='48' y2='48' stroke='black' strokeWidth='2' />
        <path
          d='M24 24 L26 26 M30 22 L32 24 M22 30 L24 32'
          stroke='#FF0000'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Tools",
    // description:
    //   "We use safe, sustainable products and equipment that protect everyone and the environment.",
    description: "We use safe, sustainable products that protect your home.",
    img: "tools.jpg",
    icon: (
      <svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='20'
          y='24'
          width='20'
          height='28'
          rx='4'
          stroke='black'
          strokeWidth='2'
        />
        <path
          d='M30 24V18C30 15 34 15 34 18V24'
          stroke='black'
          strokeWidth='2'
        />
        <path d='M44 16C38 18 36 26 36 30C42 30 48 24 44 16Z' fill='#FF0000' />
      </svg>
    ),
  },

  {
    title: "Trained Professionals",
    // description:
    //   "Background-checked cleaners with ongoing training in the latest techniques.",
    description:
      "Our cleaners are vetted and trained to deliver spotless results.",
    icon: (
      <svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='32' cy='22' r='10' stroke='black' strokeWidth='2' />
        <path
          d='M22 46C22 38 42 38 42 46V54H22V46Z'
          stroke='black'
          strokeWidth='2'
        />
        <circle cx='32' cy='22' r='3' fill='#FF0000' />
      </svg>
    ),
  },

  {
    title: "Reliable Scheduling",
    // description:
    //   "We use safe, sustainable products and equipment that protect everyone and the environment.",
    description: "Flexible cleaning plans that always fit your busy lifestyle.",
    img: "tools.jpg",
    icon: (
      <svg
        width='64'
        height='64'
        viewBox='0 0 64 64'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          x='14'
          y='18'
          width='36'
          height='32'
          rx='4'
          stroke='black'
          strokeWidth='2'
        />
        <line x1='14' y1='26' x2='50' y2='26' stroke='black' strokeWidth='2' />
        <circle cx='44' cy='44' r='8' stroke='black' strokeWidth='2' />
        <path
          d='M44 44L44 40M44 44L48 44'
          stroke='#FF0000'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    ),
  },
  // {
  //   title: "Fully Insured",
  //   description:
  //     "Complete protection with liability insurance and bonded cleaning professionals.",
  //   icon: Shield,
  // },
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
      <div className='bg-[#FBF7F7] relative '>
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 800'
          class='absolute inset-0 min-h-full w-full object-cover pointer-events-none'

          preserveAspectRatio='xMidYMid meet'
          > */}
          {/* <!-- Top Right Abstract Curve --> */}
          {/* <path
            d='M1440 0 H1000 Q1100 200 1440 300 Z'
            fill='#f4c2c2'
            opacity='0.25'
          /> */}

          {/* <!-- Bottom Left Bubbles --> */}
          {/* <g opacity='0.3'>
            <circle cx='80' cy='720' r='35' fill='#f4c2c2' />
            <circle cx='140' cy='700' r='18' fill='#f4c2c2' />
            <circle cx='100' cy='760' r='12' fill='#f4c2c2' />
          </g> */}

          {/* <!-- Bottom Left Sparkle --> */}
          {/* <g opacity='0.3' transform='translate(60 640)'>
            <path
              d='M20 0 L25 15 L40 20 L25 25 L20 40 L15 25 L0 20 L15 15 Z'
              fill='#f4c2c2'
            />
          </g>
        </svg> */}

        <div className=' px-10 py-8 lg:py-13  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6'>
          {/* {benefits.map((items, index) => (
          <div className='bg-[#FBF7F7] px-10 py-8 lg:p-20 flex-1' key={index}>
            <h3 className='text-xl font-raleway font-semibold text-gray-900'>
              {items.title}
            </h3>
            <p className='text-base text-gray-700'>{items.description}</p>
          </div>
        ))} */}

          {benefits.map((items, index) => (
            <div
              className=' flex-1 space-y-4 bg-white border border-gray-200 p-6 rounded-md'
              key={index}>
              <div className=''>{items.icon}</div>
              <h3 className='text-xl font-raleway font-semibold text-gray-900'>
                {items.title}
              </h3>
              <p className='text-base text-gray-700'>{items.description}</p>
            </div>
          ))}
        </div>
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
// RewriteEngine On
// RewriteCond %{HTTPS} off
// RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

// # React SPA support — send non-file/directory requests to index.html
// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteCond %{REQUEST_FILENAME} !-d
// RewriteRule ^ index.html [L]

// # php -- BEGIN cPanel-generated handler, do not edit
// # Set the “ea-php81” package as the default “PHP” programming language.
// <IfModule mime_module>
//   AddHandler application/x-httpd-ea-php81 .php .php8 .phtml
// </IfModule>
// # php -- END cPanel-generated handler, do not edit

// flex flex-col md:flex-row 
