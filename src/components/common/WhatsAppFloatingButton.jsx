// WhatsAppFloatingButton.jsx
import React from "react";

/**
 * Props:
 *  - phone: string (international format, no plus sign, e.g. "2348012345678")
 *  - message: string (prefilled message)
 *  - className: extra classes for the wrapper
 */
export default function WhatsAppFloatingButton({
  phone = "+447979145687",
  message = "Hello! I want to book a cleaning service.",
  className = "",
}) {
  // encode message for URL
  const encoded = encodeURIComponent(message);
  // web link (works on desktop & mobile browsers)
  const webLink = `https://wa.me/${phone}?text=${encoded}`;
  // deep link (works better in some mobile apps)
  const appLink = `whatsapp://send?phone=${phone}&text=${encoded}`;

  // We'll try appLink first, but keep webLink as a fallback for browsers that ignore whatsapp://
  // Opening appLink can fail silently on desktop — using webLink in target is more reliable.
  const href = webLink;

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Chat with us on WhatsApp'
      className={`fixed right-5 bottom-5 z-50 inline-flex items-center gap-3 rounded-full px-4 py-3 shadow-lg transition-transform hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400 ${className}`}
      // styling below uses Tailwind classes; you can override via className prop
      style={{ backgroundColor: "#25D366", color: "white" }}>
      {/* WhatsApp SVG icon */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='white'
        className='h-6 w-6 flex-shrink-0'>
        <path d='M20.52 3.48A11.9 11.9 0 0012.02.1 11.92 11.92 0 003.4 8.73c0 2.09.55 4.14 1.6 5.95L2 22l7.57-2.03a11.92 11.92 0 004.44.86h.01c6.59 0 11.99-5.33 11.99-11.92a11.83 11.83 0 00-3.99-8.33zM12 20.09a9.6 9.6 0 01-3.9-.81l-.28-.14-4.5 1.2 1.23-4.13-.18-.29A9.54 9.54 0 012.47 9.15 9.5 9.5 0 0112 3.1c5.24 0 9.5 4.25 9.5 9.5S17.24 22.09 12 22.09z' />
        <path d='M17.06 14.11c-.27-.13-1.6-.79-1.85-.88-.25-.1-.43-.13-.61.12-.18.25-.71.88-.87 1.06-.16.18-.31.2-.58.07a6.04 6.04 0 01-1.79-1.1 6.92 6.92 0 01-1.29-1.6c-.14-.24 0-.37.11-.5.12-.12.27-.31.4-.46.13-.15.17-.25.26-.43.09-.18 0-.34-.06-.47-.07-.13-.61-1.47-.84-2.03-.22-.53-.45-.46-.62-.47l-.53-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.28 0 1.35.97 2.66 1.11 2.84.14.18 1.92 2.98 4.65 4.18 2.72 1.2 2.72.8 3.21.76.49-.04 1.6-.65 1.83-1.28.22-.63.22-1.17.15-1.28-.07-.12-.25-.18-.52-.31z' />
      </svg>

      <span className='hidden truncate font-semibold sm:inline'>WhatsApp</span>
      <span className='ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium'>
        Chat
      </span>
    </a>
  );
}
