"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TopNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="TopNav relative bg-white">
      {/* Desktop View */}
      <div className="hidden md:block w-full max-w-[1440px] mx-auto h-[132px] relative bg-white px-4 lg:px-8 xl:px-12">
        <div className="absolute left-[28px] top-[20px] cursor-pointer">
          <Image
            src="/icons/search.svg"
            alt="Search Icon"
            width={24}
            height={24}
          />
        </div>
        <Link
          href="/home"
          className="absolute left-[50%] transform -translate-x-1/2 top-[20px] text-[#211f2d] text-2xl"
        >
          Avion
        </Link>
        <div className="absolute right-[60px] top-[20px] cursor-pointer">
          <Link href="/cart">
            <Image
              src="/icons/cart.svg"
              alt="Cart Icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className="absolute right-[20px] top-[20px] cursor-pointer">
          <Image src="/icons/user.svg" alt="User Icon" width={24} height={24} />
        </div>
        <div className="absolute left-[42px] top-[90px] flex gap-11 cursor-pointer">
          <Link href="/home">
            <span className="text-[#716d8d] text-base">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="text-[#716d8d] text-base">
              About
            </span>
          </Link>
          <Link href="/cart">
            <span className="text-[#716d8d] text-base">
              Cart
            </span>
          </Link>
          <Link href="/products">
            <span className="text-[#716d8d] text-base">
              Products
            </span>
          </Link>
        </div>
        <div className="absolute w-[calc(100%-56px)] left-[28px] top-[70px] border border-black/10"></div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex w-full h-[69px] pl-6 pr-5 pt-5 pb-[19px] justify-between items-center">
        <Link
          href="/home"
          className="Avion text-[#211f2d] text-2xl"
        >
          Avion
        </Link>
        <div className="flex items-center gap-5">
          <Image
            src="/icons/search.svg"
            alt="Search Icon"
            width={24}
            height={24}
          />
          <button onClick={toggleMenu}>
            <Image
              src="/icons/menu.svg"
              alt="Menu Icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white w-full absolute top-14 left-0 flex flex-col items-start p-4 shadow-lg z-10">
          <Link href="/home">
            <span className="text-[#716d8d] text-base mb-2">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="text-[#716d8d] text-base mb-2">
              About
            </span>
          </Link>
          <Link href="/cart">
            <span className="text-[#716d8d] text-base mb-2">
              Cart
            </span>
          </Link>
          <Link href="/products">
            <span className="text-[#716d8d] text-base mb-2">
              Products
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopNav;
