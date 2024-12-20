import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Filters: React.FC = () => {
  return (
    <div className="w-full h-auto px-4 py-2 bg-white flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex justify-start items-start gap-3 flex-wrap cursor-pointer">
        {['Category', 'Product type'].map((filter) => (
          <div key={filter} className="px-6 py-3 bg-white border flex justify-between items-center gap-2">
            <div className="text-[#2a254b] text-base   leading-normal">{filter}</div>
            <FaCaretDown className="text-[#2a254b]" />
          </div>
        ))}
      </div>
      <div className="flex justify-start items-center gap-4 mt-2 md:mt-0 cursor-pointer">
        <div className="text-[#2a254b] text-sm   leading-[21px]">Sorting by:</div>
        <div className="px-6 py-3 bg-white border flex justify-between items-center gap-2">
          <div className="text-[#2a254b] text-base   leading-normal">Date added</div>
          <FaCaretDown className="text-[#2a254b]" />
        </div>
      </div>
    </div>
  );
};

export default Filters;
