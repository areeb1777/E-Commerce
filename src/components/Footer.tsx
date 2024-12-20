"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="Footer w-full bg-[#2a254b] py-10 md:py-20 px-4 md:px-10">
      {/* Mobile View */}
      <div className="md:hidden bg-[#2a254b] cursor-pointer">
        <div className="flex flex-col w-full h-auto bg-[#2a254b] px-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <div className="text-white text-base  ">Menu</div>
              <div className="text-white text-sm  ">New arrivals</div>
              <div className="text-white text-sm  ">Best sellers</div>
              <div className="text-white text-sm  ">Recently viewed</div>
              <div className="text-white text-sm  ">Popular this week</div>
              <Link href="/products">
                <div className="text-white text-sm  ">All products</div>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-white text-base  ">Categories</div>
              <div className="text-white text-sm  ">Crockery</div>
              <div className="text-white text-sm  ">Furniture</div>
              <div className="text-white text-sm  ">Homeware</div>
              <div className="text-white text-sm  ">Plant pots</div>
              <div className="text-white text-sm  ">Chairs</div>
              <div className="text-white text-sm  ">Crockery</div>
            </div>
          </div>
          <div className="flex flex-col mt-10 gap-3">
            <div className="text-white text-base  ">Our company</div>
            <Link href="/about">
              <div className="text-white text-sm  ">About us</div>
            </Link>
            <div className="text-white text-sm  ">Vacancies</div>
            <div className="text-white text-sm  ">Contact us</div>
            <div className="text-white text-sm  ">Privacy</div>
            <div className="text-white text-sm  ">Returns policy</div>
          </div>
          <div className="flex flex-col mt-10 gap-3">
            <div className="text-white text-base  ">Join our mailing list</div>
            <div className="flex w-full mt-2">
              <input
                type="email"
                className="h-14 pl-8 pr-4 py-[17px] bg-white/20 text-white text-base   flex-grow"
                placeholder="your@email.com"
              />
              <div className="px-1 py-3 bg-white border justify-center items-center flex cursor-pointer">
                <div className="text-[#2a254b] text-base   leading-normal">
                  Sign up
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-[#4e4c92] mt-10 pt-4 text-center">
            <div className="text-white text-sm  ">Copyright 2022 Avion LTD</div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex max-w-6xl mx-auto flex-col md:flex-row items-start gap-8">
        <div className="flex-1 flex-col justify-start items-start gap-3 cursor-pointer">
          <div className="text-white text-base  ">Menu</div>
          <div className="text-white text-sm  ">New arrivals</div>
          <div className="text-white text-sm  ">Best sellers</div>
          <div className="text-white text-sm  ">Recently viewed</div>
          <div className="text-white text-sm  ">Popular this week</div>
          <Link href="/products">
            <div className="text-white text-sm  ">All products</div>
          </Link>
        </div>
        <div className="flex-1 flex-col justify-start items-start gap-3">
          <div className="text-white text-base  ">Categories</div>
          <div className="text-white text-sm  ">Crockery</div>
          <div className="text-white text-sm  ">Furniture</div>
          <div className="text-white text-sm  ">Homeware</div>
          <div className="text-white text-sm  ">Plant pots</div>
          <div className="text-white text-sm  ">Chairs</div>
          <div className="text-white text-sm  ">Crockery</div>
        </div>
        <div className="flex-1 flex-col justify-start items-start gap-3">
          <div className="text-white text-base  ">Our company</div>
          <Link href="/about">
            <div className="text-white text-sm  ">About us</div>
          </Link>
          <div className="text-white text-sm  ">Vacancies</div>
          <div className="text-white text-sm  ">Contact us</div>
          <div className="text-white text-sm  ">Privacy</div>
          <div className="text-white text-sm  ">Returns policy</div>
        </div>
        <div className="flex-1 flex-col justify-center items-start gap-3">
          <div className="text-white text-base  ">Join our mailing list</div>
          <div className="flex w-full">
            <input
              type="email"
              className="h-14 pl-8 pr-4 py-[17px] bg-white/20 text-white text-base   flex-grow"
              placeholder="your@email.com"
            />
            <div className="px-4 py-4 bg-white border justify-center items-center gap-2.5 flex cursor-pointer">
              <div className="text-[#2a254b] text-base   leading-normal w-16">
                Sign up
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-between items-center w-full border-t border-[#4e4c92] pt-4 mt-16">
        <div className="text-white text-sm  ">Copyright 2022 Avion LTD</div>
        <div className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/muhammad-areeb-a295192b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn Icon"
              width={24}
              height={24}
              priority={true}
              className="w-6 h-6 bg-transparent"
            />
          </Link>
          <Link
            href="https://web.facebook.com/Areebmalik7765"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook Icon"
              width={24}
              height={24}
              priority={true}
              className="w-6 h-6 bg-transparent"
            />
          </Link>
          <Link
            href="https://www.instagram.com/areeb_malik1777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/instagram.svg"
              alt="Instagram Icon"
              width={24}
              height={24}
              priority={true}
              className="w-6 h-6 bg-transparent"
            />
          </Link>
          <Link
            href="https://www.skype.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/skype.svg"
              alt="Skype Icon"
              width={24}
              height={24}
              priority={true}
              className="w-6 h-6 bg-transparent"
            />
          </Link>
          <Link
            href="https://x.com/areeb_17777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/twitter.svg"
              alt="Twitter Icon"
              width={24}
              height={24}
              priority={true}
              className="w-6 h-6 bg-transparent"
            />
          </Link>
          <Link
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/pinterest.svg"
              alt="Pinterest Icon"
              width={24}
              height={24}
              priority={true}
              className="w-6 h-6 bg-transparent"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
