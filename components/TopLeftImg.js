import React from 'react';
import Image from 'next/image';

const MyComponent = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-100 w-[200px] xl:w-[400px] opacity-50">
      <div className="relative">
        <Image src="/left.png" width={400} height={400} alt="Description of the image" />
      </div>
    </div>
  );
};

export default MyComponent;
