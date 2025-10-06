import { AnimatePresence, motion } from "motion/react";
import Logo from '/logo-av.png'
import MainButton from "./MainButton";
import MobileButton from "./MobileButton";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, MenuIcon, X } from "lucide-react";
const navlinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact us",
    path: "/contact-us",
  },
];
function Header2({scrolled}) {
    const [open, setOpen] = useState(false)


    const toggle = () => (setOpen(!open))
  return (
    <>
      <header
        className={`fixed top-0 w-full z-1000 transition-all duration-300 ${
          scrolled || open ? "bg-white" : "shadow-none"
        }`}>
        {/* Invisible spacer div that acts as the "scroll trigger" */}

        <div className='mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between h-16 md:h-20'>
          {/* logo */}
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
            className='pt-8 z-100'>
            <img src={Logo} alt='Added Value Logo' className='w-[80px]' />
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            className={`md:flex hidden space-x-8 ${
              scrolled
                ? "text-gray-700 py-2 px-10 rounded-sm"
                : "bg-transparent"
            }`}>
            {navlinks.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                key={index}
                className='relative group'>
                {/* Parent link */}
                <a
                  href={item.path}
                  className={`flex font-raleway font-semibold  items-center transition-colors duration-300 ${
                    scrolled ? "text-gray-600 " : "text-gray-600"
                  }`}>
                  {item.name}
                  {item.name === "Services" && (
                    <ChevronDown size={16} className='self-center' />
                  )}
                </a>

                {/* Dropdown menu */}
                {item.name === "Services" && (
                  <div className='absolute left-0 top-full hidden group-hover:block bg-[#faf7f7] font-semibold shadow-sm rounded-sm py-4 px-6 w-[200px] z-100'>
                    <ul className='space-y-2'>
                      <li className='hover:underline transition-colors text-gray-600  cursor-pointer'>
                        <a href='/commercial'> Commercial</a>
                      </li>
                      <li className='hover:underline transition-colors text-gray-600  cursor-pointer'>
                        <a href='/residential'> Residential</a>
                      </li>
                      <li className='hover:underline transition-colors text-gray-600 cursor-pointer'>
                        <a href='/deep'> Deep Cleaning</a>
                      </li>
                      <li className='hover:underline transition-colors text-gray-600 cursor-pointer'>
                        <a href='/'>Airbnb</a>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Underline animation */}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300'></span>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Other Buttons or Socials */}
          {/* <div className="md:flex hidden items-center space-x-4">
            
        </div> */}

          <div className='flex items-center'>
            {/* Moble Menu Button*/}
            <div className='md:hidden flex items-center'>
              <motion.button
                whileTap={{ scale: 0.7 }}
                className='text-black-700'
                onClick={toggle}>
                {open ? (
                  <X className='h-6 w-6' />
                ) : (
                  <MenuIcon className='h-6 w-6' />
                )}
              </motion.button>
            </div>

            {/* Reach Out */}
            {/* <MainButton text={"Reach out"} /> */}
            <MobileButton text={"Get Quote"} />
          </div>
        </div>

        {/* MenuDropdown */}
        {
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className='md:hidden overflow-hidden bg-white shadow-lg px-4 py-5 space-y-5'>
                <nav className='flex flex-col space-y-3'>
                  {navlinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.path}
                      className='font-semibold font-gray-800 text-header-gray py-2'
                      onClick={toggle}>
                      {item.name}
                    </a>
                  ))}
                </nav>
                <MobileButton text={"Get Quote"} />
              </motion.div>
            )}
          </AnimatePresence>
        }

        {/* Reach Out Form */}
      </header>
    </>
  );
}

export default Header2;
// 8100464983
// olukantun oluwapelu
// className={`md:flex hidden space-x-8 ${
//               scrolled
//                 ? "bg-white/20 backdrop-blur-md border-b border-white/30 py-2 px-6 rounded-sm"
//                 : "bg-transparent"
//             }`}

// a very neat modern office, very realistic, which a little shades of #ff0000