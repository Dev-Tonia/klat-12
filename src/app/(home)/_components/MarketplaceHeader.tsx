import React from "react";

export default function MarketplaceHeader() {
  return (
    <div className="w-full ">
      <div className="flex items-center mb-9 justify-between">
        <h2 className="text-2xl font-bold font-dm-sans text-black leading-6 tracking-tighter  ">
          Marketplace
        </h2>
        <button className="bg-primary rounded-full p-2">
          <img src="/icon/cart.svg" alt="cart" className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex gap-2.5 mb-5">
        <button className="px-4 py-1.5 rounded-full text-nowrap bg-gray-100 text-primary font-medium font-dm-sans text-sm shadow-sm">
          All services
        </button>
        <button className="px-2 py-1 rounded-full text-[#232646] font-dm-sans text-sm">
          Audio
        </button>
        <button className="px-2 py-1 rounded-full text-[#232646] font-dm-sans text-sm">
          Accessories
        </button>
        <button className="px-2 py-1 rounded-full text-[#232646] font-dm-sans text-sm">
          Apply
        </button>
      </nav>
    </div>
  );
}
