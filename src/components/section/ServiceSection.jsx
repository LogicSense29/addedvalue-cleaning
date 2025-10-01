import { ArrowRight, Dot, House } from 'lucide-react';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhyChooseUs from './WhyChooseUs';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    img: "/womancleaningkitchen.jpg",
    title: "Residential Cleaning",
    description:
      "Regular house cleaning for busy families. Weekly, bi-weekly, or monthly schedules available.",
    icon: House,
    list: [
      "Kitchen & bathroom deep clean",
      "Dusting & vacuuming",
      "Floor mopping",
      "Trash removal",
    ],
  },
  {
    img: "/womancleaningkitchen.jpg",
    title: "Commercial Cleaning",
    description:
      "Professional office and commercial space cleaning to maintain a productive environment.",
    icon: House,
    list: [
      "Office sanitization",
      "Common area cleaning",
      "Restroom maintenance",
      "Waste management",
    ],
  },
  {
    img: "/womancleaningkitchen.jpg",
    title: "Deep Cleaning",
    description:
      "Comprehensive one-time cleaning for move-ins, special events, or seasonal refreshes.",
    icon: House,
    list: [
      "Inside appliance cleaning",
      "Baseboards & windows",
      "Light fixture cleaning",
      "Cabinet interiors",
    ],
  },
];
function ServiceSection() {
   const cardsRef = useRef([]);

   useEffect(() => {
     cardsRef.current.forEach((card, i) => {
       gsap.fromTo(card.querySelector(".container"),
       {
        height: "50%"
       },
        {
          height: "100%",
         scrollTrigger: {
           trigger: '.section',
           start: "top 80%", // when card enters viewport
           end: "bottom 20%",
           scrub: true,
          //  toggleActions: "play none none reverse",
         },
       });

       gsap.from(card.querySelector(".text"), {
         scrollTrigger: {
           trigger: card,
           start: "top 80%",
         },
         x: window.innerWidth > 768 ? 100 : 0, // opposite direction
         y: window.innerWidth <= 768 ? 100 : 0,
         opacity: 0,
         duration: 1,
         delay: 0.3,
         ease: "power2.out",
       });
     });
   }, []);

  return (
    <section className=' px-5 md:px-20 py-10 md:py-16 lg:py-[80px] space-y-10 bg-[#fafafa]'>
      <div className='space-y-8'>
        <div className='text-center space-y-2 '>
          <h2 className='text-4xl font-raleway font-semibold text-gray-900 '>
            AddedValue Cleaning Services
          </h2>
          <p className='text-lg leading-relaxed text-gray-700'>
            From regular maintenance to deep cleaning projects,
            <br className='hidden md:block' /> we offer comprehensive solutions
            tailored to your specific needs and schedule.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-8'>
          {services.map(
            ({ img, title, description, icon: Icon, list }, index) => (
              <div
                className='container rounded-xl shadow-sm bg-white h-1/2'
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}>
                <div className=''>
                  <img
                    src={img}
                    alt='addedValue pictures'
                    className='object-cover rounded-t-xl'
                  />
                </div>
                <div className='px-8 py-6 flex flex-col gap-2'>
                  <h3 className='font-raleway text-xl font-semibold text-gray-900 m-0 p-0'>
                    {title}
                  </h3>
                  <p className='text-gray-700 text-base'>{description}</p>
                  {/* <button className='flex gap-2 items-center bg-primary text-white p-2 md:px-10 md:py-3 text-sm rounded-md text-black self-start'>
                    Learn More
                  </button> */}
                  <a className='flex gap-2 items-center text-primary py-2 text-semibold rounded-md text-black self-start underline'>
                    Learn more
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <WhyChooseUs />
    </section>
  );
}

export default ServiceSection

// a realistic image of a lady wearing a shirt has the logo of the attached subject, smiling  cleaning a house
