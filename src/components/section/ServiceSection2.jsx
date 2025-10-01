import { Dot, House } from "lucide-react";
import React from "react";
const services = [
  {
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
  return (
    <section className='px-20 py-10  space-y-10 bg-white'>
      <div className='text-center space-y-6'>
        <h2 className='text-4xl font-semibold text-foreground'>
          Our Cleaning Services
        </h2>
        <p className='text-gray-700'>
          From regular maintenance to deep cleaning projects,
          <br /> we offer comprehensive solutions tailored to your specific
          needs and schedule.
        </p>
      </div>
      <div className='flex gap-8'>
        {services.map(({ title, description, icon: Icon, list }, index) => (
          <div
            className='rounded-xl shadow-sm bg-white p-10 space-y-2 border-t-8 border-t-'
            key={index}>
            <div className='bg-secondary/30 p-4 rounded-full w-fit'>
              {<Icon strokeWidth={1.5} />}
            </div>
            <h3 className='text-xl font-semibold text-gray-800'>{title}</h3>
            <p className='text-gray-700'>{description}</p>
            <div className='felx flex-col text-gray-700'>
              {list.map((item, i) => (
                <p key={i} className='flex items-center'>
                  <Dot size={40} /> {item}
                </p>
              ))}
            </div>
            <button className='flex gap-2 items-center bg-secondary p-2 md:px-6 md:py-2 text-sm rounded-md text-black'>
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;

// a realistic image of a lady wearing a shirt has the logo of the attached subject, smiling  cleaning a house
