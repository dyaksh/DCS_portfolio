import { motion } from 'framer-motion';

// Define animation variants for each layer
const variants = {
  initial: { x: '100%', width: '100%' },
  animate: { x: '0%', width: '0%' },
  exit: { x: ['0%', '100%'], width: ['0%', '100%'] }
};

// Define transition properties for each layer with easeInOut
const transition = { delay: 0.2, duration: 0.6, ease: 'easeInOut' };

const Transition = () => {
  return (
    <>
      {/* Layer 1 */}
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]'
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={transition}
      ></motion.div>

      {/* Layer 2 */}
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]'
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ ...transition, delay: 0.4 }} // Adjust the delay for layer 2
      ></motion.div>

      {/* Layer 3 */}
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]'
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ ...transition, delay: 0.6 }} // Adjust the delay for layer 3
      ></motion.div>
    </>
  );
};

export default Transition;
