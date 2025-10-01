import { Award } from 'lucide-react';
import React from 'react'

function ExtraSection() {
  return (
    <section className='text-center space-y-6 p-20 border-t border-t-gray-300'>
      <h2 className='text-3xl font-semibold text-gray-900'>
        Certified & Trusted
      </h2>
      <p className='text-base text-gray-700'>
        We maintain the highest standards in the industry
      </p>
      <div className='flex items-center justify-center gap-6'>
        <div className='flex items-center justify-center gap-2 font-semibold text-gray-900'>
          <Award className='text-gray-700' />
          <p>Better Business Bureau A+</p>
        </div>
        <div className='flex items-center justify-center gap-2 font-semibold text-gray-900'>
          <Award className='text-gray-700' />
          <p>Fully Insured & Bonded</p>
        </div>
        <div className='flex items-center justify-center gap-2 font-semibold text-gray-900'>
          <Award className='text-gray-700' />
          <p>Green Cleaning Certified</p>
        </div>
      </div>
    </section>
  );
}

export default ExtraSection