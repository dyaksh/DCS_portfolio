// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image'; // Assuming you're using Next.js
import { Navigation,Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialSlider = () => {
  return (
    <Swiper
    navigation={true}
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Navigation,Pagination]}
      className='h-[400px] '
      
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
          {/* Left side - Avatar, Name, and Position */}
          <div className='w-full max-w-[300px] flex flex-col items-center md:items-center relative'>
            
            {/* Avatar */}
            <div className='mb-2 mx-auto'>
              <Image src={person.image} width={100} height={100} alt='' />
            </div>
            {/* Name and Position */}
            <div className="mt-4 text-center">
              <div className='text-lg'>{person.name}</div>
              <div className='text-sm uppercase font-extralight tracking-widest'>{person.position}</div>
            </div>
          </div>
          {/* Right side - Quote and Message */}
          <div className='flex-1 flex flex-col justify-center text-center md:text-left'>
          {/* Quote */}
          <div className='mb-2 md:ml-2 mx-auto md:mx-0'>
            <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20' />
          </div>
          {/* Message */}
          <div className='text-sm md:text-base'>
            {person.message}
          </div>
        </div>

        </div>


        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;

