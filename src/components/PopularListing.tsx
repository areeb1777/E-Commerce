import React from "react";
import Image from 'next/image';

const PopularListingsSection: React.FC = () => {
  return (
    <div className="w-full h-auto bg-white py-10 lg:py-16 xl:py-20 2xl:py-24 px-6 lg:px-12 xl:px-20 2xl:px-24">
      <div className="text-[#2a254b] text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] font-normal font-['Arial'] mb-10 lg:mb-16 xl:mb-20 2xl:mb-24">
        Our popular products
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
        <div className="flex flex-col items-center gap-4 w-full lg:w-[500px] xl:w-[570px] 2xl:w-[640px]">
          <div className="w-[280px] h-[200px] lg:w-[500px] lg:h-[375px] xl:w-[570px] xl:h-[375px] 2xl:w-[640px] 2xl:h-[375px] flex justify-center">
            <Image src="/images/poplar-sofa.png" alt="The Poplar suede sofa" width={630} height={375} className="object-fit" priority />
          </div>
          <div className="text-[#2a254b] text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal leading-7 text-center lg:text-left">
            The Poplar suede sofa
          </div>
          <div className="text-[#2a254b] text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal leading-[27px] text-center lg:text-left">
            £980
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-full lg:w-[250px] xl:w-[280px] 2xl:w-[310px]">
          <div className="w-[200px] h-[375px] lg:w-[250px] lg:h-[375px] xl:w-[280px] xl:h-[375px] 2xl:w-[310px] 2xl:h-[375px] flex justify-center">
            <Image src="/images/chair-right.png" alt="The Dandy chair" width={305} height={375} className="object-cover" />
          </div>
          <div className="text-[#2a254b] text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal leading-7 text-center lg:text-left">
            The Dandy chair
          </div>
          <div className="text-[#2a254b] text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal leading-[27px] text-center lg:text-left">
            £250
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 w-full lg:w-[250px] xl:w-[280px] 2xl:w-[310px]">
          <div className="w-[200px] h-[375px] lg:w-[250px] lg:h-[375px] xl:w-[280px] xl:h-[375px] 2xl:w-[310px] 2xl:h-[375px] flex justify-center">
            <Image src="/images/dandy-chair2.png" alt="The Dandy chair" width={305} height={375} className="object-cover" />
          </div>
          <div className="text-[#2a254b] text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal leading-7 text-center lg:text-left">
            The Dandy chair
          </div>
          <div className="text-[#2a254b] text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal leading-[27px] text-center lg:text-left">
            £250
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 lg:mt-16 xl:mt-20 2xl:mt-24">
        <div className="px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 bg-[#f9f9f9] border text-[#2a254b] text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal leading-normal cursor-pointer">
          View collection
        </div>
      </div>
    </div>
  );
};

export default PopularListingsSection;
