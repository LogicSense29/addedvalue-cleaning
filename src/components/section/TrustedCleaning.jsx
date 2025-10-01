import { Book, ThumbsUp, User, Users , Dot, Check} from 'lucide-react';
import React from 'react'
const list = ['Eco-friendly cleaning products safe for families and pets',

'Customizable cleaning plans to fit your lifestyle',

'24/7 customer support and satisfaction guarantee',

'Competitive pricing with no hidden fees'];
const card = [
  {
    icon: Users,
    count: "2,000+",
    description: "Happy Customers",
  },
  {
    icon: Book,
    count: "8+",
    description: "Years Experience",
  },
  {
    icon: User,
    count: "95%",
    description: "5-Star Reviews",
  },
  {
    icon: ThumbsUp,
    count: "99%",
    description: "Satisfaction Rate",
  },
];
function TrustedCleaning() {
  return (
    <section className='flex flex-col md:flex-row p-10 md:p-20 gap-10'>
      {/* Trusted Cleaning Professionals Since 2016 */}
      <div className='w-full md:w-1/2 space-y-6'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-raleway font-semibold text-gray-900'>
            Trusted Cleaning Professionals Since 2016
          </h2>
          <p className='text-gray-700'>
            AddedValue started with a simple mission: to give families their
            time back while ensuring their homes are spotlessly clean. What
            began as a small local business has grown into the most trusted
            cleaning service in the area.
          </p>
          <p className='text-gray-700'>
            Our team of trained, insured, and background-checked professionals
            uses only eco-friendly products and proven techniques to deliver
            exceptional results every time.
          </p>
        </div>
        <div className='space-y-2'>
          {list.map((item, i) => (
            <p key={i} className='flex items-center gap-2 text-gray-700'>
              <Check className='text-primary/80' /> {item}
            </p>
          ))}
        </div>
        <button className='flex gap-2 items-center bg-primary p-2 md:px-6 md:py-2 text-sm rounded-md text-[#FAFAFA]'>
          Get Free Quote
        </button>
      </div>
      {/* Certified & Trusted */}
      <div className='w-full md:w-1/2 grid grid-cols-2 gap-10'>
        {card.map(({ icon: Icon, count, description }, index) => (
          <div
            className='border border-gray-300 flex flex-col justify-center items-center rounded-xl bg-main-bg'
            key={index}>
            <div>
              <Icon />
            </div>
            <h3 className='text-3xl font-semibold'>{count}</h3>
            <p className='text-gray-700'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedCleaning
