import React from 'react'
import ContactForm from '../../components/common/ContactForm';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

function ContactUs() {
  return (
    <div>
      {/* <section className='relative min-h-screen flex flex-col md:flex-row justify-center items-center pt-10 px-5 md:px-20 bg-[#fafafa] gap-6'>
        <div>
          <h1 className='text-4xl md:text-6xl font-raleway font-semibold'>
            Contact Us
          </h1>
          <p className='md:text-lg font-normal text-gray-700 md:w-[80%]'>
            Professional cleaning for offices, retail, and business spaces —
            inside and out — creating a spotless, welcoming environment that
            boosts productivity.
          </p>
        </div>
        <div>
          <img src='/office-cleanup.jpg' className='rounded-sm' />
        </div>
      </section> */}

      <section className='container pt-6 sm:pt-10 md:pt-20 px-5 md:px-0 relative min-h-[50vh] flex flex-col justify-center items-center bg-[url("/office-cleanup.jpg")] bg-no-repeat bg-cover bg-center'>
        {/* Overlay */}
        <div className='absolute inset-0 bg-white/80 backdrop-blur-[2px]'></div>

        <div className='flex flex-col items-center relative z-10 text-center max-w-3xl space-y-4 py-10'>
          {/* <span className='text-gray-600 tracking-wider bg-red-100  px-3 py-1 text-sm font-bold text-red-700 rounded-full'>
            About AddedValue
          </span> */}
          <h1 className='heading-text leading-none text-[37px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-raleway font-semibold text-gray-900'>
            Contact <span className='text-primary'>AddedValue Cleaning</span>
          </h1>
          <p className='font-normal text-center text-gray-700 max-w-md tracking-wider'>
            We create clean, healthy, and stress-free spaces with eco-friendly
            boosts productivity. care and unmatched excellence.
          </p>
        </div>
      </section>

      {/* Main contact section */}
      <div id='contact' className='py-20'>
        <div className='container mx-auto px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            {/* Contact info */}
            <div className='animate-fade-in'>
              <h2 className='text-3xl md:text-4xl font-ralewaye font-semibold'>
                Ready for a <span className='text-accent'>Spotless Space</span>?
              </h2>
              <p className='text-lg text-primary-foreground/90 mb-8 leading-relaxed text-gray-700'>
                Get your free quote today and experience the AddedValue
                difference. No commitment required.
              </p>

              {/* Contact methods */}
              <div className='space-y-6 mb-8'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center'>
                    <Phone className='w-6 h-6 text-accent' />
                  </div>
                  <div>
                    <p className='font-semibold'>Call or Text</p>
                    <p className='text-primary-foreground/80 text-gray-700'>
                      +447979145687
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center'>
                    <Mail className='w-6 h-6 text-accent' />
                  </div>
                  <div>
                    <p className='font-semibold'>Email Us</p>
                    <p className='text-primary-foreground/80 text-gray-700'>
                      addedvaluehub@gmail.com
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center'>
                    <MapPin className='w-6 h-6 text-accent' />
                  </div>
                  <div>
                    <p className='font-semibold'>Service Area</p>
                    <p className='text-primary-foreground/80 text-gray-700'>
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center'>
                    <Clock className='w-6 h-6 text-accent' />
                  </div>
                  <div>
                    <p className='font-semibold'>Hours</p>
                    <p className='text-primary-foreground/80 text-gray-700'>
                      Mon-Sat: 7AM-7PM, Sun: 9AM-5PM
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex gap-4'>
                <button
                  variant='accent'
                  size='lg'
                  className='flex-1 sm:flex-none underline text-primary'>
                  WhatsApp
                </button>
                <button
                  variant='outline'
                  size='lg'
                  className='flex-1 sm:flex-none border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary underline text-primary'>
                  Send an Email
                </button>
              </div>
            </div>

            {/* Quick quote form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;