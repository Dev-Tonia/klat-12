"use client";
import React from "react";
import GradientCard from "./GradientCard";
import Image from "next/image";
import GradientCardHeading from "./GradientCardHeading";
import MobileFrame from "./MobileFrame";
import ProductCard from "./ProductCard";
import MarketplaceHeader from "./MarketplaceHeader";
import CartHeader from "./CartHeader";
import { useCart } from "@/contexts/CartContext";

const items = [
  "Receive Payments from Customers Instantly",
  "Daily Business Account Access",
  "Automated Receipts, Inventory, and Client Messaging",
  "List Your Products & Services for Instant Orders",
  "API & Business Integrations – Tailored for growth",
  "Manage Customers, Vendors, and Team Communication",
];

export default function KlatBusiness() {
  const { openCart } = useCart();
  return (
    <section className=" py-10 md:py-15 lg:py-20    px-[clamp(0.5rem,5vw,112px)]  md:px-[clamp(1rem,5vw,112px)] ">
      <GradientCard className=" bg-[linear-gradient(179.54deg,#CBDFEC_-3.44%,#9ABFDA_45.36%,#779BC1_89.47%)]">
        <div className=" flex md:flex-row flex-col gap-10 2xl:gap-20 pt-10 2xl:px-9 items-center md:items-end ">
          <div className=" pb-10 md:w-7/12 2xl:w-8/12">
            <div className=" size-15 bg-gray-50 rounded-full flex justify-center items-center ">
              <div className=" relative size-8.5">
                <Image fill src="/icon/shop.svg" alt="app store" />
              </div>
            </div>
            <div className=" my-5 border border-white bg-white/30 w-fit rounded-2xl text-primary py-1 px-3 font-dm-sans text-sm font-medium">
              Join the Future of Social Commerce
            </div>
            <GradientCardHeading
              data={{
                title: "Klat Business makes it simple, secure, and scalable.",
                desc: "Klat Business is built for entrepreneurs, small businesses, and growing brands who want to sell, chat, and get paid — all in one place.",
              }}
            />
            <ul className="mt-8 space-y-4 font-dm-sans text-white text-lg">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 relative mt-1">
                    <Image fill src="/icon/trick-circle.svg" alt="check" />
                  </div>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className=" md:w-5/12 2xl:w-4/12 shrink-0 ">
            <MobileFrame cardHeight="h-160 overflow-y-auto hide-scrollbar">
              {openCart ? <CartHeader /> : <MarketplaceHeader />}
            </MobileFrame>
          </div>
        </div>
      </GradientCard>
    </section>
  );
}
