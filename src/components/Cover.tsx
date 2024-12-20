import React from "react";
import Link from "next/link";
import Image from "next/image";

const Cover: React.FC = () => {
  return (
    <div className="w-full h-auto relative py-10 md:py-20">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="absolute left-[314px] top-[146px] text-center text-white text-[80px] font-bold leading-[80px]">
          ecommerce
          <br />
          user interface kit
        </div>
        <div className="absolute left-[557px] top-[78px] text-[#8f93ff] text-[51.70px]  leading-[51.70px] font-['Dancing Script']">
          JUST UX
        </div>
        <div className="absolute left-[42px] top-[386px] flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col justify-center items-center w-[209.27px] h-[257.31px]">
            <Image src="/images/dandy-chair.png" className="relative object-contain" alt="Product" width={209.27} height={257.31} priority={true} />
          </div>
          <div className="flex flex-col justify-start items-start gap-[5.49px]">
            <div className="text-white text-xl  leading-7">The Dandy chair</div>
            <div className="text-white text-lg  leading-[27px]">£250</div>
          </div>
        </div>
        <div className="absolute left-[289.27px] top-[441px] flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col justify-center items-center w-[209.27px] h-[257.31px]">
            <Image src="/images/new-lamp1.png" className="relative object-contain" alt="Product" width={209.27} height={257.31} priority={true} />
          </div>
          <div className="flex flex-col justify-start items-start gap-[5.49px]">
            <div className="text-white text-xl  leading-7">New Lamp</div>
            <div className="text-white text-lg  leading-[27px]">£250</div>
          </div>
        </div>
        <div className="absolute left-[536.55px] top-[367px] flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center w-[209.27px] h-[257.31px]">
            <Image src="/images/stanley-table.png" className="relative object-contain" alt="Product" width={209.27} height={257.31} priority={true} />
          </div>
          <div className="flex flex-col justify-start items-start gap-[5.49px]">
            <div className="text-white text-xl  leading-7">The Stanley Table</div>
            <div className="text-white text-lg  leading-[27px]">£125</div>
          </div>
        </div>
        <div className="absolute left-[785px] top-[411px] flex flex-col justify-start items-start gap-6">
          <div className="flex flex-col justify-center items-center w-[209.27px] h-[257.31px]">
            <Image src="/images/new-lamp2.png" className="relative object-contain" alt="Product" width={209.27} height={257.31} priority={true} />
          </div>
          <div className="flex flex-col justify-start items-start gap-[5.49px]">
            <div className="text-white text-xl  leading-7 ">New Lamp</div>
            <div className="text-white text-lg  leading-[27px] ">£250</div>
          </div>
        </div>
        <div className="absolute left-[1032.27px] top-[360px] flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center w-[209.27px] h-[257.31px]">
            <Image src="/images/andel-vase.png" className="relative object-contain" alt="Product" width={209.27} height={257.31} priority={true} />
          </div>
          <div className="flex flex-col justify-start items-start gap-[5.49px]">
            <div className="text-white text-xl  leading-7 ">Andel Vase</div>
            <div className="text-white text-lg  leading-[27px] ">£95</div>
          </div>
        </div>
        <div className="absolute left-[570px] top-[800px] md:left-[570px] md:top-[800px]">
          <Link href="/home">
            <button className="bg-[#8f93ff] text-white py-2 px-4 rounded-lg hover:bg-[#7077d5] transition-all duration-300">Enter Site</button>
          </Link>
        </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="text-center text-[#8f93ff] text-[20px]  leading-tight font-['Dancing Script'] mb-4">
          JUST UX
        </div>
        <div className="text-center text-white text-[30px] font-bold leading-tight mb-4">
          ecommerce
          <br />
          user interface kit
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="w-[150px] flex flex-col items-center">
            <Image src="/images/dandy-chair.png" alt="Product" width={150} height={200} priority={true} className="object-contain" />
            <div className="text-white text-sm mt-2">The Dandy chair</div>
            <div className="text-white text-xs">£250</div>
          </div>
          <div className="w-[150px] flex flex-col items-center">
            <Image src="/images/new-lamp1.png" alt="Product" width={150} height={200} priority={true} className="object-contain" />
            <div className="text-white text-sm mt-2">New Lamp</div>
            <div className="text-white text-xs">£250</div>
          </div>
          <div className="w-[150px] flex flex-col items-center">
            <Image src="/images/stanley-table.png" alt="Product" width={150} height={200} priority={true} className="object-contain" />
            <div className="text-white text-sm mt-2">The Stanley Table</div>
            <div className="text-white text-xs">£125</div>
          </div>
          <div className="w-[150px] flex flex-col items-center">
            <Image src="/images/new-lamp2.png" alt="Product" width={150} height={200} priority={true} className="object-contain" />
            <div className="text-white text-sm mt-2">New Lamp</div>
            <div className="text-white text-xs">£250</div>
          </div>
          <div className="w-[150px] flex flex-col items-center">
            <Image src="/images/andel-vase.png" alt="Product" width={150} height={200} priority={true} className="object-contain" />
            <div className="text-white text-sm mt-2">Andel Vase</div>
            <div className="text-white text-xs">£95</div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Link href="/home">
            <button className="bg-[#8f93ff] text-white py-2 px-4 rounded-lg hover:bg-[#7077d5] transition-all duration-300">Enter Site</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cover;
