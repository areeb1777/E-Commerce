'use client';

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const EmailSignUp: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className="w-full h-auto bg-[#f9f9f9] py-10 lg:py-16 xl:py-20 2xl:py-24 px-6 lg:px-12 xl:px-20 2xl:px-24">
      <div className="w-full max-w-[1440px] mx-auto bg-white p-8 lg:px-[351px] lg:pt-[68px] lg:pb-[54px] flex flex-col justify-end items-center gap-12 lg:gap-[72px]">
        <div className="flex flex-col justify-start items-center gap-4 w-full lg:w-auto">
          <div className="text-center text-[#2a254b] text-xl lg:text-4xl font-normal font-['Clash Display'] lg:font-['Arial'] leading-7 lg:leading-[50.40px]">
            Join the club and get the benefits
          </div>
          <div className="text-center text-[#2a254b] text-sm lg:text-base font-normal font-['Satoshi'] lg:font-['Arial'] leading-[21px] lg:leading-normal w-full lg:w-[470px]">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </div>
        </div>
        <div className="w-full max-w-[472px] flex flex-col lg:flex-row justify-start items-center">
          <div className="flex-grow flex-shrink w-full lg:w-auto h-14 px-8 py-[17px] bg-[#f9f9f9] border flex justify-start items-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent text-[#2a254b] text-base font-normal font-['Satoshi'] lg:font-['Arial'] opacity-70 w-full outline-none"
            />
          </div>
          <div className="w-full lg:w-auto mt-4 lg:mt-0 lg:ml-4 px-8 py-4 bg-[#2a254b] border flex justify-center items-center cursor-pointer">
            <div className="text-white text-base font-normal font-['Satoshi'] lg:font-['Arial'] leading-normal">
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(EmailSignUp), { ssr: false });
