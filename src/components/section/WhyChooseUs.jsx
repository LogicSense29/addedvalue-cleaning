import { Clock, Shield, Users } from 'lucide-react';
import React from 'react'
const benefits = [
  {
    title: "Flexible Scheduling",
    description:
      "Book cleanings that fit your schedule, including evenings and weekends.",
    icon: Clock,
  },

  {
    title: "Fully Insured",
    description:
      "Complete protection with liability insurance and bonded cleaning professionals.",
    icon: Shield,
  },

  {
    title: "Trained Professionals",
    description:
      "Background-checked cleaners with ongoing training in the latest techniques.",
    icon: Users,
  },
];
function WhyChooseUs() {
  return (
    <section className='space-y-8'>
      <div className='text-center space-y-2'>
        <h2 className='text-3xl font-raleway font-semibold text-gray-900 '>
          Why Choose AddedValue ?
        </h2>
        <p className='text-lg leading-relaxed text-gray-700'>
          From regular maintenance to deep cleaning projects,
          <br className='hidden md:block' /> we offer comprehensive solutions
          tailored to your specific needs and schedule.
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-8'>
        {benefits.map(({ icon: Icon, title, description }, index) => (
          <div className=' space-y-2 flex flex-col justify-center items-center bg-white shadow-sm p-10 rounded-xl'>
            <div className='bg-primary/5 p-4 rounded-full w-fit text-primary'>
              {<Icon strokeWidth={1.5} />}
            </div>
            <h3 className='text-xl font-raleway font-semibold text-gray-800'>
              {title}
            </h3>
            <p className='text-center text-gray-700 text-base'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs
