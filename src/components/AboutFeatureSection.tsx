import React from "react";
import Image from 'next/image';

const AboutFeaturesSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto relative flex flex-col md:flex-row">
      {/* Image on the left side */}
      <div className="relative w-full h-[300px] md:w-1/2 md:h-[603px]">
        <Image 
          src="/images/about-feature-section.png" 
          alt="Furniture Image" 
          fill 
          style={{ objectFit: 'cover' }} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          className="absolute left-0 top-0"
        />
      </div>
      
      {/* Right Content */}
      <div className="w-full h-auto md:w-1/2 md:h-[603px] flex flex-col justify-center items-start p-8 bg-white">
        <div className="text-center md:text-left text-[#2a254b] text-2xl md:text-4xl font-normal font-['Clash Display'] leading-[33.60px] md:leading-[50.40px] mb-4">
          Our service isn’t just personal, it’s actually<br/>hyper personally exquisite
        </div>
        <div className="w-full md:w-[536px] text-[#505876] text-base font-normal font-['Satoshi'] mb-6">
          When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </div>
        <button className="px-8 py-4 bg-[#f9f9f9] border text-[#2a254b] text-base font-normal font-['Satoshi'] leading-normal">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default AboutFeaturesSection;
