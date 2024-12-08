import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full h-auto bg-white py-10 md:py-20 px-6 md:px-20">
      <div className="relative bg-[#2a254b] flex flex-col-reverse md:flex-row justify-start items-start md:items-center md:h-[704px]">
        <img className="absolute right-0 top-0 hidden md:block w-[520px] h-[704px] object-contain" src="/images/chair-right.png" alt="Furniture" />
        <div className="relative z-10 md:w-1/2 px-6 md:px-20 py-10 md:py-20 flex flex-col justify-end md:justify-center">
          <div className="w-full md:max-w-[500px] text-white text-[32px] font-normal leading-[44.8px] font-['Clash Display'] mb-10">
            The furniture brand for the future, with timeless designs
          </div>
          <div className="text-white text-lg font-normal leading-[27px] font-['Satoshi'] mb-10">
            A new era in eco friendly furniture with Avelon, the French luxury retail brand<br />
            with nice fonts, tasteful colors and a beautiful way to display things digitally <br />
            using modern web technologies.
          </div>
          <div className="w-full md:w-auto px-8 py-4 bg-[#f9f9f9]/20 border justify-center items-center inline-flex cursor-pointer">
            <div className="text-white text-base font-normal leading-normal font-['Satoshi']">View collection</div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full max-w-[390px] h-auto bg-[#2a254b] px-6 pt-10 pb-6 flex flex-col justify-end items-start gap-20">
        <div className="w-full max-w-[342px] text-white text-[32px] font-normal leading-[44.8px] font-['Clash Display']">
          The furniture brand for the future, with timeless designs
        </div>
        <div className="flex flex-col justify-start items-start gap-8">
          <div className="w-full max-w-[342px] text-white text-lg font-normal leading-[27px] font-['Satoshi']">
            A new era in eco friendly furniture with Avelon, the French luxury retail brand<br />
            with nice fonts, tasteful colors and a beautiful way to display things digitally <br />
            using modern web technologies.
          </div>
          <div className="w-full max-w-[342px] px-8 py-4 bg-[#f9f9f9]/20 border justify-center items-center inline-flex cursor-pointer">
            <div className="text-white text-base font-normal leading-normal font-['Satoshi']">View collection</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
