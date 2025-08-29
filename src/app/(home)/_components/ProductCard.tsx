// ProductCard.tsx
import React from "react";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="rounded-xl border border-gray-200 w-full py-2.5 pr-2 ">
      <div className=" flex gap-2.5">
        {/* product image */}
        <div className=" mt-2">
          <Image
            src="/imgs/earbud.png"
            alt="Wireless Bluetooth Earbuds"
            width={60}
            height={80}
            className="object-contain"
          />
        </div>
        {/* product details */}
        <div className=" space-y-2.5  flex-1">
          <div className=" space-y-2.5">
            <div className=" flex items-start gap-2 justify-between">
              <div className="font-dm-sans tracking-tighter leading-5.5">
                Wireless Bluetooth Earbuds
              </div>
              <span className=" px-3 py-1 text-nowrap font-inter rounded-full bg-green-50 text-green-700 text-xs font-medium  tracking-tighter">
                In Stock
              </span>
            </div>
            <div className=" text-xs text-gray-400 font-dm-sans ">
              High-quality wireless earbuds with noise cancellation
            </div>
            {/* </div> */}
          </div>
          <div className=" font-bold  leading-5.5 tracking-tighter font-dm-sans text-black">
            ₦15,000
          </div>
          <div className="flex gap-3 mt-4">
            <button className="flex-1 border border-gray-300 text-sm leading-3 rounded-full py-2 font-dm-sans text-primary bg-white ">
              Inquire
            </button>
            <button className="flex-1 flex items-center text-xs justify-center px-2 gap-2 rounded-full py-2 bg-[#232646] text-white font-dm-sans font-medium hover:bg-[#181a2f] transition">
              <img src="/icon/cart.svg" alt="cart" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
