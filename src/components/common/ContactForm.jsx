import React from 'react'

function ContactForm() {

  const formData = new FormData()

  const onSubmit = async () => {
      try{
        const response = fetch('', {
          method: 'POST',
          headers : {
            
          },
          body: JSON.stringify(formData)
        })
      } catch(error) {

      }
  }
  return (
    <div
      className='shadow-sm backdrop-blur-sm border border-gray-100 animate-scale-in rounded-xl'
      style={{ animationDelay: "0.3s" }}>
      <div className='p-8'>
        <h3 className='text-2xl font-bold text-primary-foreground mb-6'>
          Get Your Free Quote
        </h3>
        <form className='space-y-8 flex flex-col' method='POST'>
          <input
            placeholder='Your Name'
            className='bg-white/10 outline-2 outline-gray-300 text-primary-foreground placeholder:text-primary-foreground/60 p-2 rounded-sm'
          />
          <input
            placeholder='Email Address'
            type='email'
            className='bg-white/10 outline-2 outline-gray-300 text-primary-foreground placeholder:text-primary-foreground/60 p-2 rounded-sm'
          />
          <input
            placeholder='Phone Number'
            type='tel'
            className='bg-white/10 outline-2 outline-gray-300 text-primary-foreground placeholder:text-primary-foreground/60 p-2 rounded-sm'
          />
          {/* <input
            placeholder='Property Size (sq ft)'
            className='bg-white/10 outline-2 outline-gray-300 text-primary-foreground placeholder:text-primary-foreground/60 p-2 rounded-sm'
          /> */}
          <button className='w-full bg-primary p-2 rounded-sm text-white font-lato'>
            Get Free Quote
          </button>
        </form>
        <p className='text-sm text-primary-foreground/70 mt-4 text-center text-gray-700'>
          No spam, ever. We respect your privacy.
        </p>
      </div>
    </div>
  );
}

export default ContactForm