import { Book, ThumbsUp, User, Users, Dot, Check, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";


const card = [
  {
    icon: Users,
    count: "1000",
    description: "Happy Customers",
  },
  {
    icon: Book,
    count: "8",
    description: "Years Experience",
  },
  //   {
  //     icon: User,
  //     count: "95%",
  //     description: "5-Star Reviews",
  //   },
  {
    icon: ThumbsUp,
    count: "99",
    description: "Satisfaction Rate",
  },
];

function TrustedCleaning2() {

  const ref = useRef(null);

  // Single scroll observer for the section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={ref}
      className='py-10 md:py-16 lg:py-[80px] px-5 md:px-20  bg-[#fafafa] text-black-900 space-y-10'>
      <div className=' space-y-2 flex flex-col md:flex-row justify-between text-center md:text-left md:items-end gap-10'>
        <h2 className='text-4xl font-raleway font-semibold  md:w-1/3'>
          AddedValue
          <br />
          trusted Since 2019
        </h2>
        <p className='text-lg leading-relaxed md:w-2/3 text-center md:text-left text-black-700'>
          AddedValue began with a simple mission: give families back their time
          with spotless homes. From a small start, we’ve grown into the area’s
          most trusted cleaning service.
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-10 items-center'>
        <div className='md:w-1/3 space-y-4'>
          <h2 className='font-raleway text-2xl font-semibold'>
            We are the best at This.
          </h2>
          <p className='text-lg mt-2 text-black-700'>
            AddedValue began with a simple mission: give families back their
            time with spotless homes. From a small start, we’ve grown into the
            area’s most trusted cleaning service.
          </p>
          <button className='flex gap-2 items-center text-primary py-2 px-4 md:px-10 md:py-4 rounded-sm  font-semibold bg-primary text-white self-start'>
            Learn more
            <ArrowRight size={16} />
          </button>
        </div>
        <div className='w-full md:w-2/3'>
          {card.map((item, index) => {
            // Map scroll progress → count range for each stat
            const count = useTransform(
              scrollYProgress,
              [0, 1],
              [0, item.count]
            );
            const rounded = useSpring(count, { stiffness: 100, damping: 20 });
            return (
              <div
                key={index}
                className={`border-b  ${
                  index != 2 ? "border-b-gray-300" : "border-b-transparent"
                } flex flex-row justify-between items-end ${
                  index != 0 ? "pt-6" : "pt-0"
                } pb-6`}>
                <Counter
                  target={item.count}
                  progress={scrollYProgress}
                  index={index}
                />
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustedCleaning2;


function Counter({ target, progress, index }) {
  const raw = useTransform(progress, [0, 0.5], [0, target]);
  const smooth = useSpring(raw, { stiffness: 100, damping: 20 });

  const [val, setVal] = useState(0);

  useEffect(() => {
    return smooth.on("change", (v) => setVal(Math.floor(v)));
  }, [smooth]);

  return (
    <motion.p className='text-5xl font-raleway font-semibold text-primary'>
      {`${val}${index == 2 ? '%' : '+'}`}
    </motion.p>
  );
}
