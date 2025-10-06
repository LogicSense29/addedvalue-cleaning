import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { motion } from "motion/react";
import Logo from "/logo-av.png";

function Footer() {
  return (
    <footer
      id='contact'
      className='bg-[#fafafa] text-gray-700 mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
      {/* Top Section */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 lg:gap-12 py-16 border-b border-gray-300'>
        {/* Brand */}
        <div>
          <div className='flex gap-2 items-center mb-4'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: 0.3,
                duration: 1.2,
              }}
              className='z-100'>
              <img src={Logo} alt='Added Value Logo' className='w-[30px]' />
            </motion.div>
            <h3 className='md::text-2xl font-raleway font-bold text-accent mb-2 text-gray-900'>
              AddedValue
            </h3>
          </div>
          <p className='text-gray-700 mb-6 max-w-sm font-semibold'>
            Leaving spaces spotless with trusted and professional cleaning.
          </p>
          {/* Social links */}
          <div className='flex items-center gap-4'>
            <a
              href='https://facebook.com/'
              target='_blank'
              className='w-10 h-10 bg-primary/10 hover:bg-primary/40 flex items-center justify-center rounded-full transition'>
              <Facebook className='w-5 h-5 text-primary' />
            </a>
            <a
              href='https://www.instagram.com/addedvaluehub'
              target='_blank'
              className='w-10 h-10 bg-primary/10 hover:bg-primary/40 flex items-center justify-center rounded-full transition'>
              <Instagram className='w-5 h-5 text-primary' />
            </a>
            <a
              href='https://www.tiktok.com/added.value.hub.c'
              target='_blank'
              className='w-10 h-10 bg-primary/10 hover:bg-primary/40 flex items-center justify-center rounded-full transition'>
              {/* <Twitter className='w-5 h-5 text-primary' /> */}
              <i class='fa-brands fa-tiktok text-primary'></i>
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="">
          <h4 className='text-lg font-raleway font-semibold mb-4 text-gray-900'>
            Services
          </h4>
          <ul className='space-y-2 text-gray-700 font-semibold text-sm'>
            <li className='hover:underline transition'>Commercial Cleaning</li>
            <li className='hover:underline transition'>Retail Cleaning</li>
            <li className='hover:underline transition'>Deep Cleaning</li>
            <li className='hover:underline transition'>Carpet Cleaning</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className='text-lg font-raleway font-semibold mb-4 text-gray-900'>
            Contact
          </h4>
          <ul className='space-y-2 text-gray-700 font-semibold text-sm'>
            <li className='flex items-center gap-2'>
              <Phone size={16} /> +447979145687
            </li>
            <li className='flex items-center gap-2'>
              <Mail size={16} /> addedvaluehub@gmail.com
            </li>
            <li className='flex items-center gap-2'>
              <MapPin size={16} /> United Kingdom
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className='text-lg font-raleway font-semibold mb-4 text-gray-900'>
            Stay Updated
          </h4>
          <p className='text-gray-700 font-semibold mb-4 text-sm'>
            Subscribe to our newsletter for cleaning tips and special offers.
          </p>
          <div className='flex'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full px-4 py-2 rounded-l-full bg-[#fafafa] text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
            />
            <button className='px-5 py-2 rounded-r-full bg-primary text-white font-semibold hover:bg-primary/80 transition'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row font-semibold justify-between items-center gap-6 py-6 text-sm text-gray-700'>
        <p>© 2025 AddedValue. All rights reserved.</p>
        <div className='flex gap-6'>
          <a href='#' className='hover:text-primary transition'>
            About
          </a>
          <a href='#' className='hover:text-primary transition'>
            Services
          </a>
          <a href='#' className='hover:text-primary transition'>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
