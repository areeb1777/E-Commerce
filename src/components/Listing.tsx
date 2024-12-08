import React from "react";
import Image from 'next/image';

const ListingsSection: React.FC = () => {
  return (
    <div className="w-full h-auto relative bg-white py-10 md:py-20 px-6 md:px-20">
      <div className="text-[#2a254b] text-[32px] font-normal font-['Arial'] mb-10 md:mb-20">
        New ceramics
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-8 md:flex-nowrap">
        <div className="flex flex-col items-start gap-4 w-[163px] md:w-[305px]">
          <div className="w-full h-auto flex justify-center">
            <Image className="w-[163px] h-[201px] md:w-[305px] md:h-[375px]" src="/images/rustic-vase.png" alt="Rustic Vase Set" width={305} height={375} />
          </div>
          <div className="text-[#2a254b] text-xl font-normal font-['Arial'] leading-7">
            Rustic Vase Set
          </div>
          <div className="text-[#2a254b] text-lg font-normal font-['Arial'] leading-[27px]">
            £155
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 w-[163px] md:w-[305px]">
          <div className="w-full h-auto flex justify-center">
            <Image className="w-[163px] h-[201px] md:w-[305px] md:h-[375px]" src="/images/lucky-lamp.png" alt="The Lucy Lamp" width={305} height={375} />
          </div>
          <div className="text-[#2a254b] text-xl font-normal font-['Arial'] leading-7">
            The Lucy Lamp
          </div>
          <div className="text-[#2a254b] text-lg font-normal font-['Arial'] leading-[27px]">
            £399
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 w-[163px] md:w-[305px]">
          <div className="w-full h-auto flex justify-center">
            <Image className="w-[163px] h-[201px] md:w-[305px] md:h-[375px]" src="/images/silky-vase.png" alt="The Silky Vase" width={305} height={375} />
          </div>
          <div className="text-[#2a254b] text-xl font-normal font-['Arial'] leading-7">
            The Silky Vase
          </div>
          <div className="text-[#2a254b] text-lg font-normal font-['Arial'] leading-[27px]">
            £125
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 w-[163px] md:w-[305px]">
          <div className="w-full h-auto flex justify-center">
            <Image className="w-[163px] h-[201px] md:w-[305px] md:h-[375px]" src="/images/chair-right.png" alt="The Dandy chair" width={305} height={375} />
          </div>
          <div className="text-[#2a254b] text-xl font-normal font-['Arial'] leading-7">
            The Dandy chair
          </div>
          <div className="text-[#2a254b] text-lg font-normal font-['Arial'] leading-[27px]">
            £250
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="px-8 py-4 bg-[#f9f9f9] border text-[#2a254b] text-base font-normal font-['Arial'] leading-normal cursor-pointer">
          View collection
        </div>
      </div>
    </div>
  );
};

export default ListingsSection;
