import React from "react";
import {
  Home,
  Building2,
  Sparkles,
  Leaf,
  CheckCircle,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function CleaningServiceHome() {
  return (
    <div className='font-sans text-gray-800'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-green-100 via-blue-100 to-white py-20 px-6 text-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-blue-800'>
          Spotless Spaces, Happy Faces
        </h1>
        <p className='mt-4 text-lg text-gray-600 max-w-2xl mx-auto'>
          Welcome to FreshClean — your trusted partner for sparkling clean
          homes, offices, and everything in between.
        </p>
        <button className='mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition'>
          Get a Free Quote
        </button>
      </section>

      {/* Services Section */}
      <section className='py-16 px-6 bg-white'>
        <h2 className='text-3xl font-bold text-center text-blue-800'>
          Our Services
        </h2>
        <div className='mt-10 grid gap-8 md:grid-cols-4'>
          {[
            { icon: Home, title: "Residential Cleaning" },
            { icon: Building2, title: "Commercial Cleaning" },
            { icon: Sparkles, title: "Specialized Cleaning" },
            { icon: Leaf, title: "Eco-Friendly Cleaning" },
          ].map((service, index) => (
            <div
              key={index}
              className='bg-blue-50 rounded-xl p-6 text-center shadow hover:shadow-lg transition'>
              <service.icon className='mx-auto mb-4 text-green-600' size={40} />
              <h3 className='font-semibold text-lg'>{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className='py-16 px-6 bg-green-50'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl font-bold text-blue-800'>About Us</h2>
          <p className='mt-4 text-gray-700'>
            With over 10 years of experience, FreshClean is committed to
            delivering top-quality cleaning services using eco-friendly
            products. Your satisfaction is our priority.
          </p>
          <div className='mt-8 flex justify-center gap-6 flex-wrap'>
            {[
              "Trusted Professionals",
              "Eco-Friendly Products",
              "100% Satisfaction",
            ].map((badge, index) => (
              <div
                key={index}
                className='flex items-center gap-2 bg-white rounded-lg shadow px-4 py-2'>
                <CheckCircle className='text-green-600' size={20} />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-blue-900 text-white py-10 px-6'>
        <div className='max-w-6xl mx-auto grid gap-8 md:grid-cols-3'>
          {/* Contact Info */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Contact Us</h3>
            <p className='flex items-center gap-2'>
              <Phone size={18} /> +234 800 123 4567
            </p>
            <p className='flex items-center gap-2 mt-2'>
              <Mail size={18} /> info@freshclean.com
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
            <div className='flex gap-4'>
              <a href='#' className='hover:text-green-400'>
                <Facebook />
              </a>
              <a href='#' className='hover:text-green-400'>
                <Instagram />
              </a>
              <a href='#' className='hover:text-green-400'>
                <Twitter />
              </a>
            </div>
          </div>

          {/* Inquiry Form */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Send Us a Message</h3>
            <form className='flex flex-col gap-3'>
              <input
                type='text'
                placeholder='Your Name'
                className='p-2 rounded text-gray-900'
              />
              <input
                type='email'
                placeholder='Your Email'
                className='p-2 rounded text-gray-900'
              />
              <textarea
                placeholder='Your Message'
                className='p-2 rounded text-gray-900'
                rows='3'></textarea>
              <button className='bg-green-600 hover:bg-green-700 transition p-2 rounded font-semibold'>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className='text-center mt-8 text-gray-300 text-sm'>
          © {new Date().getFullYear()} FreshClean. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
