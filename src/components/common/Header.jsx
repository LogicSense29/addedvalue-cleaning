import { AnimatePresence, motion } from "motion/react";
import Logo from '/logo-av.png'
import MainButton from "./MainButton";
import MobileButton from "./MobileButton";
import { useState, useEffect, useRef } from "react";
import { MenuIcon, X } from "lucide-react";
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
function Header({scrolled}) {
    const [open, setOpen] = useState(false)


    const toggle = () => (setOpen(!open))
  return (
    <>
      <header className={`fixed top-0 w-full z-1000 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'shadow-none'}`}>
        {/* Invisible spacer div that acts as the "scroll trigger" */}

        <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between h-16 md:h-20'>
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
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                key={index}
                href={item.path}
                className={`relative font-medium hover:text-primary transition-color duration-300 group ${
                  scrolled ? "text-gray-700 font-medium" : "text-[#FAFAFA]"
                }`}>
                {item.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300'></span>
              </motion.a>
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
                className='text-header-gray'
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
                      className='font-medium text-header-gray py-2'
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

export default Header;
// 8100464983
// olukantun oluwapelu
// className={`md:flex hidden space-x-8 ${
//               scrolled
//                 ? "bg-white/20 backdrop-blur-md border-b border-white/30 py-2 px-6 rounded-sm"
//                 : "bg-transparent"
//             }`}
