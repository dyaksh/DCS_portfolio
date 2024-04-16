// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";


// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

//components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';



const Work = () => {
  return (
  <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col  xl:flex-row gap-x-8'>
        {/* text */}  
        <div className='text-center flex  xl:W-[30vw] flex-col lg:text-left mb-4
        xl:mb-0'>
          <motion.h2 
          exit='hidden'
          variants={fadeIn('up',0.3)}
          animate='show'
          initial='hidden'
          className='h2 xl:mt-12'>
            My Work <span className='text-accent'> .</span>
          </motion.h2>
          <motion.p 
          exit='hidden'
          variants={fadeIn('up',0.4)}
          animate='show'
          initial='hidden'
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut    
          </motion.p>
        </div>
        <motion.div 
        exit='hidden'
        variants={fadeIn('down',0.6)}
        animate='show'
        initial='hidden'
        className="w-full xl:max-w-[65%]">
        <WorkSlider />
        </motion.div>
      </div>
    </div>
  <Bulb />
  </div>
  );
};

export default Work;
