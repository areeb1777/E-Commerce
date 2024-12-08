import React from "react";
import Image from 'next/image';

const FeaturesSection: React.FC = () => {
  return (
    <div className="w-full h-auto bg-white py-10 px-4">
      {/* Mobile View */}
      <div className="md:hidden bg-white">
        <div className="text-black text-xl font-normal font-[Arial] leading-7 w-[274px] mb-4">
          From a studio in London to a global brand with<br />over 400 outlets
        </div>
        <div className="text-black text-sm font-normal font-[Arial] leading-[21px] w-[342px] mb-4">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </div>
        <div className="bg-[#f9f9f9] border px-8 py-4 w-[342px] mb-4">
          <div className="text-black text-base font-normal font-[Arial] leading-normal">
            Get in touch
          </div>
        </div>
        <div className="relative w-[390px] h-[358px] mb-4">
          <Image src="/images/room.png" alt="Furniture Image" fill style={{ objectFit: 'cover' }} sizes="100vw" />
        </div>
      </div>

      {/* Desktop and Tablet View */}
      <div className="hidden md:flex max-w-6xl mx-auto flex-col md:flex-row items-start md:items-center gap-8">
        <div className="flex-1">
          <div className="text-black text-lg md:text-2xl font-normal leading-6 md:leading-9 font-[Arial] mb-4">
            From a studio in London to a global brand with over 400 outlets
          </div>
          <div className="text-black text-xs md:text-sm font-normal font-[Arial] leading-5 md:leading-6 mb-6">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-[#f9f9f9] border text-black text-sm font-normal font-[Arial] leading-normal">
            Get in touch
          </button>
        </div>
        <div className="flex-1 relative w-full h-[320px] md:h-[450px]">
          <Image src="/images/room.png" alt="Furniture Image" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
