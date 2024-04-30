

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];
import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from "react-icons/si";
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  // Function to generate unique identifiers
  const generateUniqueId = (itemIndex, item) => `${itemIndex}-${item.title}`;

  // Function to generate unique identifiers
  const generateUniqueId = (itemIndex, item) => `${itemIndex}-${item.title}`;

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      {/* Avatar */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            className="max-w-[500px] mx-auto x:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 h2"
            exit='hidden'
            initial='hidden'
            animate='show'
            variants={fadeIn('right', 0.2)}
          <motion.h2
            className="max-w-[500px] mx-auto x:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 h2"
            exit='hidden'
            initial='hidden'
            animate='show'
            variants={fadeIn('right', 0.2)}
          >
            Captivating
            <span className="text-accent"> stories </span> birth magnificent designs.
            Captivating
            <span className="text-accent"> stories </span> birth magnificent designs.
          </motion.h2>

          <motion.p
            exit='hidden'
            initial='hidden'
            animate='show'
            variants={fadeIn('right', 0.4)}
            className="max-w-[500px] mx-auto x:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I began freelancing as a developer. Since then I've done remote work for agencies, consulted for startups, and collaborated on digital products for business and consumer use.
            exit='hidden'
            initial='hidden'
            animate='show'
            variants={fadeIn('right', 0.4)}
            className="max-w-[500px] mx-auto x:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I began freelancing as a developer. Since then I've done remote work for agencies, consulted for startups, and collaborated on digital products for business and consumer use.
          </motion.p>
          {/*counter*/}
          <br></br>
          <motion.div
            exit='hidden'
            initial='hidden'
            animate='show'
            variants={fadeIn('right', 0.6)}
            className="hidden md:flex md:max-w-xl x:max-w-none mx-auto  xl:max-0 mb-8"
          >
          <motion.div
            exit='hidden'
            initial='hidden'
            animate='show'
            variants={fadeIn('right', 0.6)}
            className="hidden md:flex md:max-w-xl x:max-w-none mx-auto  xl:max-0 mb-8"
          >
            <div className="flex flex-2 xl:gap-x-8 ">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
                after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase  tracking-[1px]  leading-[1.4] max-w-[100px]">Years of Experience</div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase  tracking-[1px]  leading-[1.4] max-w-[100px]">Years of Experience</div>
              </div>
              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
                after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={250} duration={5} />+
                </div>
                <div className="text-xs uppercase  tracking-[1px]  leading-[1.4] max-w-[100px]">
                  Satisfied Client
                </div>
              </div>
              {/* project */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={250} duration={5} />+
                </div>
                <div className="text-xs uppercase  tracking-[1px]  leading-[1.4] max-w-[100px]">
                  Satisfied Client
                </div>
              </div>
              {/* project */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
                after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={650} duration={5} />+
                </div>
                <div className="text-xs uppercase  tracking-[1px]  leading-[1.4] max-w-[100px]">Finished Projects</div>
              </div>
              {/* Awards */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={650} duration={5} />+
                </div>
                <div className="text-xs uppercase  tracking-[1px]  leading-[1.4] max-w-[100px]">Finished Projects</div>
              </div>
              {/* Awards */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
                after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={8} duration={5} />+
                </div>
                <div className="text-xs uppercase  tracking-[1px]  leading-[1.4] max-w-[100px]">Winning Awards</div>
              </div>
            </div>
          </motion.div>
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                  <CountUp start={0} end={8} duration={5} />+
                </div>
                <div className="text-xs uppercase  tracking-[1px]  leading-[1.4] max-w-[100px]">Winning Awards</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={generateUniqueId(itemIndex, item)}
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
                key={generateUniqueId(itemIndex, item)}
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6  flex flex-col gap-y-2 xl:gap-y-4  items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => (

          <div className="py-2 xl:py-6  flex flex-col gap-y-2 xl:gap-y-4  items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={`${index}-${item.title}`} // Unique key using index and title
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => (
                    <div key={itemIndex} className="text-2xl text-white">{icon}</div>
                  ))}
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => (
                    <div key={itemIndex} className="text-2xl text-white">{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;
