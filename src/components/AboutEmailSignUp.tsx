'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AboutEmailSignUp: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-full h-auto bg-[#f9f9f9] py-10 px-4 md:py-20 md:px-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-email-sign-up.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-end h-full mt-20">
        <div className="flex flex-col md:flex-row items-center w-full max-w-md md:max-w-lg mt-44">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-14 pl-8 pr-4 py-[17px] bg-white/20 text-white text-base font-normal font-['Satoshi'] flex-grow mb-4 md:mb-0 md:mr-2"
          />
          <button className="px-8 py-4 bg-[#2a254b] text-white text-base font-normal font-['Satoshi'] leading-normal">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutEmailSignUp;
