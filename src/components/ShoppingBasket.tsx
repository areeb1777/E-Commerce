'use client';

import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Graystone vase',
    description: 'A timeless ceramic vase with a tri color grey glaze.',
    price: 85,
    quantity: 1,
    imageUrl: '/images/product-image1.png'
  },
  {
    id: 2,
    name: 'Basic white vase',
    description: 'Beautiful and simple this is one for the classics',
    price: 125,
    quantity: 1,
    imageUrl: '/images/product-image2.png'
  }
];

const ShoppingBasket: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const updateQuantity = (id: number, delta: number) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, quantity: Math.max(1, product.quantity + delta) }
        : product
    ));
  };

  const getTotalPrice = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="w-full h-auto relative bg-[#f9f9f9] py-10 px-4 md:py-20 md:px-20 font-[Arial]">
      <h1 className="text-[#2a254b] text-2xl md:text-4xl font-normal leading-tight text-center md:text-left">
        Your shopping cart
      </h1>
      <div className="hidden md:flex justify-between text-[#2a254b] text-sm font-normal mt-10 mb-5">
        <span>Product</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>
      {products.map(product => (
        <div key={product.id} className="flex flex-col md:flex-row justify-between items-center my-4 py-4 border-b border-[#eae8f4]">
          <div className="flex items-center gap-4 w-full md:w-1/2">
            <img src={product.imageUrl} alt={product.name} className="w-[109px] h-[134px]" />
            <div className="flex flex-col">
              <h2 className="text-[#2a254b] text-lg md:text-xl font-normal">{product.name}</h2>
              <p className="text-[#2a254b] text-sm font-normal leading-tight">{product.description}</p>
              <span className="text-[#2a254b] text-base font-normal">£{product.price}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center border px-4 py-3 bg-[#f9f9f9]">
              <button onClick={() => updateQuantity(product.id, -1)} className="text-[#eae8f4]">-</button>
              <span className="text-[#2a254b] mx-2">{product.quantity}</span>
              <button onClick={() => updateQuantity(product.id, 1)} className="text-[#eae8f4]">+</button>
            </div>
            <span className="text-[#2a254b] text-lg font-normal">£{product.price * product.quantity}</span>
          </div>
        </div>
      ))}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8">
        <div className="text-[#4e4c92] text-xl font-normal">Subtotal</div>
        <div className="text-[#2a254b] text-2xl font-normal">£{getTotalPrice()}</div>
        <div className="text-[#4e4c92] text-sm font-normal mt-2 md:mt-0">
          Taxes and shipping are calculated at checkout
        </div>
        <button className="px-8 py-4 bg-[#2a254b] text-white text-base font-normal mt-4 md:mt-0">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingBasket;
