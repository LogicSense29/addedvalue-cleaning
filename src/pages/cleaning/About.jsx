import {
  Book,
  ThumbsUp,
  User,
  Users,
  Dot,
  Check,
  ArrowRight,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Counter } from "../../components/section/TrustedCleaning2";
import ExtraSection2 from "../../components/section/ExtraSection2";

const card = [
  {
    icon: Users,
    count: "1000",
    description: "Happy Customers",
  },
  {
    icon: Book,
    count: "8",
    description: "Years Experience",
  },
  //   {
  //     icon: User,
  //     count: "95%",
  //     description: "5-Star Reviews",
  //   },
  {
    icon: ThumbsUp,
    count: "99",
    description: "Satisfaction Rate",
  },
];

export default function AboutPage({
  companyName = "SparkleClean",
  accentColor = "#16a34a",
}) {
  const ref = useRef(null);

  // Single scroll observer for the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <main className='min-h-screen bg-gray-50 text-gray-900'>
      {/* Hero Section */}
      <section className='container pt-6 sm:pt-10 md:pt-20 px-5 md:px-0 relative min-h-[50vh] flex flex-col justify-center items-center bg-[url("/2-cleaners.jpg")] bg-no-repeat bg-cover bg-top'>
        {/* Overlay */}
        <div className='absolute inset-0 bg-white/80 backdrop-blur-[2px]'></div>

        <div className='flex flex-col items-center relative z-10 text-center max-w-3xl space-y-4 py-10'>
          {/* <span className='text-gray-600 tracking-wider bg-red-100  px-3 py-1 text-sm font-bold text-red-700 rounded-full'>
            About AddedValue
          </span> */}
          <h1 className='heading-text leading-none text-[37px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-raleway font-semibold text-gray-900'>
            About <span className='text-primary'>AddedValue Cleaning</span>
          </h1>
          <p className='font-normal text-center text-gray-700 max-w-md tracking-wider'>
            We create clean, healthy, and stress-free spaces with eco-friendly
            care and unmatched excellence.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section
        ref={ref}
        id='values'
        className=' bg-[#faf7f7]'>
        <div className='mx-auto max-w-6xl px-6 py-12 lg:py-16'>
          <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-end'>
            <div className='col-span-2'>
              <h2 className='text-2xl font-semibold text-2xl lg:text-4xl'>
                Our Mission
              </h2>
              <p className='text-base md:text-md lg:text-lg leading-relaxed mt-4 text-gray-700'>
                Our goal is to create sparkling clean spaces for families and
                businesses, using eco‑friendly products and a trustworthy team.
                We believe a clean environment brings peace of mind and improves
                productivity.
              </p>

              <ul className='mt-8 grid gap-4 sm:grid-cols-2'>
                <li className='flex items-start gap-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-green-600'>
                    🧽
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold'>
                      Attention to Detail
                    </h4>
                    <p className='mt-1 text-base text-gray-700'>
                      We clean every corner so your space shines from top to
                      bottom.
                    </p>
                  </div>
                </li>

                <li className='flex items-start gap-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600'>
                    🌿
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold'>
                      Eco‑Friendly Products
                    </h4>
                    <p className='mt-1 text-gray-700'>
                      Safe for your family, pets, and the planet.
                    </p>
                  </div>
                </li>

                <li className='flex items-start gap-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-green-600'>
                    ⏱
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold'>
                      Reliable Scheduling
                    </h4>
                    <p className='mt-1 text-gray-700'>
                      We show up on time, every time — no excuses.
                    </p>
                  </div>
                </li>

                <li className='flex items-start gap-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-green-600'>
                    🤝
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold'>
                      Trusted Professionals
                    </h4>
                    <p className='mt-1 text-gray-700'>
                      Our cleaners are trained, background‑checked, and
                      friendly.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className='bg-[#222222] rounded-2xl p-6 text-center flex flex-col gap-4'>
              {card.map((item, index) => {
                // Map scroll progress → count range for each stat
                const count = useTransform(
                  scrollYProgress,
                  [0, 1],
                  [0, item.count]
                );
                const rounded = useSpring(count, {
                  stiffness: 100,
                  damping: 20,
                });
                return (
                  <div
                    key={index}
                    className={`border-none flex flex-col gap-1 justify-between ${
                      index != 2 ? "" : "border-b-transparent"
                    }  ${index != 0 ? "pt-0" : "pt-0"} pb-0`}>
                    <Counter
                      target={item.count}
                      progress={scrollYProgress}
                      index={index}
                    />
                    <p className='text-white'>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ExtraSection2 />

      {/* Team Section */}
      {/* <section className='mx-auto max-w-6xl px-6 py-12 lg:py-16'>
        <h2 className='text-2xl font-bold'>Meet Our Cleaning Experts</h2>
        <p className='mt-3 text-gray-600'>
          A dedicated team that treats your space like their own.
        </p>

        <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {[
            {
              name: "Bukky Odunsi",
              role: "Founder & Operations",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
            },
            {
              name: "Adaeze Chukwu",
              role: "Senior Cleaner",
              img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop",
            },
            {
              name: "Seyi Martins",
              role: "Maintenance Lead",
              img: "https://images.unsplash.com/photo-1545996124-1b38f7a7b4d1?q=80&w=800&auto=format&fit=crop",
            },
            {
              name: "Lola A.",
              role: "Customer Support",
              img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=800&auto=format&fit=crop",
            },
          ].map((m) => (
            <div key={m.name} className='rounded-xl bg-white p-4 shadow-sm'>
              <img
                alt={m.name}
                src={m.img}
                className='h-36 w-full rounded-lg object-cover'
              />
              <div className='mt-3'>
                <div className='text-sm font-semibold'>{m.name}</div>
                <div className='mt-1 text-sm text-gray-500'>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* How We Work */}
      {/* <section className='border-t border-gray-200 bg-white'>
        <div className='mx-auto max-w-6xl px-6 py-12 lg:py-16'>
          <h2 className='text-2xl font-bold'>How We Work</h2>
          <ol className='mt-8 grid gap-8 sm:grid-cols-2'>
            <li>
              <div className='font-medium'>1. Book Online</div>
              <p className='mt-2 text-sm text-gray-600'>
                Schedule a cleaning at your convenience in just a few clicks.
              </p>
            </li>

            <li>
              <div className='font-medium'>2. We Arrive On Time</div>
              <p className='mt-2 text-sm text-gray-600'>
                Our professional team shows up promptly, ready to clean.
              </p>
            </li>

            <li>
              <div className='font-medium'>3. We Clean Thoroughly</div>
              <p className='mt-2 text-sm text-gray-600'>
                Using safe and effective methods to leave your space spotless.
              </p>
            </li>

            <li>
              <div className='font-medium'>4. Enjoy Your Sparkling Space</div>
              <p className='mt-2 text-sm text-gray-600'>
                Sit back and relax — we’ll handle the mess.
              </p>
            </li>
          </ol>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section id='contact' className='mx-auto max-w-6xl px-6 py-12 lg:py-16'>
        <div className='rounded-2xl bg-green-600/5 p-8 sm:flex sm:items-center sm:justify-between'>
          <div>
            <h3 className='text-lg font-bold'>Need Professional Cleaning?</h3>
            <p className='mt-2 text-sm text-gray-700'>
              Contact us today and let’s make your space shine.
            </p>
          </div>

          <form
            className='mt-6 sm:mt-0 sm:flex sm:gap-4'
            onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              id='email'
              type='email'
              required
              placeholder='Your email'
              className='w-full min-w-[220px] rounded-md border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300 sm:w-auto'
            />
            <button
              type='submit'
              className='mt-3 inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 sm:mt-0'>
              Contact Us
            </button>
          </form>
        </div>
      </section> */}

      {/* <div className='mx-auto max-w-6xl px-6 pb-12 text-center text-xs text-gray-500'>
        <p>
          © {new Date().getFullYear()} {companyName}. All rights reserved. This
          page intentionally has no header or footer for flexible embedding.
        </p>
      </div> */}
    </main>
  );
}

//   <section className='mx-auto max-w-6xl px-6 py-16 lg:py-24'>
//     <div className='grid gap-8 lg:grid-cols-2 lg:items-center'>
//       <div>
//         <p className='inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700'>
//           About Us
//         </p>
//         <h1 className='mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl'>
//           Your Trusted Partner for a Sparkling Clean Space
//         </h1>
//         <p className='mt-6 max-w-2xl text-lg leading-relaxed text-gray-700'>
//           At {companyName}, we provide reliable, affordable, and top‑quality
//           cleaning services for homes and offices. Our mission is simple:
//           make your environment spotless so you can focus on what truly
//           matters.
//         </p>

//         <div className='mt-8 flex flex-wrap gap-3'>
//           <a
//             href='#values'
//             className='inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'>
//             Our Values
//           </a>

//           <a
//             href='#contact'
//             className='inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-green-700 ring-1 ring-green-100 hover:bg-green-50'>
//             Book a Cleaning
//           </a>
//         </div>
//       </div>

//       <div className='order-first lg:order-last'>
//         <div className='relative mx-auto max-w-md overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg'>
//           <img
//             alt='Professional cleaner at work'
//             src='https://images.unsplash.com/photo-1581579186989-9ec0bcad8b13?q=80&w=1200&auto=format&fit=crop'
//             className='h-64 w-full object-cover sm:h-72 lg:h-80'
//           />
//           <div className='p-6'>
//             <h3 className='text-lg font-semibold'>
//               Professional, Reliable & Thorough
//             </h3>
//             <p className='mt-2 text-sm text-gray-600'>
//               From deep cleaning to routine maintenance — we’ve got you
//               covered.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>;
