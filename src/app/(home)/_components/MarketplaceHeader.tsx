"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "./ProductCard";
interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  status: "In Stock" | "Out Stock";
}
const products: Product[] = [
  {
    name: "Wireless Bluetooth Earbuds",
    description: "High-quality wireless earbuds with noise cancellation.",
    price: "₦15,000",
    image: "/imgs/earbud.png",
    status: "In Stock",
  },
  {
    name: "Bluetooth Speaker",
    description: "A portable Bluetooth speaker with deep bass.",
    price: "₦12,000",
    image: "/imgs/speaker.png",
    status: "Out Stock",
  },
  {
    name: "USB-C Cable",
    description: "Fast charging USB-C cable.",
    price: "₦3,000",
    image: "/imgs/usb-cable.png",
    status: "In Stock",
  },
  {
    name: "Smartphone Stand",
    description: "Adjustable stand for smartphones and tablets.",
    price: "₦5,000",
    image: "/imgs/phone-stand.png",
    status: "In Stock",
  },
];
export default function MarketplaceHeader() {
  const { getTotalItems, setOpenCart } = useCart();
  return (
    <>
      {/* header */}
      <div className="w-full ">
        <div className="flex items-center mb-9 justify-between">
          <h2 className=" text-lg md:text-xl lg:text-2xl font-bold font-dm-sans text-black leading-6 tracking-tighter  ">
            Marketplace
          </h2>
          <button
            className="bg-primary rounded-full relative w-fit p-2"
            onClick={() => setOpenCart && setOpenCart(true)}
          >
            <span className="absolute -top-1 -right-1 bg-white text-primary text-[8px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
              {getTotalItems()}
            </span>
            <div className="w-6 h-6 relative">
              <Image fill src="/icon/cart.svg" alt="cart" />
            </div>
          </button>
        </div>
        <nav className="flex gap-2.5 text-xs md:text-sm mb-5">
          <button className="px-4 py-1.5 rounded-full text-nowrap bg-gray-100 text-primary font-medium font-dm-sans  shadow-sm">
            All services
          </button>
          <button className="px-2 py-1 rounded-full text-[#232646] font-dm-sans ">
            Audio
          </button>
          <button className="px-2 py-1 rounded-full text-[#232646] font-dm-sans ">
            Accessories
          </button>
          <button className="px-2 py-1 rounded-full text-[#232646] font-dm-sans ">
            Apply
          </button>
        </nav>
      </div>

      {/* product List */}
      <div className=" space-y-3">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </>
  );
}
