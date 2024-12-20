import React from "react";
import Image from 'next/image';
import Link from "next/link";

const products = [
  { id: 1, name: "Rustic Vase Set", price: "£155", image: "/images/rustic-vase.png" },
  { id: 2, name: "The Lucy Lamp", price: "£399", image: "/images/1.png" },
  { id: 3, name: "The Silky Vase", price: "£125", image: "/images/silky-vase.png" },
  { id: 4, name: "The Dandy Chair", price: "£250", image: "/images/dandy-chair.png" },
  { id: 5, name: "Elegant Vase", price: "£130", image: "/images/2.png" },
  { id: 6, name: "Modern Lamp", price: "£220", image: "/images/3.png" },
  { id: 7, name: "Wooden Table", price: "£300", image: "/images/4.png" },
  { id: 8, name: "Classic Chair", price: "£195", image: "/images/rustic-vase.png" },
  { id: 9, name: "Decorative Pot", price: "£80", image: "/images/1.png" },
];

const ProductListing: React.FC = () => {
  return (
    <div className="w-full h-auto bg-white py-10 md:py-20 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-start gap-4 w-full">
            <div className="w-full h-auto flex justify-center">
              <Image className="w-full h-auto" src={product.image} alt={product.name} width={305} height={375} />
            </div>
            <div className="text-[#2a254b] text-xl   leading-7">
              {product.name}
            </div>
            <div className="text-[#2a254b] text-lg   leading-[27px]">
              {product.price}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href='/products'>
        <div className="px-8 py-4 bg-[#f9f9f9] border text-[#2a254b] text-base   leading-normal cursor-pointer">
          View collection
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductListing;
